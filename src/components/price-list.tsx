import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  BadgeCheck,
  ChevronDown,
  ChevronUp,
  Clock,
  Download,
  Eye,
  MapPin,
  Pencil,
  Phone,
  Printer,
  RotateCcw,
  Search,
  Share2,
  Upload,
} from "lucide-react";
import {
  DEFAULT_CATALOG,
  catalogSchema,
  formatMoney,
  loadCatalog,
  normalizeText,
  parseAmount,
  saveCatalog,
  uid,
  type Catalog,
  type Product,
} from "@/lib/catalog";

type Draft = {
  categoryId: string;
  name: string;
  spec: string;
  unit: string;
  price: string;
  note: string;
  inStock: boolean;
};

const fieldClass =
  "h-11 w-full rounded-lg border border-line bg-sheet px-3 text-ink outline-none transition-colors duration-200 focus-visible:border-gold";

const ghostBtn =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-sheet px-4 text-sm font-medium text-ink transition-colors duration-200 hover:border-gold";

const goldBtn =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-gold bg-gold px-4 text-sm font-medium text-on-gold transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-on-navy";

const navyBtn =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-navy bg-navy px-4 text-sm font-medium text-on-navy transition-colors duration-200";

function IconButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex size-11 items-center justify-center rounded-lg border border-line bg-sheet text-ink transition-colors duration-200 hover:border-gold disabled:opacity-40"
    >
      {children}
    </button>
  );
}

function productMatches(product: Product, categoryName: string, query: string) {
  if (!query) return true;
  const haystack = normalizeText(
    `${categoryName} ${product.name} ${product.spec} ${product.note} ${product.unit} ${product.price}`,
  );
  return haystack.includes(normalizeText(query));
}

export function PriceListApp() {
  const [catalog, setCatalog] = useState<Catalog>(DEFAULT_CATALOG);
  const [ready, setReady] = useState(false);
  const [editing, setEditing] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [banner, setBanner] = useState<string | null>(null);
  const [pending, setPending] = useState<
    { kind: "product" | "category"; id: string } | { kind: "reset" } | null
  >(null);
  const [draft, setDraft] = useState<Draft>({
    categoryId: DEFAULT_CATALOG.categories[0]?.id ?? "",
    name: "",
    spec: "",
    unit: "دستگاه",
    price: "",
    note: "",
    inStock: true,
  });
  const [newCatName, setNewCatName] = useState("");
  const importRef = useRef<HTMLInputElement>(null);
  const logoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const loaded = loadCatalog();
    setCatalog(loaded);
    setDraft((current) => ({
      ...current,
      categoryId: loaded.categories.some((category) => category.id === current.categoryId)
        ? current.categoryId
        : (loaded.categories[0]?.id ?? ""),
    }));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      saveCatalog(catalog);
    } catch {
      setBanner("فضای ذخیره این مرورگر پر است. یک نسخه پشتیبان بگیرید.");
    }
  }, [catalog, ready]);

  useEffect(() => {
    document.title = `${catalog.shop.name} | لیست قیمت دوربین مداربسته`;
  }, [catalog.shop.name]);

  const shop = catalog.shop;
  const q = query.trim();

  function patchShop(patch: Partial<Catalog["shop"]>) {
    setCatalog((current) => ({ ...current, shop: { ...current.shop, ...patch } }));
  }

  function patchProduct(id: string, patch: Partial<Product>) {
    setCatalog((current) => ({
      ...current,
      products: current.products.map((product) =>
        product.id === id ? { ...product, ...patch } : product,
      ),
    }));
  }

  function countFor(categoryId: string, categoryName: string) {
    return catalog.products.filter(
      (product) => product.categoryId === categoryId && productMatches(product, categoryName, q),
    ).length;
  }

  const sections = catalog.categories
    .filter((category) => activeCat === "all" || category.id === activeCat)
    .map((category) => ({
      category,
      items: catalog.products.filter(
        (product) =>
          product.categoryId === category.id && productMatches(product, category.name, q),
      ),
    }))
    .filter((section) => (editing && !q) || section.items.length > 0);

  const visibleCount = sections.reduce((sum, section) => sum + section.items.length, 0);
  const highlights = shop.highlights
    .split("·")
    .map((item) => item.trim())
    .filter(Boolean);

  function moveCategory(id: string, dir: -1 | 1) {
    setCatalog((current) => {
      const categories = [...current.categories];
      const index = categories.findIndex((category) => category.id === id);
      const next = index + dir;
      if (index < 0 || next < 0 || next >= categories.length) return current;
      const swapped = [...categories];
      const item = swapped[index];
      swapped[index] = swapped[next];
      swapped[next] = item;
      return { ...current, categories: swapped };
    });
  }

  function moveProduct(id: string, dir: -1 | 1) {
    setCatalog((current) => {
      const products = [...current.products];
      const index = products.findIndex((product) => product.id === id);
      if (index < 0) return current;
      const categoryId = products[index].categoryId;
      let next = index + dir;
      while (next >= 0 && next < products.length && products[next].categoryId !== categoryId) {
        next += dir;
      }
      if (next < 0 || next >= products.length) return current;
      const swapped = [...products];
      const item = swapped[index];
      swapped[index] = swapped[next];
      swapped[next] = item;
      return { ...current, products: swapped };
    });
  }

  function addCategory() {
    const name = newCatName.trim();
    if (!name) {
      setBanner("نام دسته را بنویسید.");
      return;
    }
    const id = uid("cat");
    setCatalog((current) => ({
      ...current,
      categories: [...current.categories, { id, name }],
    }));
    setDraft((current) => ({ ...current, categoryId: id }));
    setNewCatName("");
    setActiveCat("all");
    setBanner("دسته اضافه شد.");
  }

  function addProduct() {
    const name = draft.name.trim();
    const price = parseAmount(draft.price);
    if (!name) {
      setBanner("نام کالا را بنویسید.");
      return;
    }
    if (price === null) {
      setBanner("قیمت را به عدد بنویسید. برای کالای رایگان صفر بگذارید.");
      return;
    }
    if (!catalog.categories.some((category) => category.id === draft.categoryId)) {
      setBanner("اول یک دسته بسازید و انتخاب کنید.");
      return;
    }
    const product: Product = {
      id: uid("p"),
      categoryId: draft.categoryId,
      name,
      spec: draft.spec.trim(),
      unit: draft.unit.trim() || "عدد",
      price,
      inStock: draft.inStock,
      note: draft.note.trim(),
    };
    setCatalog((current) => ({ ...current, products: [...current.products, product] }));
    setDraft((current) => ({ ...current, name: "", spec: "", price: "", note: "" }));
    setBanner("کالا به فهرست اضافه شد.");
  }

  function removeProduct(id: string) {
    setCatalog((current) => ({
      ...current,
      products: current.products.filter((product) => product.id !== id),
    }));
    setPending(null);
  }

  function removeCategory(id: string) {
    setCatalog((current) => ({
      ...current,
      categories: current.categories.filter((category) => category.id !== id),
      products: current.products.filter((product) => product.categoryId !== id),
    }));
    if (activeCat === id) setActiveCat("all");
    setDraft((current) =>
      current.categoryId === id ? { ...current, categoryId: "" } : current,
    );
    setPending(null);
  }

  function downloadBackup() {
    const blob = new Blob([JSON.stringify(catalog, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "bodyguard-pricelist.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  function onImport(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = catalogSchema.safeParse(JSON.parse(String(reader.result)));
        if (!parsed.success) {
          setBanner("این فایل فهرست معتبری نیست.");
          return;
        }
        const ids = new Set(parsed.data.categories.map((category) => category.id));
        setCatalog({
          ...parsed.data,
          products: parsed.data.products.filter((product) => ids.has(product.categoryId)),
        });
        setBanner("فهرست بازیابی شد.");
      } catch {
        setBanner("خواندن فایل ممکن نشد.");
      }
    };
    reader.readAsText(file);
  }

  function onLogo(file: File) {
    if (!file.type.startsWith("image/")) {
      setBanner("برای نشان فقط تصویر انتخاب کنید.");
      return;
    }
    if (file.size > 900_000) {
      setBanner("حجم نشان را کمتر از ۹۰۰ کیلوبایت انتخاب کنید.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => patchShop({ logo: String(reader.result || "") });
    reader.readAsDataURL(file);
  }

  let running = 0;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="h-1.5 bg-gold" />
      <header className="masthead bg-navy text-on-navy">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:px-6 md:py-10">
          <div className="shrink-0">
            <div className="w-fit rounded-lg border border-gold bg-navy p-1">
              <img
                src={shop.logo || "/mark.jpg"}
                alt={`نشان تجاری ${shop.name}`}
                width={256}
                height={256}
                className="size-28 rounded-lg object-cover md:size-32"
              />
            </div>
            {editing && (
              <div className="no-print mt-3 flex flex-wrap gap-2">
                <button type="button" className={goldBtn} onClick={() => logoRef.current?.click()}>
                  تعویض نشان
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 items-center rounded-lg border border-gold px-4 text-sm text-on-navy"
                  onClick={() => patchShop({ logo: DEFAULT_CATALOG.shop.logo })}
                >
                  نشان اصلی
                </button>
                <input
                  ref={logoRef}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) onLogo(file);
                    event.target.value = "";
                  }}
                />
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gold-soft">لیست قیمت رسمی</p>
            {editing ? (
              <input
                aria-label="نام فروشگاه"
                value={shop.name}
                onChange={(event) => patchShop({ name: event.target.value })}
                className="mt-1 w-full border-b border-gold bg-transparent text-4xl font-extrabold leading-snug text-on-navy outline-none md:text-5xl"
              />
            ) : (
              <h1 className="mt-1 text-4xl font-extrabold leading-snug md:text-5xl">{shop.name}</h1>
            )}
            {editing ? (
              <input
                aria-label="نام لاتین"
                dir="ltr"
                value={shop.latin}
                onChange={(event) => patchShop({ latin: event.target.value })}
                className="mt-2 w-full border-b border-gold bg-transparent text-end text-sm font-bold tracking-widest text-gold outline-none"
              />
            ) : (
              shop.latin.trim() && (
                <p dir="ltr" className="mt-2 text-end text-sm font-bold tracking-widest text-gold">
                  {shop.latin}
                </p>
              )
            )}
            {editing ? (
              <input
                aria-label="شعار"
                value={shop.tagline}
                onChange={(event) => patchShop({ tagline: event.target.value })}
                className="mt-3 w-full border-b border-gold bg-transparent text-base text-on-navy outline-none"
              />
            ) : (
              <p className="mt-3 text-base text-on-navy">{shop.tagline}</p>
            )}
            {editing ? (
              <input
                aria-label="نوار اعتماد"
                value={shop.highlights}
                onChange={(event) => patchShop({ highlights: event.target.value })}
                className="mt-4 w-full border-b border-gold bg-transparent text-sm text-gold-soft outline-none"
              />
            ) : (
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gold-soft">
                {highlights.map((item) => (
                  <li key={item} className="inline-flex items-center gap-1.5">
                    <BadgeCheck className="size-4 text-gold" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="h-px bg-gold" />
        <div className="mx-auto grid max-w-5xl gap-4 px-4 py-5 sm:grid-cols-2 md:grid-cols-3 md:px-6">
          <Contact
            icon={<Phone className="size-4" />}
            label="تلفن فروشگاه"
            value={shop.phone}
            editing={editing}
            onChange={(phone) => patchShop({ phone })}
          />
          <Contact
            icon={<Phone className="size-4" />}
            label="همراه"
            value={shop.mobile}
            editing={editing}
            onChange={(mobile) => patchShop({ mobile })}
          />
          <Contact
            icon={<Share2 className="size-4" />}
            label="اینستاگرام"
            value={shop.social}
            editing={editing}
            onChange={(social) => patchShop({ social })}
          />
          <Contact
            icon={<Clock className="size-4" />}
            label="ساعت کاری"
            value={shop.hours}
            editing={editing}
            onChange={(hours) => patchShop({ hours })}
          />
          <Contact
            icon={<BadgeCheck className="size-4" />}
            label="پروانه کسب"
            value={shop.license}
            editing={editing}
            onChange={(license) => patchShop({ license })}
          />
          <Contact
            icon={<Clock className="size-4" />}
            label="اعتبار فهرست"
            value={shop.validUntil}
            editing={editing}
            onChange={(validUntil) => patchShop({ validUntil })}
          />
          <div className="sm:col-span-2 md:col-span-3">
            <Contact
              icon={<MapPin className="size-4" />}
              label="نشانی"
              value={shop.address}
              editing={editing}
              onChange={(address) => patchShop({ address })}
            />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6">
        <div className="no-print flex flex-wrap items-center gap-2">
          <div className="relative w-full md:w-auto md:flex-1">
            <Search
              className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted"
              aria-hidden
            />
            <input
              id="catalog-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="جستجوی کالا، برند یا مشخصات"
              aria-label="جستجو در فهرست"
              className={`${fieldClass} bg-sheet ps-10`}
            />
          </div>
          <button type="button" className={editing ? navyBtn : goldBtn} onClick={() => setEditing((value) => !value)}>
            {editing ? <Eye className="size-4" aria-hidden /> : <Pencil className="size-4" aria-hidden />}
            {editing ? "پایان ویرایش" : "ویرایش"}
          </button>
          <button type="button" className={ghostBtn} onClick={() => window.print()}>
            <Printer className="size-4" aria-hidden />
            چاپ
          </button>
          {editing && (
            <>
              <button type="button" className={ghostBtn} onClick={downloadBackup}>
                <Download className="size-4" aria-hidden />
                پشتیبان
              </button>
              <button type="button" className={ghostBtn} onClick={() => importRef.current?.click()}>
                <Upload className="size-4" aria-hidden />
                بازیابی
              </button>
              <button type="button" className={ghostBtn} onClick={() => setPending({ kind: "reset" })}>
                <RotateCcw className="size-4" aria-hidden />
                نمونه اولیه
              </button>
              <input
                ref={importRef}
                type="file"
                accept="application/json"
                className="sr-only"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) onImport(file);
                  event.target.value = "";
                }}
              />
            </>
          )}
        </div>

        {banner && (
          <div className="no-print flex items-center justify-between gap-3 rounded-lg border border-line bg-gold-soft px-4 py-3 text-sm text-on-gold" role="status">
            <p>{banner}</p>
            <button type="button" className="h-11 shrink-0 px-2 font-medium" onClick={() => setBanner(null)}>
              بستن
            </button>
          </div>
        )}

        {pending?.kind === "reset" && (
          <div className="no-print flex flex-wrap items-center gap-2 rounded-lg border border-line bg-sheet px-4 py-3 text-sm">
            <p className="font-medium">فهرست به نمونه اولیه برگردد؟ تغییرهای شما پاک می‌شود.</p>
            <button
              type="button"
              className={navyBtn}
              onClick={() => {
                setCatalog(DEFAULT_CATALOG);
                setPending(null);
                setBanner("نمونه اولیه بازگشت.");
              }}
            >
              بله، بازنشانی شود
            </button>
            <button type="button" className={ghostBtn} onClick={() => setPending(null)}>
              انصراف
            </button>
          </div>
        )}

        <article className="catalog overflow-hidden rounded-lg border border-line bg-sheet">
          <div className="flex items-baseline justify-between gap-3 border-b border-line px-4 py-4 md:px-6">
            <p className="text-lg font-bold">فهرست قیمت کالا و خدمات</p>
            <p className="text-sm text-muted">{formatMoney(visibleCount)} قلم</p>
          </div>

          <div className="no-print border-b border-line px-4 py-3 md:px-6">
            <div className="flex gap-2 overflow-x-auto">
              <Chip
                active={activeCat === "all"}
                count={catalog.categories.reduce(
                  (sum, category) => sum + countFor(category.id, category.name),
                  0,
                )}
                onClick={() => setActiveCat("all")}
              >
                همه
              </Chip>
              {catalog.categories
                .filter((category) => {
                  const count = countFor(category.id, category.name);
                  if (q) return count > 0;
                  if (!editing && count === 0) return false;
                  return true;
                })
                .map((category) => (
                  <Chip
                    key={category.id}
                    active={activeCat === category.id}
                    count={countFor(category.id, category.name)}
                    onClick={() => setActiveCat(category.id)}
                  >
                    {category.name}
                  </Chip>
                ))}
            </div>
          </div>

          {editing && (
            <form
              className="no-print grid gap-3 border-b border-line bg-paper px-4 py-4 md:px-6"
              onSubmit={(event) => {
                event.preventDefault();
                addProduct();
              }}
            >
              <p className="font-bold">کالای تازه</p>
              <div className="grid gap-3 md:grid-cols-2">
                <label className="grid gap-1 text-sm">
                  دسته
                  <select
                    className={fieldClass}
                    value={draft.categoryId}
                    onChange={(event) => setDraft((current) => ({ ...current, categoryId: event.target.value }))}
                  >
                    <option value="">انتخاب دسته</option>
                    {catalog.categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1 text-sm">
                  نام کالا
                  <input
                    className={fieldClass}
                    value={draft.name}
                    onChange={(event) => setDraft((current) => ({ ...current, name: event.target.value }))}
                  />
                </label>
                <label className="grid gap-1 text-sm md:col-span-2">
                  مشخصات
                  <input
                    className={fieldClass}
                    value={draft.spec}
                    onChange={(event) => setDraft((current) => ({ ...current, spec: event.target.value }))}
                  />
                </label>
                <label className="grid gap-1 text-sm">
                  واحد
                  <input
                    className={fieldClass}
                    list="units"
                    value={draft.unit}
                    onChange={(event) => setDraft((current) => ({ ...current, unit: event.target.value }))}
                  />
                </label>
                <label className="grid gap-1 text-sm">
                  قیمت ({shop.currency || "تومان"})
                  <input
                    className={fieldClass}
                    inputMode="numeric"
                    value={draft.price}
                    onChange={(event) => setDraft((current) => ({ ...current, price: event.target.value }))}
                    placeholder="۰ برای رایگان"
                  />
                </label>
                <label className="grid gap-1 text-sm">
                  یادداشت کوتاه
                  <input
                    className={fieldClass}
                    value={draft.note}
                    onChange={(event) => setDraft((current) => ({ ...current, note: event.target.value }))}
                    placeholder="پرفروش، پیشنهاد فروشگاه"
                  />
                </label>
                <label className="flex h-11 items-center gap-2 self-end text-sm">
                  <input
                    type="checkbox"
                    checked={draft.inStock}
                    onChange={(event) => setDraft((current) => ({ ...current, inStock: event.target.checked }))}
                  />
                  موجود است
                </label>
              </div>
              <datalist id="units">
                <option value="دستگاه" />
                <option value="عدد" />
                <option value="متر" />
                <option value="بسته" />
                <option value="پکیج" />
                <option value="خدمت" />
                <option value="سال" />
              </datalist>
              <div className="flex flex-wrap gap-2">
                <button type="submit" className={goldBtn}>
                  افزودن کالا
                </button>
              </div>
              <div className="mt-2 flex flex-wrap items-end gap-2 border-t border-line pt-3">
                <label className="grid min-w-48 flex-1 gap-1 text-sm">
                  دسته تازه
                  <input
                    className={fieldClass}
                    value={newCatName}
                    onChange={(event) => setNewCatName(event.target.value)}
                    placeholder="مثلاً دوربین بی‌سیم"
                  />
                </label>
                <button
                  type="button"
                  className={ghostBtn}
                  onClick={addCategory}
                >
                  ساخت دسته
                </button>
              </div>
              <p className="text-sm text-muted">
                هر تغییر همین‌جا در این دستگاه ذخیره می‌شود. پیش از نشان دادن به مشتری، ویرایش را ببندید.
              </p>
            </form>
          )}

          {sections.length === 0 ? (
            <p className="px-4 py-12 text-center text-muted">
              {q ? "کالایی با این عبارت پیدا نشد." : "هنوز کالایی در فهرست نیست."}
            </p>
          ) : (
            sections.map(({ category, items }) => (
              <section key={category.id} className="border-b border-line last:border-b-0">
                <header className="flex flex-wrap items-center gap-2 bg-navy px-4 py-3 text-on-navy md:px-6">
                  <span className="size-2 shrink-0 rounded-full bg-gold" aria-hidden />
                  {editing ? (
                    <input
                      aria-label="نام دسته"
                      value={category.name}
                      onChange={(event) =>
                        setCatalog((current) => ({
                          ...current,
                          categories: current.categories.map((item) =>
                            item.id === category.id ? { ...item, name: event.target.value } : item,
                          ),
                        }))
                      }
                      className="h-11 min-w-40 flex-1 border-b border-gold bg-transparent font-bold text-on-navy outline-none"
                    />
                  ) : (
                    <h2 className="min-w-0 flex-1 text-base font-bold">{category.name}</h2>
                  )}
                  <span className="text-sm text-gold-soft">{formatMoney(items.length)} قلم</span>
                  {editing && !q && (
                    <>
                      <IconButton
                        label="دسته بالاتر"
                        disabled={catalog.categories[0]?.id === category.id}
                        onClick={() => moveCategory(category.id, -1)}
                      >
                        <ChevronUp className="size-4" />
                      </IconButton>
                      <IconButton
                        label="دسته پایین‌تر"
                        disabled={catalog.categories[catalog.categories.length - 1]?.id === category.id}
                        onClick={() => moveCategory(category.id, 1)}
                      >
                        <ChevronDown className="size-4" />
                      </IconButton>
                      {pending?.kind === "category" && pending.id === category.id ? (
                        <>
                          <button type="button" className={goldBtn} onClick={() => removeCategory(category.id)}>
                            حذف دسته
                          </button>
                          <button type="button" className={ghostBtn} onClick={() => setPending(null)}>
                            انصراف
                          </button>
                        </>
                      ) : (
                        <button
                          type="button"
                          className={ghostBtn}
                          onClick={() => setPending({ kind: "category", id: category.id })}
                        >
                          حذف دسته
                        </button>
                      )}
                    </>
                  )}
                </header>
                {items.length === 0 ? (
                  <p className="px-4 py-6 text-sm text-muted md:px-6">در این دسته هنوز کالایی نیست.</p>
                ) : (
                  <ul>
                    {items.map((product, index) => {
                      running += 1;
                      const indexLabel = formatMoney(running);
                      return (
                        <li
                          key={product.id}
                          className="break-inside-avoid border-b border-line px-4 py-4 last:border-b-0 md:px-6 odd:bg-paper"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex min-w-0 flex-1 gap-3">
                              <span className="mt-1 w-8 shrink-0 text-sm font-medium tabular-nums text-navy">
                                {indexLabel}
                              </span>
                              <div className="min-w-0 flex-1">
                                {editing ? (
                                  <div className="grid gap-2">
                                    <input
                                      aria-label="نام کالا"
                                      value={product.name}
                                      onChange={(event) => patchProduct(product.id, { name: event.target.value })}
                                      className={fieldClass}
                                    />
                                    <input
                                      aria-label="مشخصات"
                                      value={product.spec}
                                      onChange={(event) => patchProduct(product.id, { spec: event.target.value })}
                                      className={fieldClass}
                                    />
                                    <div className="grid gap-2 sm:grid-cols-2">
                                      <select
                                        aria-label="دسته کالا"
                                        className={fieldClass}
                                        value={product.categoryId}
                                        onChange={(event) =>
                                          patchProduct(product.id, { categoryId: event.target.value })
                                        }
                                      >
                                        {catalog.categories.map((item) => (
                                          <option key={item.id} value={item.id}>
                                            {item.name}
                                          </option>
                                        ))}
                                      </select>
                                      <input
                                        aria-label="واحد"
                                        value={product.unit}
                                        onChange={(event) => patchProduct(product.id, { unit: event.target.value })}
                                        className={fieldClass}
                                      />
                                    </div>
                                    <input
                                      aria-label="یادداشت"
                                      value={product.note}
                                      onChange={(event) => patchProduct(product.id, { note: event.target.value })}
                                      placeholder="یادداشت"
                                      className={fieldClass}
                                    />
                                  </div>
                                ) : (
                                  <>
                                    <p className="font-bold leading-snug">{product.name}</p>
                                    <p className="mt-1 text-sm leading-relaxed text-muted">
                                      {product.spec}
                                      {product.spec && product.unit ? " · " : ""}
                                      {product.unit ? `واحد: ${product.unit}` : ""}
                                    </p>
                                    {product.note && (
                                      <span className="mt-2 inline-flex h-7 items-center rounded-full border border-gold px-2 text-xs font-medium">
                                        {product.note}
                                      </span>
                                    )}
                                  </>
                                )}
                              </div>
                            </div>
                            <div className="flex w-36 shrink-0 flex-col items-end gap-2 md:w-44">
                              {editing ? (
                                <input
                                  aria-label="قیمت"
                                  inputMode="numeric"
                                  value={String(product.price)}
                                  onFocus={(event) => event.target.select()}
                                  onChange={(event) => {
                                    const amount = parseAmount(event.target.value);
                                    patchProduct(product.id, { price: amount ?? 0 });
                                  }}
                                  className={`${fieldClass} text-end tabular-nums`}
                                />
                              ) : product.price === 0 ? (
                                <p className="text-base font-bold text-navy md:text-lg">رایگان</p>
                              ) : (
                                <p
                                  className={`text-end text-base font-bold tabular-nums md:text-lg ${product.inStock ? "text-navy" : "text-muted line-through"}`}
                                >
                                  {formatMoney(product.price)}
                                </p>
                              )}
                              {!editing && product.price !== 0 && (
                                <p className="text-xs text-muted">{shop.currency}</p>
                              )}
                              {editing ? (
                                <button
                                  type="button"
                                  className={`${product.inStock ? goldBtn : ghostBtn} w-full px-2`}
                                  onClick={() => patchProduct(product.id, { inStock: !product.inStock })}
                                >
                                  {product.inStock ? "موجود" : "ناموجود"}
                                </button>
                              ) : (
                                <span
                                  className={`inline-flex h-7 items-center rounded-full px-2 text-xs font-medium ${product.inStock ? "bg-gold-soft text-on-gold" : "border border-line text-muted"}`}
                                >
                                  {product.inStock ? "موجود" : "ناموجود"}
                                </span>
                              )}
                            </div>
                          </div>
                          {editing && !q && (
                            <div className="no-print mt-3 flex flex-wrap gap-2">
                              <IconButton
                                label="بالاتر"
                                disabled={index === 0}
                                onClick={() => moveProduct(product.id, -1)}
                              >
                                <ChevronUp className="size-4" />
                              </IconButton>
                              <IconButton
                                label="پایین‌تر"
                                disabled={index === items.length - 1}
                                onClick={() => moveProduct(product.id, 1)}
                              >
                                <ChevronDown className="size-4" />
                              </IconButton>
                              {pending?.kind === "product" && pending.id === product.id ? (
                                <>
                                  <button type="button" className={navyBtn} onClick={() => removeProduct(product.id)}>
                                    حذف شود
                                  </button>
                                  <button type="button" className={ghostBtn} onClick={() => setPending(null)}>
                                    انصراف
                                  </button>
                                </>
                              ) : (
                                <button
                                  type="button"
                                  className={ghostBtn}
                                  onClick={() => setPending({ kind: "product", id: product.id })}
                                >
                                  حذف کالا
                                </button>
                              )}
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </section>
            ))
          )}

          <footer className="border-t border-line px-4 py-5 md:px-6">
            {editing ? (
              <textarea
                aria-label="یادداشت پایین فهرست"
                value={shop.footer}
                onChange={(event) => patchShop({ footer: event.target.value })}
                className="min-h-24 w-full rounded-lg border border-line bg-sheet px-3 py-2 text-sm leading-relaxed outline-none focus-visible:border-gold"
              />
            ) : (
              <p className="text-sm leading-relaxed text-muted">{shop.footer}</p>
            )}
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-bold">{shop.name}</p>
              <p className="text-sm text-muted">
                {[shop.phone, shop.mobile, shop.validUntil].filter((item) => item.trim()).join(" · ")}
              </p>
            </div>
            {editing && (
              <label className="mt-3 grid gap-1 text-sm">
                واحد پول
                <input
                  aria-label="واحد پول"
                  value={shop.currency}
                  onChange={(event) => patchShop({ currency: event.target.value })}
                  className={fieldClass}
                />
              </label>
            )}
          </footer>
        </article>
      </div>
    </div>
  );
}

function Contact({
  icon,
  label,
  value,
  editing,
  onChange,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  editing: boolean;
  onChange: (value: string) => void;
}) {
  if (!editing && !value.trim()) return null;
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 text-gold">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-gold-soft">{label}</p>
        {editing ? (
          <input
            aria-label={label}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="mt-1 h-11 w-full border-b border-gold bg-transparent text-sm text-on-navy outline-none"
          />
        ) : (
          <p className="mt-1 text-sm leading-relaxed">{value}</p>
        )}
      </div>
    </div>
  );
}

function Chip({
  active,
  count,
  onClick,
  children,
}: {
  active: boolean;
  count: number;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-200 ${active ? "border-navy bg-navy text-on-navy" : "border-line bg-sheet text-ink"}`}
    >
      {children}
      <span className={active ? "text-gold-soft" : "text-muted"}>{formatMoney(count)}</span>
    </button>
  );
}
