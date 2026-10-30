import { z } from "zod";

const faDigits = "۰۱۲۳۴۵۶۷۸۹";
const arDigits = "٠١٢٣٤٥٦٧٨٩";

export const shopSchema = z.object({
  name: z.string(),
  latin: z.string(),
  tagline: z.string(),
  highlights: z.string(),
  phone: z.string(),
  mobile: z.string(),
  social: z.string(),
  address: z.string(),
  hours: z.string(),
  license: z.string(),
  validUntil: z.string(),
  currency: z.string(),
  footer: z.string(),
  logo: z.string(),
});

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const productSchema = z.object({
  id: z.string(),
  categoryId: z.string(),
  name: z.string(),
  spec: z.string(),
  unit: z.string(),
  price: z.number().int().nonnegative(),
  inStock: z.boolean(),
  note: z.string(),
});

export const catalogSchema = z.object({
  shop: shopSchema,
  categories: z.array(categorySchema),
  products: z.array(productSchema),
});

export type Shop = z.infer<typeof shopSchema>;
export type Category = z.infer<typeof categorySchema>;
export type Product = z.infer<typeof productSchema>;
export type Catalog = z.infer<typeof catalogSchema>;

export const STORAGE_KEY = "bodyguard-pricelist-v2";

export const DEFAULT_CATALOG = {
  shop: {
    name: "بادیگارد",
    latin: "BODYGUARD",
    tagline: "فروش، نصب و پشتیبانی دوربین مداربسته",
    highlights: "اصالت کالا · نصب در محل · پشتیبانی پس از فروش",
    phone: "۰۲۱-۹۱۰۹۳۰۴۰",
    mobile: "۰۹۱۲-۳۴۵-۶۷۸۹",
    social: "",
    address: "تهران — مراجعه و نصب با هماهنگی",
    hours: "هر روز ۹ تا ۲۱",
    license: "",
    validUntil: "تا اطلاع بعدی",
    currency: "تومان",
    footer:
      "قیمت‌ها به تومان است و تا تاریخ اعتبار این فهرست، ملاک فروشگاه بادیگارد است. هزینه کابل‌کشی در مسیرهای طولانی جداگانه محاسبه می‌شود. نصب در محل فقط با هماهنگی قبلی انجام می‌گیرد.",
    logo: "/mark.jpg",
  },
  categories: [
    { id: "cat-dome", name: "دوربین دام" },
    { id: "cat-bullet", name: "دوربین بولت" },
    { id: "cat-ptz", name: "دوربین چرخشی" },
    { id: "cat-rec", name: "دستگاه ضبط" },
    { id: "cat-hdd", name: "هارد و ذخیره‌سازی" },
    { id: "cat-kit", name: "پکیج آماده" },
    { id: "cat-cable", name: "کابل و لوازم" },
    { id: "cat-service", name: "اجرت و خدمات" },
  ],
  products: [
    {
      id: "p-dome-2",
      categoryId: "cat-dome",
      name: "دوربین دام ۲ مگاپیکسل هایک‌ویژن",
      spec: "دید در شب ۲۰ متر، لنز ۲.۸ میلی‌متر",
      unit: "دستگاه",
      price: 2150000,
      inStock: true,
      note: "پرفروش",
    },
    {
      id: "p-dome-4",
      categoryId: "cat-dome",
      name: "دوربین دام ۴ مگاپیکسل داهوا",
      spec: "میکروفن داخلی، تصویر رنگی، مناسب فضای بسته",
      unit: "دستگاه",
      price: 3450000,
      inStock: true,
      note: "",
    },
    {
      id: "p-dome-5",
      categoryId: "cat-dome",
      name: "دوربین دام ۵ مگاپیکسل تحت شبکه",
      spec: "تغذیه PoE، بدنه فلزی، لنز ۲.۸",
      unit: "دستگاه",
      price: 4600000,
      inStock: true,
      note: "",
    },
    {
      id: "p-bullet-2",
      categoryId: "cat-bullet",
      name: "دوربین بولت ۲ مگاپیکسل هایک‌ویژن",
      spec: "ضدآب IP67، دید در شب ۳۰ متر",
      unit: "دستگاه",
      price: 1980000,
      inStock: true,
      note: "",
    },
    {
      id: "p-bullet-4",
      categoryId: "cat-bullet",
      name: "دوربین بولت ۴ مگاپیکسل استارلایت",
      spec: "تصویر رنگی در شب، دید تا ۴۰ متر",
      unit: "دستگاه",
      price: 4850000,
      inStock: true,
      note: "مناسب شب",
    },
    {
      id: "p-bullet-8",
      categoryId: "cat-bullet",
      name: "دوربین بولت ۸ مگاپیکسل",
      spec: "وضوح ۴K، لنز موتوردار، بدنه فلزی",
      unit: "دستگاه",
      price: 8200000,
      inStock: true,
      note: "",
    },
    {
      id: "p-ptz-2",
      categoryId: "cat-ptz",
      name: "دوربین اسپیددام ۲ مگاپیکسل",
      spec: "چرخش ۳۶۰ درجه، زوم اپتیکال ۲۰ برابر",
      unit: "دستگاه",
      price: 18500000,
      inStock: true,
      note: "",
    },
    {
      id: "p-ptz-4",
      categoryId: "cat-ptz",
      name: "دوربین اسپیددام ۴ مگاپیکسل",
      spec: "زوم ۲۵ برابر، دید در شب ۱۰۰ متر",
      unit: "دستگاه",
      price: 26800000,
      inStock: false,
      note: "سفارش ۷ روز کاری",
    },
    {
      id: "p-dvr-4",
      categoryId: "cat-rec",
      name: "دستگاه DVR چهار کانال",
      spec: "پشتیبانی دوربین آنالوگ HD، خروجی HDMI",
      unit: "دستگاه",
      price: 2650000,
      inStock: true,
      note: "",
    },
    {
      id: "p-nvr-8",
      categoryId: "cat-rec",
      name: "دستگاه NVR هشت کانال",
      spec: "هشت درگاه PoE، ضبط تا ۸ مگاپیکسل",
      unit: "دستگاه",
      price: 6400000,
      inStock: true,
      note: "",
    },
    {
      id: "p-nvr-16",
      categoryId: "cat-rec",
      name: "دستگاه NVR شانزده کانال",
      spec: "دو جایگاه هارد، خروجی ۴K",
      unit: "دستگاه",
      price: 9900000,
      inStock: true,
      note: "",
    },
    {
      id: "p-hdd-1",
      categoryId: "cat-hdd",
      name: "هارد نظارتی ۱ ترابایت",
      spec: "وسترن دیجیتال بنفش، مناسب ضبط دائمی",
      unit: "عدد",
      price: 2350000,
      inStock: true,
      note: "",
    },
    {
      id: "p-hdd-2",
      categoryId: "cat-hdd",
      name: "هارد نظارتی ۲ ترابایت",
      spec: "سیگیت اسکای‌هاوک",
      unit: "عدد",
      price: 3650000,
      inStock: true,
      note: "",
    },
    {
      id: "p-hdd-4",
      categoryId: "cat-hdd",
      name: "هارد نظارتی ۴ ترابایت",
      spec: "مناسب ضبط مداوم چند دوربین",
      unit: "عدد",
      price: 5900000,
      inStock: true,
      note: "",
    },
    {
      id: "p-kit-eco",
      categoryId: "cat-kit",
      name: "پکیج اقتصادی ۴ دوربین دام",
      spec: "چهار دام ۲ مگاپیکسل، DVR چهار کانال، هارد ۱ ترابایت، فیش و پایه",
      unit: "پکیج",
      price: 13900000,
      inStock: true,
      note: "پیشنهاد فروشگاه",
    },
    {
      id: "p-kit-night",
      categoryId: "cat-kit",
      name: "پکیج ۴ بولت رنگی شب",
      spec: "چهار بولت ۴ مگاپیکسل، NVR هشت کانال، هارد ۲ ترابایت",
      unit: "پکیج",
      price: 26500000,
      inStock: true,
      note: "",
    },
    {
      id: "p-kit-8",
      categoryId: "cat-kit",
      name: "پکیج ۸ دوربین مختلط",
      spec: "چهار دام و چهار بولت ۲ مگاپیکسل، NVR شانزده کانال، هارد ۴ ترابایت",
      unit: "پکیج",
      price: 31800000,
      inStock: true,
      note: "",
    },
    {
      id: "p-coax",
      categoryId: "cat-cable",
      name: "کابل کواکسیال ترکیبی RG59",
      spec: "تصویر و برق، مناسب دوربین آنالوگ",
      unit: "متر",
      price: 32000,
      inStock: true,
      note: "",
    },
    {
      id: "p-cat6",
      categoryId: "cat-cable",
      name: "کابل شبکه Cat6",
      spec: "مخصوص دوربین تحت شبکه",
      unit: "متر",
      price: 24000,
      inStock: true,
      note: "",
    },
    {
      id: "p-adapter",
      categoryId: "cat-cable",
      name: "آداپتور ۱۲ ولت ۲ آمپر",
      spec: "مخصوص تغذیه دوربین",
      unit: "عدد",
      price: 210000,
      inStock: true,
      note: "",
    },
    {
      id: "p-bnc",
      categoryId: "cat-cable",
      name: "بسته فیش BNC و سوکت تغذیه",
      spec: "ده سری فیش تصویر و تغذیه",
      unit: "بسته",
      price: 180000,
      inStock: true,
      note: "",
    },
    {
      id: "p-bracket",
      categoryId: "cat-cable",
      name: "پایه دیواری فلزی",
      spec: "مناسب دام و بولت",
      unit: "عدد",
      price: 120000,
      inStock: true,
      note: "",
    },
    {
      id: "p-install",
      categoryId: "cat-service",
      name: "اجرت نصب هر دوربین",
      spec: "پایه‌کوبی استاندارد؛ کابل‌کشی مسیر طولانی جداست",
      unit: "خدمت",
      price: 750000,
      inStock: true,
      note: "",
    },
    {
      id: "p-visit",
      categoryId: "cat-service",
      name: "کارشناسی و بازدید محل",
      spec: "بازدید داخل شهر و پیشنهاد چیدمان دوربین",
      unit: "خدمت",
      price: 350000,
      inStock: true,
      note: "رایگان با خرید پکیج",
    },
    {
      id: "p-care",
      categoryId: "cat-service",
      name: "پشتیبانی سالانه",
      spec: "یک بازدید دوره‌ای و بررسی سلامت هارد",
      unit: "سال",
      price: 1900000,
      inStock: true,
      note: "",
    },
  ],
} satisfies Catalog;

export function uid(prefix: string) {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}

export function formatMoney(value: number) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

export function parseAmount(raw: string): number | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const normalized = trimmed
    .replace(/[۰-۹]/g, (digit) => String(faDigits.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) => String(arDigits.indexOf(digit)))
    .replace(/[^\d]/g, "");
  if (!normalized) return null;
  const value = Number(normalized);
  if (!Number.isFinite(value)) return null;
  return value;
}

export function normalizeText(value: string) {
  return value
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/ة/g, "ه")
    .replace(/\u200c/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function loadCatalog(): Catalog {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CATALOG;
    const parsed = catalogSchema.safeParse(JSON.parse(raw));
    if (!parsed.success) return DEFAULT_CATALOG;
    const ids = new Set(parsed.data.categories.map((category) => category.id));
    return {
      ...parsed.data,
      products: parsed.data.products.filter((product) => ids.has(product.categoryId)),
    };
  } catch {
    return DEFAULT_CATALOG;
  }
}

export function saveCatalog(catalog: Catalog) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(catalog));
}
