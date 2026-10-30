import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as RotateCcw, c as Pencil, d as Download, f as Clock, h as BadgeCheck, i as Search, l as MapPin, m as ChevronDown, o as Printer, p as ChevronUp, r as Share2, s as Phone, t as Upload, u as Eye } from "../_libs/lucide-react.mjs";
import { a as object, i as number, n as boolean, o as string, t as array } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BpZ6HfM7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var faDigits = "۰۱۲۳۴۵۶۷۸۹";
var arDigits = "٠١٢٣٤٥٦٧٨٩";
var shopSchema = object({
	name: string(),
	latin: string(),
	tagline: string(),
	highlights: string(),
	phone: string(),
	mobile: string(),
	social: string(),
	address: string(),
	hours: string(),
	license: string(),
	validUntil: string(),
	currency: string(),
	footer: string(),
	logo: string()
});
var categorySchema = object({
	id: string(),
	name: string()
});
var productSchema = object({
	id: string(),
	categoryId: string(),
	name: string(),
	spec: string(),
	unit: string(),
	price: number().int().nonnegative(),
	inStock: boolean(),
	note: string()
});
var catalogSchema = object({
	shop: shopSchema,
	categories: array(categorySchema),
	products: array(productSchema)
});
var STORAGE_KEY = "bodyguard-pricelist-v2";
var DEFAULT_CATALOG = {
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
		footer: "قیمت‌ها به تومان است و تا تاریخ اعتبار این فهرست، ملاک فروشگاه بادیگارد است. هزینه کابل‌کشی در مسیرهای طولانی جداگانه محاسبه می‌شود. نصب در محل فقط با هماهنگی قبلی انجام می‌گیرد.",
		logo: "/mark.jpg"
	},
	categories: [
		{
			id: "cat-dome",
			name: "دوربین دام"
		},
		{
			id: "cat-bullet",
			name: "دوربین بولت"
		},
		{
			id: "cat-ptz",
			name: "دوربین چرخشی"
		},
		{
			id: "cat-rec",
			name: "دستگاه ضبط"
		},
		{
			id: "cat-hdd",
			name: "هارد و ذخیره‌سازی"
		},
		{
			id: "cat-kit",
			name: "پکیج آماده"
		},
		{
			id: "cat-cable",
			name: "کابل و لوازم"
		},
		{
			id: "cat-service",
			name: "اجرت و خدمات"
		}
	],
	products: [
		{
			id: "p-dome-2",
			categoryId: "cat-dome",
			name: "دوربین دام ۲ مگاپیکسل هایک‌ویژن",
			spec: "دید در شب ۲۰ متر، لنز ۲.۸ میلی‌متر",
			unit: "دستگاه",
			price: 215e4,
			inStock: true,
			note: "پرفروش"
		},
		{
			id: "p-dome-4",
			categoryId: "cat-dome",
			name: "دوربین دام ۴ مگاپیکسل داهوا",
			spec: "میکروفن داخلی، تصویر رنگی، مناسب فضای بسته",
			unit: "دستگاه",
			price: 345e4,
			inStock: true,
			note: ""
		},
		{
			id: "p-dome-5",
			categoryId: "cat-dome",
			name: "دوربین دام ۵ مگاپیکسل تحت شبکه",
			spec: "تغذیه PoE، بدنه فلزی، لنز ۲.۸",
			unit: "دستگاه",
			price: 46e5,
			inStock: true,
			note: ""
		},
		{
			id: "p-bullet-2",
			categoryId: "cat-bullet",
			name: "دوربین بولت ۲ مگاپیکسل هایک‌ویژن",
			spec: "ضدآب IP67، دید در شب ۳۰ متر",
			unit: "دستگاه",
			price: 198e4,
			inStock: true,
			note: ""
		},
		{
			id: "p-bullet-4",
			categoryId: "cat-bullet",
			name: "دوربین بولت ۴ مگاپیکسل استارلایت",
			spec: "تصویر رنگی در شب، دید تا ۴۰ متر",
			unit: "دستگاه",
			price: 485e4,
			inStock: true,
			note: "مناسب شب"
		},
		{
			id: "p-bullet-8",
			categoryId: "cat-bullet",
			name: "دوربین بولت ۸ مگاپیکسل",
			spec: "وضوح ۴K، لنز موتوردار، بدنه فلزی",
			unit: "دستگاه",
			price: 82e5,
			inStock: true,
			note: ""
		},
		{
			id: "p-ptz-2",
			categoryId: "cat-ptz",
			name: "دوربین اسپیددام ۲ مگاپیکسل",
			spec: "چرخش ۳۶۰ درجه، زوم اپتیکال ۲۰ برابر",
			unit: "دستگاه",
			price: 185e5,
			inStock: true,
			note: ""
		},
		{
			id: "p-ptz-4",
			categoryId: "cat-ptz",
			name: "دوربین اسپیددام ۴ مگاپیکسل",
			spec: "زوم ۲۵ برابر، دید در شب ۱۰۰ متر",
			unit: "دستگاه",
			price: 268e5,
			inStock: false,
			note: "سفارش ۷ روز کاری"
		},
		{
			id: "p-dvr-4",
			categoryId: "cat-rec",
			name: "دستگاه DVR چهار کانال",
			spec: "پشتیبانی دوربین آنالوگ HD، خروجی HDMI",
			unit: "دستگاه",
			price: 265e4,
			inStock: true,
			note: ""
		},
		{
			id: "p-nvr-8",
			categoryId: "cat-rec",
			name: "دستگاه NVR هشت کانال",
			spec: "هشت درگاه PoE، ضبط تا ۸ مگاپیکسل",
			unit: "دستگاه",
			price: 64e5,
			inStock: true,
			note: ""
		},
		{
			id: "p-nvr-16",
			categoryId: "cat-rec",
			name: "دستگاه NVR شانزده کانال",
			spec: "دو جایگاه هارد، خروجی ۴K",
			unit: "دستگاه",
			price: 99e5,
			inStock: true,
			note: ""
		},
		{
			id: "p-hdd-1",
			categoryId: "cat-hdd",
			name: "هارد نظارتی ۱ ترابایت",
			spec: "وسترن دیجیتال بنفش، مناسب ضبط دائمی",
			unit: "عدد",
			price: 235e4,
			inStock: true,
			note: ""
		},
		{
			id: "p-hdd-2",
			categoryId: "cat-hdd",
			name: "هارد نظارتی ۲ ترابایت",
			spec: "سیگیت اسکای‌هاوک",
			unit: "عدد",
			price: 365e4,
			inStock: true,
			note: ""
		},
		{
			id: "p-hdd-4",
			categoryId: "cat-hdd",
			name: "هارد نظارتی ۴ ترابایت",
			spec: "مناسب ضبط مداوم چند دوربین",
			unit: "عدد",
			price: 59e5,
			inStock: true,
			note: ""
		},
		{
			id: "p-kit-eco",
			categoryId: "cat-kit",
			name: "پکیج اقتصادی ۴ دوربین دام",
			spec: "چهار دام ۲ مگاپیکسل، DVR چهار کانال، هارد ۱ ترابایت، فیش و پایه",
			unit: "پکیج",
			price: 139e5,
			inStock: true,
			note: "پیشنهاد فروشگاه"
		},
		{
			id: "p-kit-night",
			categoryId: "cat-kit",
			name: "پکیج ۴ بولت رنگی شب",
			spec: "چهار بولت ۴ مگاپیکسل، NVR هشت کانال، هارد ۲ ترابایت",
			unit: "پکیج",
			price: 265e5,
			inStock: true,
			note: ""
		},
		{
			id: "p-kit-8",
			categoryId: "cat-kit",
			name: "پکیج ۸ دوربین مختلط",
			spec: "چهار دام و چهار بولت ۲ مگاپیکسل، NVR شانزده کانال، هارد ۴ ترابایت",
			unit: "پکیج",
			price: 318e5,
			inStock: true,
			note: ""
		},
		{
			id: "p-coax",
			categoryId: "cat-cable",
			name: "کابل کواکسیال ترکیبی RG59",
			spec: "تصویر و برق، مناسب دوربین آنالوگ",
			unit: "متر",
			price: 32e3,
			inStock: true,
			note: ""
		},
		{
			id: "p-cat6",
			categoryId: "cat-cable",
			name: "کابل شبکه Cat6",
			spec: "مخصوص دوربین تحت شبکه",
			unit: "متر",
			price: 24e3,
			inStock: true,
			note: ""
		},
		{
			id: "p-adapter",
			categoryId: "cat-cable",
			name: "آداپتور ۱۲ ولت ۲ آمپر",
			spec: "مخصوص تغذیه دوربین",
			unit: "عدد",
			price: 21e4,
			inStock: true,
			note: ""
		},
		{
			id: "p-bnc",
			categoryId: "cat-cable",
			name: "بسته فیش BNC و سوکت تغذیه",
			spec: "ده سری فیش تصویر و تغذیه",
			unit: "بسته",
			price: 18e4,
			inStock: true,
			note: ""
		},
		{
			id: "p-bracket",
			categoryId: "cat-cable",
			name: "پایه دیواری فلزی",
			spec: "مناسب دام و بولت",
			unit: "عدد",
			price: 12e4,
			inStock: true,
			note: ""
		},
		{
			id: "p-install",
			categoryId: "cat-service",
			name: "اجرت نصب هر دوربین",
			spec: "پایه‌کوبی استاندارد؛ کابل‌کشی مسیر طولانی جداست",
			unit: "خدمت",
			price: 75e4,
			inStock: true,
			note: ""
		},
		{
			id: "p-visit",
			categoryId: "cat-service",
			name: "کارشناسی و بازدید محل",
			spec: "بازدید داخل شهر و پیشنهاد چیدمان دوربین",
			unit: "خدمت",
			price: 35e4,
			inStock: true,
			note: "رایگان با خرید پکیج"
		},
		{
			id: "p-care",
			categoryId: "cat-service",
			name: "پشتیبانی سالانه",
			spec: "یک بازدید دوره‌ای و بررسی سلامت هارد",
			unit: "سال",
			price: 19e5,
			inStock: true,
			note: ""
		}
	]
};
function uid(prefix) {
	return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
function formatMoney(value) {
	return new Intl.NumberFormat("fa-IR").format(value);
}
function parseAmount(raw) {
	const trimmed = raw.trim();
	if (!trimmed) return null;
	const normalized = trimmed.replace(/[۰-۹]/g, (digit) => String(faDigits.indexOf(digit))).replace(/[٠-٩]/g, (digit) => String(arDigits.indexOf(digit))).replace(/[^\d]/g, "");
	if (!normalized) return null;
	const value = Number(normalized);
	if (!Number.isFinite(value)) return null;
	return value;
}
function normalizeText(value) {
	return value.replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/ة/g, "ه").replace(/\u200c/g, " ").replace(/\s+/g, " ").trim();
}
function loadCatalog() {
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return DEFAULT_CATALOG;
		const parsed = catalogSchema.safeParse(JSON.parse(raw));
		if (!parsed.success) return DEFAULT_CATALOG;
		const ids = new Set(parsed.data.categories.map((category) => category.id));
		return {
			...parsed.data,
			products: parsed.data.products.filter((product) => ids.has(product.categoryId))
		};
	} catch {
		return DEFAULT_CATALOG;
	}
}
function saveCatalog(catalog) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(catalog));
}
var fieldClass = "h-11 w-full rounded-lg border border-line bg-sheet px-3 text-ink outline-none transition-colors duration-200 focus-visible:border-gold";
var ghostBtn = "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-sheet px-4 text-sm font-medium text-ink transition-colors duration-200 hover:border-gold";
var goldBtn = "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-gold bg-gold px-4 text-sm font-medium text-on-gold transition-colors duration-200 hover:border-navy hover:bg-navy hover:text-on-navy";
var navyBtn = "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-navy bg-navy px-4 text-sm font-medium text-on-navy transition-colors duration-200";
function IconButton({ label, disabled, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		disabled,
		onClick,
		className: "inline-flex size-11 items-center justify-center rounded-lg border border-line bg-sheet text-ink transition-colors duration-200 hover:border-gold disabled:opacity-40",
		children
	});
}
function productMatches(product, categoryName, query) {
	if (!query) return true;
	return normalizeText(`${categoryName} ${product.name} ${product.spec} ${product.note} ${product.unit} ${product.price}`).includes(normalizeText(query));
}
function PriceListApp() {
	const [catalog, setCatalog] = (0, import_react.useState)(DEFAULT_CATALOG);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [activeCat, setActiveCat] = (0, import_react.useState)("all");
	const [banner, setBanner] = (0, import_react.useState)(null);
	const [pending, setPending] = (0, import_react.useState)(null);
	const [draft, setDraft] = (0, import_react.useState)({
		categoryId: DEFAULT_CATALOG.categories[0]?.id ?? "",
		name: "",
		spec: "",
		unit: "دستگاه",
		price: "",
		note: "",
		inStock: true
	});
	const [newCatName, setNewCatName] = (0, import_react.useState)("");
	const importRef = (0, import_react.useRef)(null);
	const logoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const loaded = loadCatalog();
		setCatalog(loaded);
		setDraft((current) => ({
			...current,
			categoryId: loaded.categories.some((category) => category.id === current.categoryId) ? current.categoryId : loaded.categories[0]?.id ?? ""
		}));
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		try {
			saveCatalog(catalog);
		} catch {
			setBanner("فضای ذخیره این مرورگر پر است. یک نسخه پشتیبان بگیرید.");
		}
	}, [catalog, ready]);
	(0, import_react.useEffect)(() => {
		document.title = `${catalog.shop.name} | لیست قیمت دوربین مداربسته`;
	}, [catalog.shop.name]);
	const shop = catalog.shop;
	const q = query.trim();
	function patchShop(patch) {
		setCatalog((current) => ({
			...current,
			shop: {
				...current.shop,
				...patch
			}
		}));
	}
	function patchProduct(id, patch) {
		setCatalog((current) => ({
			...current,
			products: current.products.map((product) => product.id === id ? {
				...product,
				...patch
			} : product)
		}));
	}
	function countFor(categoryId, categoryName) {
		return catalog.products.filter((product) => product.categoryId === categoryId && productMatches(product, categoryName, q)).length;
	}
	const sections = catalog.categories.filter((category) => activeCat === "all" || category.id === activeCat).map((category) => ({
		category,
		items: catalog.products.filter((product) => product.categoryId === category.id && productMatches(product, category.name, q))
	})).filter((section) => editing && !q || section.items.length > 0);
	const visibleCount = sections.reduce((sum, section) => sum + section.items.length, 0);
	const highlights = shop.highlights.split("·").map((item) => item.trim()).filter(Boolean);
	function moveCategory(id, dir) {
		setCatalog((current) => {
			const categories = [...current.categories];
			const index = categories.findIndex((category) => category.id === id);
			const next = index + dir;
			if (index < 0 || next < 0 || next >= categories.length) return current;
			const swapped = [...categories];
			const item = swapped[index];
			swapped[index] = swapped[next];
			swapped[next] = item;
			return {
				...current,
				categories: swapped
			};
		});
	}
	function moveProduct(id, dir) {
		setCatalog((current) => {
			const products = [...current.products];
			const index = products.findIndex((product) => product.id === id);
			if (index < 0) return current;
			const categoryId = products[index].categoryId;
			let next = index + dir;
			while (next >= 0 && next < products.length && products[next].categoryId !== categoryId) next += dir;
			if (next < 0 || next >= products.length) return current;
			const swapped = [...products];
			const item = swapped[index];
			swapped[index] = swapped[next];
			swapped[next] = item;
			return {
				...current,
				products: swapped
			};
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
			categories: [...current.categories, {
				id,
				name
			}]
		}));
		setDraft((current) => ({
			...current,
			categoryId: id
		}));
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
		const product = {
			id: uid("p"),
			categoryId: draft.categoryId,
			name,
			spec: draft.spec.trim(),
			unit: draft.unit.trim() || "عدد",
			price,
			inStock: draft.inStock,
			note: draft.note.trim()
		};
		setCatalog((current) => ({
			...current,
			products: [...current.products, product]
		}));
		setDraft((current) => ({
			...current,
			name: "",
			spec: "",
			price: "",
			note: ""
		}));
		setBanner("کالا به فهرست اضافه شد.");
	}
	function removeProduct(id) {
		setCatalog((current) => ({
			...current,
			products: current.products.filter((product) => product.id !== id)
		}));
		setPending(null);
	}
	function removeCategory(id) {
		setCatalog((current) => ({
			...current,
			categories: current.categories.filter((category) => category.id !== id),
			products: current.products.filter((product) => product.categoryId !== id)
		}));
		if (activeCat === id) setActiveCat("all");
		setDraft((current) => current.categoryId === id ? {
			...current,
			categoryId: ""
		} : current);
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
	function onImport(file) {
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
					products: parsed.data.products.filter((product) => ids.has(product.categoryId))
				});
				setBanner("فهرست بازیابی شد.");
			} catch {
				setBanner("خواندن فایل ممکن نشد.");
			}
		};
		reader.readAsText(file);
	}
	function onLogo(file) {
		if (!file.type.startsWith("image/")) {
			setBanner("برای نشان فقط تصویر انتخاب کنید.");
			return;
		}
		if (file.size > 9e5) {
			setBanner("حجم نشان را کمتر از ۹۰۰ کیلوبایت انتخاب کنید.");
			return;
		}
		const reader = new FileReader();
		reader.onload = () => patchShop({ logo: String(reader.result || "") });
		reader.readAsDataURL(file);
	}
	let running = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 bg-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "masthead bg-navy text-on-navy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:px-6 md:py-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-fit rounded-lg border border-gold bg-navy p-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: shop.logo || "/mark.jpg",
									alt: `نشان تجاری ${shop.name}`,
									width: 256,
									height: 256,
									className: "size-28 rounded-lg object-cover md:size-32"
								})
							}), editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "no-print mt-3 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: goldBtn,
										onClick: () => logoRef.current?.click(),
										children: "تعویض نشان"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "inline-flex h-11 items-center rounded-lg border border-gold px-4 text-sm text-on-navy",
										onClick: () => patchShop({ logo: DEFAULT_CATALOG.shop.logo }),
										children: "نشان اصلی"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: logoRef,
										type: "file",
										accept: "image/*",
										className: "sr-only",
										onChange: (event) => {
											const file = event.target.files?.[0];
											if (file) onLogo(file);
											event.target.value = "";
										}
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-gold-soft",
									children: "لیست قیمت رسمی"
								}),
								editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "نام فروشگاه",
									value: shop.name,
									onChange: (event) => patchShop({ name: event.target.value }),
									className: "mt-1 w-full border-b border-gold bg-transparent text-4xl font-extrabold leading-snug text-on-navy outline-none md:text-5xl"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-1 text-4xl font-extrabold leading-snug md:text-5xl",
									children: shop.name
								}),
								editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "نام لاتین",
									dir: "ltr",
									value: shop.latin,
									onChange: (event) => patchShop({ latin: event.target.value }),
									className: "mt-2 w-full border-b border-gold bg-transparent text-end text-sm font-bold tracking-widest text-gold outline-none"
								}) : shop.latin.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									dir: "ltr",
									className: "mt-2 text-end text-sm font-bold tracking-widest text-gold",
									children: shop.latin
								}),
								editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "شعار",
									value: shop.tagline,
									onChange: (event) => patchShop({ tagline: event.target.value }),
									className: "mt-3 w-full border-b border-gold bg-transparent text-base text-on-navy outline-none"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-base text-on-navy",
									children: shop.tagline
								}),
								editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "نوار اعتماد",
									value: shop.highlights,
									onChange: (event) => patchShop({ highlights: event.target.value }),
									className: "mt-4 w-full border-b border-gold bg-transparent text-sm text-gold-soft outline-none"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gold-soft",
									children: highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "inline-flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
											className: "size-4 text-gold",
											"aria-hidden": true
										}), item]
									}, item))
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-5xl gap-4 px-4 py-5 sm:grid-cols-2 md:grid-cols-3 md:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
								label: "تلفن فروشگاه",
								value: shop.phone,
								editing,
								onChange: (phone) => patchShop({ phone })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
								label: "همراه",
								value: shop.mobile,
								editing,
								onChange: (mobile) => patchShop({ mobile })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-4" }),
								label: "اینستاگرام",
								value: shop.social,
								editing,
								onChange: (social) => patchShop({ social })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }),
								label: "ساعت کاری",
								value: shop.hours,
								editing,
								onChange: (hours) => patchShop({ hours })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "size-4" }),
								label: "پروانه کسب",
								value: shop.license,
								editing,
								onChange: (license) => patchShop({ license })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }),
								label: "اعتبار فهرست",
								value: shop.validUntil,
								editing,
								onChange: (validUntil) => patchShop({ validUntil })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "sm:col-span-2 md:col-span-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }),
									label: "نشانی",
									value: shop.address,
									editing,
									onChange: (address) => patchShop({ address })
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-5xl flex-col gap-4 px-4 py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "no-print flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative w-full md:w-auto md:flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									className: "pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "catalog-search",
									type: "search",
									value: query,
									onChange: (event) => setQuery(event.target.value),
									placeholder: "جستجوی کالا، برند یا مشخصات",
									"aria-label": "جستجو در فهرست",
									className: `${fieldClass} bg-sheet ps-10`
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: editing ? navyBtn : goldBtn,
								onClick: () => setEditing((value) => !value),
								children: [editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, {
									className: "size-4",
									"aria-hidden": true
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, {
									className: "size-4",
									"aria-hidden": true
								}), editing ? "پایان ویرایش" : "ویرایش"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: ghostBtn,
								onClick: () => window.print(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {
									className: "size-4",
									"aria-hidden": true
								}), "چاپ"]
							}),
							editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: ghostBtn,
									onClick: downloadBackup,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
										className: "size-4",
										"aria-hidden": true
									}), "پشتیبان"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: ghostBtn,
									onClick: () => importRef.current?.click(),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, {
										className: "size-4",
										"aria-hidden": true
									}), "بازیابی"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: ghostBtn,
									onClick: () => setPending({ kind: "reset" }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
										className: "size-4",
										"aria-hidden": true
									}), "نمونه اولیه"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: importRef,
									type: "file",
									accept: "application/json",
									className: "sr-only",
									onChange: (event) => {
										const file = event.target.files?.[0];
										if (file) onImport(file);
										event.target.value = "";
									}
								})
							] })
						]
					}),
					banner && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "no-print flex items-center justify-between gap-3 rounded-lg border border-line bg-gold-soft px-4 py-3 text-sm text-on-gold",
						role: "status",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: banner }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "h-11 shrink-0 px-2 font-medium",
							onClick: () => setBanner(null),
							children: "بستن"
						})]
					}),
					pending?.kind === "reset" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "no-print flex flex-wrap items-center gap-2 rounded-lg border border-line bg-sheet px-4 py-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "فهرست به نمونه اولیه برگردد؟ تغییرهای شما پاک می‌شود."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: navyBtn,
								onClick: () => {
									setCatalog(DEFAULT_CATALOG);
									setPending(null);
									setBanner("نمونه اولیه بازگشت.");
								},
								children: "بله، بازنشانی شود"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: ghostBtn,
								onClick: () => setPending(null),
								children: "انصراف"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "catalog overflow-hidden rounded-lg border border-line bg-sheet",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline justify-between gap-3 border-b border-line px-4 py-4 md:px-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg font-bold",
									children: "فهرست قیمت کالا و خدمات"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [formatMoney(visibleCount), " قلم"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "no-print border-b border-line px-4 py-3 md:px-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2 overflow-x-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										active: activeCat === "all",
										count: catalog.categories.reduce((sum, category) => sum + countFor(category.id, category.name), 0),
										onClick: () => setActiveCat("all"),
										children: "همه"
									}), catalog.categories.filter((category) => {
										const count = countFor(category.id, category.name);
										if (q) return count > 0;
										if (!editing && count === 0) return false;
										return true;
									}).map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
										active: activeCat === category.id,
										count: countFor(category.id, category.name),
										onClick: () => setActiveCat(category.id),
										children: category.name
									}, category.id))]
								})
							}),
							editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "no-print grid gap-3 border-b border-line bg-paper px-4 py-4 md:px-6",
								onSubmit: (event) => {
									event.preventDefault();
									addProduct();
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold",
										children: "کالای تازه"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-3 md:grid-cols-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "grid gap-1 text-sm",
												children: ["دسته", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													className: fieldClass,
													value: draft.categoryId,
													onChange: (event) => setDraft((current) => ({
														...current,
														categoryId: event.target.value
													})),
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "",
														children: "انتخاب دسته"
													}), catalog.categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: category.id,
														children: category.name
													}, category.id))]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "grid gap-1 text-sm",
												children: ["نام کالا", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: fieldClass,
													value: draft.name,
													onChange: (event) => setDraft((current) => ({
														...current,
														name: event.target.value
													}))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "grid gap-1 text-sm md:col-span-2",
												children: ["مشخصات", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: fieldClass,
													value: draft.spec,
													onChange: (event) => setDraft((current) => ({
														...current,
														spec: event.target.value
													}))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "grid gap-1 text-sm",
												children: ["واحد", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: fieldClass,
													list: "units",
													value: draft.unit,
													onChange: (event) => setDraft((current) => ({
														...current,
														unit: event.target.value
													}))
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "grid gap-1 text-sm",
												children: [
													"قیمت (",
													shop.currency || "تومان",
													")",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														className: fieldClass,
														inputMode: "numeric",
														value: draft.price,
														onChange: (event) => setDraft((current) => ({
															...current,
															price: event.target.value
														})),
														placeholder: "۰ برای رایگان"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "grid gap-1 text-sm",
												children: ["یادداشت کوتاه", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													className: fieldClass,
													value: draft.note,
													onChange: (event) => setDraft((current) => ({
														...current,
														note: event.target.value
													})),
													placeholder: "پرفروش، پیشنهاد فروشگاه"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "flex h-11 items-center gap-2 self-end text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: draft.inStock,
													onChange: (event) => setDraft((current) => ({
														...current,
														inStock: event.target.checked
													}))
												}), "موجود است"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("datalist", {
										id: "units",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "دستگاه" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "عدد" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "متر" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "بسته" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "پکیج" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "خدمت" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "سال" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "submit",
											className: goldBtn,
											children: "افزودن کالا"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex flex-wrap items-end gap-2 border-t border-line pt-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "grid min-w-48 flex-1 gap-1 text-sm",
											children: ["دسته تازه", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												className: fieldClass,
												value: newCatName,
												onChange: (event) => setNewCatName(event.target.value),
												placeholder: "مثلاً دوربین بی‌سیم"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: ghostBtn,
											onClick: addCategory,
											children: "ساخت دسته"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: "هر تغییر همین‌جا در این دستگاه ذخیره می‌شود. پیش از نشان دادن به مشتری، ویرایش را ببندید."
									})
								]
							}),
							sections.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-4 py-12 text-center text-muted",
								children: q ? "کالایی با این عبارت پیدا نشد." : "هنوز کالایی در فهرست نیست."
							}) : sections.map(({ category, items }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "border-b border-line last:border-b-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
									className: "flex flex-wrap items-center gap-2 bg-navy px-4 py-3 text-on-navy md:px-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "size-2 shrink-0 rounded-full bg-gold",
											"aria-hidden": true
										}),
										editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											"aria-label": "نام دسته",
											value: category.name,
											onChange: (event) => setCatalog((current) => ({
												...current,
												categories: current.categories.map((item) => item.id === category.id ? {
													...item,
													name: event.target.value
												} : item)
											})),
											className: "h-11 min-w-40 flex-1 border-b border-gold bg-transparent font-bold text-on-navy outline-none"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "min-w-0 flex-1 text-base font-bold",
											children: category.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm text-gold-soft",
											children: [formatMoney(items.length), " قلم"]
										}),
										editing && !q && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
												label: "دسته بالاتر",
												disabled: catalog.categories[0]?.id === category.id,
												onClick: () => moveCategory(category.id, -1),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
												label: "دسته پایین‌تر",
												disabled: catalog.categories[catalog.categories.length - 1]?.id === category.id,
												onClick: () => moveCategory(category.id, 1),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
											}),
											pending?.kind === "category" && pending.id === category.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: goldBtn,
												onClick: () => removeCategory(category.id),
												children: "حذف دسته"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: ghostBtn,
												onClick: () => setPending(null),
												children: "انصراف"
											})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: ghostBtn,
												onClick: () => setPending({
													kind: "category",
													id: category.id
												}),
												children: "حذف دسته"
											})
										] })
									]
								}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "px-4 py-6 text-sm text-muted md:px-6",
									children: "در این دسته هنوز کالایی نیست."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: items.map((product, index) => {
									running += 1;
									const indexLabel = formatMoney(running);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "break-inside-avoid border-b border-line px-4 py-4 last:border-b-0 md:px-6 odd:bg-paper",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex min-w-0 flex-1 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-1 w-8 shrink-0 text-sm font-medium tabular-nums text-navy",
													children: indexLabel
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "min-w-0 flex-1",
													children: editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid gap-2",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																"aria-label": "نام کالا",
																value: product.name,
																onChange: (event) => patchProduct(product.id, { name: event.target.value }),
																className: fieldClass
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																"aria-label": "مشخصات",
																value: product.spec,
																onChange: (event) => patchProduct(product.id, { spec: event.target.value }),
																className: fieldClass
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "grid gap-2 sm:grid-cols-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
																	"aria-label": "دسته کالا",
																	className: fieldClass,
																	value: product.categoryId,
																	onChange: (event) => patchProduct(product.id, { categoryId: event.target.value }),
																	children: catalog.categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																		value: item.id,
																		children: item.name
																	}, item.id))
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	"aria-label": "واحد",
																	value: product.unit,
																	onChange: (event) => patchProduct(product.id, { unit: event.target.value }),
																	className: fieldClass
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																"aria-label": "یادداشت",
																value: product.note,
																onChange: (event) => patchProduct(product.id, { note: event.target.value }),
																placeholder: "یادداشت",
																className: fieldClass
															})
														]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "font-bold leading-snug",
															children: product.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "mt-1 text-sm leading-relaxed text-muted",
															children: [
																product.spec,
																product.spec && product.unit ? " · " : "",
																product.unit ? `واحد: ${product.unit}` : ""
															]
														}),
														product.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "mt-2 inline-flex h-7 items-center rounded-full border border-gold px-2 text-xs font-medium",
															children: product.note
														})
													] })
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex w-36 shrink-0 flex-col items-end gap-2 md:w-44",
												children: [
													editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														"aria-label": "قیمت",
														inputMode: "numeric",
														value: String(product.price),
														onFocus: (event) => event.target.select(),
														onChange: (event) => {
															const amount = parseAmount(event.target.value);
															patchProduct(product.id, { price: amount ?? 0 });
														},
														className: `${fieldClass} text-end tabular-nums`
													}) : product.price === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-base font-bold text-navy md:text-lg",
														children: "رایگان"
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: `text-end text-base font-bold tabular-nums md:text-lg ${product.inStock ? "text-navy" : "text-muted line-through"}`,
														children: formatMoney(product.price)
													}),
													!editing && product.price !== 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted",
														children: shop.currency
													}),
													editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														className: `${product.inStock ? goldBtn : ghostBtn} w-full px-2`,
														onClick: () => patchProduct(product.id, { inStock: !product.inStock }),
														children: product.inStock ? "موجود" : "ناموجود"
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: `inline-flex h-7 items-center rounded-full px-2 text-xs font-medium ${product.inStock ? "bg-gold-soft text-on-gold" : "border border-line text-muted"}`,
														children: product.inStock ? "موجود" : "ناموجود"
													})
												]
											})]
										}), editing && !q && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "no-print mt-3 flex flex-wrap gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
													label: "بالاتر",
													disabled: index === 0,
													onClick: () => moveProduct(product.id, -1),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
													label: "پایین‌تر",
													disabled: index === items.length - 1,
													onClick: () => moveProduct(product.id, 1),
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" })
												}),
												pending?.kind === "product" && pending.id === product.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: navyBtn,
													onClick: () => removeProduct(product.id),
													children: "حذف شود"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: ghostBtn,
													onClick: () => setPending(null),
													children: "انصراف"
												})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													className: ghostBtn,
													onClick: () => setPending({
														kind: "product",
														id: product.id
													}),
													children: "حذف کالا"
												})
											]
										})]
									}, product.id);
								}) })]
							}, category.id)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "border-t border-line px-4 py-5 md:px-6",
								children: [
									editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										"aria-label": "یادداشت پایین فهرست",
										value: shop.footer,
										onChange: (event) => patchShop({ footer: event.target.value }),
										className: "min-h-24 w-full rounded-lg border border-line bg-sheet px-3 py-2 text-sm leading-relaxed outline-none focus-visible:border-gold"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-muted",
										children: shop.footer
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap items-baseline justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-bold",
											children: shop.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted",
											children: [
												shop.phone,
												shop.mobile,
												shop.validUntil
											].filter((item) => item.trim()).join(" · ")
										})]
									}),
									editing && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mt-3 grid gap-1 text-sm",
										children: ["واحد پول", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											"aria-label": "واحد پول",
											value: shop.currency,
											onChange: (event) => patchShop({ currency: event.target.value }),
											className: fieldClass
										})]
									})
								]
							})
						]
					})
				]
			})
		]
	});
}
function Contact({ icon, label, value, editing, onChange }) {
	if (!editing && !value.trim()) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 text-gold",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0 flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-gold-soft",
				children: label
			}), editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				"aria-label": label,
				value,
				onChange: (event) => onChange(event.target.value),
				className: "mt-1 h-11 w-full border-b border-gold bg-transparent text-sm text-on-navy outline-none"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed",
				children: value
			})]
		})]
	});
}
function Chip({ active, count, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors duration-200 ${active ? "border-navy bg-navy text-on-navy" : "border-line bg-sheet text-ink"}`,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: active ? "text-gold-soft" : "text-muted",
			children: formatMoney(count)
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceListApp, {});
}
//#endregion
export { Home as component };
