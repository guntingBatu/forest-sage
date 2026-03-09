import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";
import journal4 from "@/assets/journal-4.jpg";
import journal5 from "@/assets/journal-5.jpg";

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  body: string[];
}

export const articles: Article[] = [
  {
    id: "the-art-of-slow-skincare",
    title: "The Art of Slow Skincare",
    subtitle: "Why less is more when it comes to your daily ritual",
    category: "Ritual",
    date: "Feb 2026",
    readTime: "5 min read",
    image: journal1,
    excerpt:
      "In a world of ten-step routines and overnight miracles, we believe the most transformative skincare is the simplest.",
    body: [
      "There's a quiet revolution happening in bathrooms around the world. People are putting down the serums, the essences, the toners — and picking up a single, beautifully made balm.",
      "At Terra, we've always believed that skincare should be a moment of stillness, not a production line. Our formulas are designed to do more with less: one balm that cleanses, moisturises, and protects. One oil that soothes, restores, and grounds.",
      "The philosophy is simple: when you strip away the noise, you're left with what actually works. Cold-pressed oils that have been used for millennia. Botanical extracts that speak to your skin in a language it already understands.",
      "Slow skincare isn't about doing nothing — it's about being intentional. It's warming a balm between your palms before pressing it into your skin. It's breathing in the scent of cedarwood and knowing exactly where it came from.",
      "This is skincare as meditation. As connection. As a daily reminder that the best things in life are grown, not manufactured.",
    ],
  },
  {
    id: "inside-our-workshop",
    title: "Inside Our Workshop",
    subtitle: "A look behind the scenes at how Terra products come to life",
    category: "Behind the Scenes",
    date: "Jan 2026",
    readTime: "7 min read",
    image: journal2,
    excerpt:
      "From hand-poured balms to cold-pressed soaps, every Terra product begins its life on a worn wooden bench in the South of France.",
    body: [
      "Our workshop sits on the edge of a small village in Provence, surrounded by lavender fields and stone walls that have stood for centuries. It's here, in a converted barn with wide oak doors, that every Terra product is made by hand.",
      "The day begins early. By 6am, the beeswax is melting in copper pots, filling the workshop with a warm honey scent. Our artisans — a small team of five — each have their station, their tools worn smooth from years of use.",
      "The soap is made using a traditional cold-process method. Saponified olive oil is blended with dried herbs from the garden just outside, then hand-cut into bars and left to cure for six weeks on wooden racks.",
      "Our balms are poured in micro-batches of no more than fifty at a time. This isn't efficiency — it's intentional. Small batches mean we can test every single one, ensuring the texture, scent, and potency are exactly right.",
      "There are no conveyor belts here. No automated lines. Just skilled hands, quality ingredients, and the patience to do things properly. It's slower, yes. But we think you can feel the difference.",
    ],
  },
  {
    id: "a-season-in-the-garden",
    title: "A Season in the Garden",
    subtitle: "Following the Mediterranean growing cycle that shapes our ingredients",
    category: "Sourcing",
    date: "Dec 2025",
    readTime: "6 min read",
    image: journal3,
    excerpt:
      "The herbs in your Terra products follow a rhythm that's been unfolding for thousands of years — the Mediterranean growing season.",
    body: [
      "Spring arrives in the Mediterranean with a burst of green so vivid it almost hurts your eyes. The rosemary is the first to flower, sending up delicate purple blooms that the bees can't resist.",
      "By late spring, the chamomile fields are a sea of white. Our partner farms in the Balkans harvest at dawn, when the essential oil content is at its peak. The flowers are laid on cloth sheets and air-dried in the shade — never in direct sun, which would destroy the delicate compounds.",
      "Summer brings the lavender. Hectares of it, stretching across the hillsides of Provence in that iconic purple haze. We harvest ours slightly later than most — waiting for the oils to concentrate gives a richer, more complex scent.",
      "Autumn is for the roots and resins. Vetiver is pulled from the earth, washed, and steam-distilled in small copper stills. Frankincense resin is carefully scored from trees in the Atlas Mountains, then left to harden in the cool mountain air.",
      "Winter is for rest — for the land and for us. It's when we plan the next season, review our formulas, and let the soil regenerate. Because great ingredients start with healthy earth.",
    ],
  },
  {
    id: "the-apothecary-tradition",
    title: "The Apothecary Tradition",
    subtitle: "How ancient herbal wisdom informs modern botanical skincare",
    category: "Heritage",
    date: "Nov 2025",
    readTime: "8 min read",
    image: journal4,
    excerpt:
      "Long before the modern beauty industry existed, apothecaries were blending botanical remedies from the plants around them.",
    body: [
      "Walk into any old pharmacy in Southern Europe and you'll find the same amber bottles, the same dried herb bundles, the same sense of quiet purpose that we try to bring to Terra.",
      "The apothecary tradition stretches back thousands of years — to the herbalists of ancient Greece, the perfumers of medieval Persia, the monks who tended physic gardens in cloistered courtyards.",
      "What these traditions share is a fundamental respect for the plant. Not as a commodity to be processed, but as a living medicine with its own intelligence. Rosemary for circulation. Chamomile for calm. Frankincense for renewal.",
      "At Terra, we study these traditions not as curiosities but as blueprints. Our Amber Balm is based on a formula found in a 17th-century Provençal apothecary ledger. Our Essential Oil blend draws on Moroccan distillation methods that haven't changed in centuries.",
      "We don't claim to have invented anything. We're simply carrying forward a conversation between plants and people that has been ongoing for millennia.",
    ],
  },
  {
    id: "building-a-simple-ritual",
    title: "Building a Simple Ritual",
    subtitle: "A guide to creating your own daily botanical practice",
    category: "Guide",
    date: "Oct 2025",
    readTime: "4 min read",
    image: journal5,
    excerpt:
      "You don't need a dozen products to take care of your skin. Here's how to build a ritual that's as simple as it is effective.",
    body: [
      "The best skincare routine is the one you'll actually do. Not the twelve-step regimen you saw online, but the two or three moments of care that become as natural as breathing.",
      "Morning: Start with water. Splash your face, pat dry, and while your skin is still slightly damp, warm a pea-sized amount of Amber Balm between your fingers. Press it into your skin — don't rub. Let it melt in.",
      "If your skin feels tight during the day, a single drop of our Essential Oil blend on your pulse points will both hydrate and ground you. The cedarwood and frankincense work double duty: soothing the skin while calming the mind.",
      "Evening: Our Herb Soap is all you need. The olive oil base cleanses without stripping, and the dried herbs provide gentle exfoliation. Follow with another layer of balm, slightly more generous than the morning.",
      "That's it. Three products. Two minutes, twice a day. The secret isn't in the number of steps — it's in the quality of the ingredients and the intention you bring to each one.",
    ],
  },
];
