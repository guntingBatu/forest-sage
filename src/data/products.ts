import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  subtitle: string;
  description: string;
  ingredients: string[];
  details: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: "amber-balm",
    name: "Amber Balm",
    price: "$38",
    image: product1,
    subtitle: "Restorative Face Balm",
    description:
      "A deeply nourishing balm crafted from wild-harvested amber resin and cold-pressed jojoba. Melts on contact to deliver intense moisture, leaving skin supple and radiant with a warm, resinous glow.",
    ingredients: [
      "Amber Resin Extract",
      "Cold-Pressed Jojoba Oil",
      "Beeswax",
      "Shea Butter",
      "Vitamin E",
      "Rosemary Leaf Extract",
      "Calendula Officinalis",
    ],
    details: [
      { label: "Volume", value: "50ml" },
      { label: "Skin Type", value: "All skin types" },
      { label: "Origin", value: "Mediterranean" },
    ],
  },
  {
    id: "herb-soap",
    name: "Herb Soap",
    price: "$24",
    image: product2,
    subtitle: "Cold-Process Bar Soap",
    description:
      "Triple-milled with dried herbs and botanical oils. Each bar is hand-cut and cured for six weeks, creating a rich, creamy lather that cleanses without stripping the skin's natural oils.",
    ingredients: [
      "Saponified Olive Oil",
      "Coconut Oil",
      "Dried Rosemary",
      "Lavender Buds",
      "Oat Flour",
      "French Green Clay",
      "Essential Oil Blend",
    ],
    details: [
      { label: "Weight", value: "120g" },
      { label: "Skin Type", value: "Sensitive" },
      { label: "Origin", value: "Provence, France" },
    ],
  },
  {
    id: "essential-oil",
    name: "Essential Oil",
    price: "$42",
    image: product3,
    subtitle: "Botanical Essence Blend",
    description:
      "A complex blend of steam-distilled essential oils sourced from organic farms. Notes of cedarwood, frankincense, and wild bergamot create a grounding, meditative aroma for body and space.",
    ingredients: [
      "Cedarwood Oil",
      "Frankincense Resin Oil",
      "Wild Bergamot",
      "Sweet Orange Peel Oil",
      "Clary Sage",
      "Vetiver Root Oil",
      "Jojoba Carrier Oil",
    ],
    details: [
      { label: "Volume", value: "15ml" },
      { label: "Use", value: "Topical / Diffuser" },
      { label: "Origin", value: "Atlas Mountains" },
    ],
  },
  {
    id: "clay-candle",
    name: "Clay Candle",
    price: "$32",
    image: product4,
    subtitle: "Hand-Poured Beeswax Candle",
    description:
      "Poured into a hand-thrown terracotta vessel, this pure beeswax candle burns clean for up to 40 hours. The warm honey scent is complemented by hints of dried sage and cedar.",
    ingredients: [
      "100% Pure Beeswax",
      "Cotton Wick",
      "Dried Sage Leaves",
      "Cedarwood Shavings",
      "Terracotta Vessel",
    ],
    details: [
      { label: "Burn Time", value: "~40 hours" },
      { label: "Weight", value: "280g" },
      { label: "Origin", value: "Tuscany, Italy" },
    ],
  },
  {
    id: "herbal-tea",
    name: "Herbal Tea",
    price: "$18",
    image: product5,
    subtitle: "Loose Leaf Botanical Blend",
    description:
      "A calming infusion of chamomile, lemon balm, and dried elderflower. Harvested at peak bloom and air-dried to preserve delicate flavour compounds. Best brewed at 90°C for 5 minutes.",
    ingredients: [
      "Chamomile Flowers",
      "Lemon Balm Leaf",
      "Elderflower",
      "Peppermint Leaf",
      "Rose Petals",
      "Linden Blossom",
    ],
    details: [
      { label: "Weight", value: "60g" },
      { label: "Servings", value: "~25 cups" },
      { label: "Origin", value: "Balkans" },
    ],
  },
  {
    id: "body-butter",
    name: "Body Butter",
    price: "$46",
    image: product6,
    subtitle: "Whipped Shea Body Cream",
    description:
      "Luxuriously whipped from raw shea butter and infused with cocoa and mango seed oils. Absorbs quickly, leaving a velvety finish and long-lasting hydration without greasy residue.",
    ingredients: [
      "Raw Shea Butter",
      "Cocoa Butter",
      "Mango Seed Oil",
      "Sweet Almond Oil",
      "Arrowroot Powder",
      "Vanilla Planifolia Extract",
      "Tocopherol (Vitamin E)",
    ],
    details: [
      { label: "Volume", value: "200ml" },
      { label: "Skin Type", value: "Dry / Normal" },
      { label: "Origin", value: "West Africa" },
    ],
  },
];
