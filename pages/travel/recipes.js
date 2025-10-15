import Link from "next/link";

export default function RecipesPage() {
  const recipes = [
    {
      title: "Tasty White Pasta with Prawns (PDF)",
      href: "/travel/gotorecipes/Tasty_White_Pasta_with_Prawns_Travel_Recipe_Edition.pdf",
    },
    {
      title: "Balinese Satay with Coconut Peanut Sauce — Coming Soon",
      href: "#",
    },
    {
      title: "Thai Green Curry (Travel Edition) — Coming Soon",
      href: "#",
    },
    {
      title: "Vietnamese Lemongrass Chicken — Coming Soon",
      href: "#",
    },
    {
      title: "Simple Street-Style Pad Thai — Coming Soon",
      href: "#",
    },
  ];

  return (
    <div className="hero-spiral min-h-screen w-full flex flex-col items-center justify-start text-center px-6 py-12 relative">
      {/* Back arrow to Adventures */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/adventures">
          <button
            className="px-5 py-2 rounded-full bg-white/30 text-white text-2xl drop-shadow-lg hover:bg-white/50 transition"
            aria-label="Return to Adventures"
          >
            ←
          </button>
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-light tracking-wide text-white drop-shadow-2xl mb-12 bg-black/10 px-4 py-2 rounded-lg">
        Recipe Collection
      </h1>

      {/* Recipe buttons */}
      <div className="flex flex-col gap-6 max-w-2xl w-full">
        {recipes.map((r, i) => (
          <a
            key={i}
            href={r.href}
            target={r.href === "#" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`w-full py-8 px-6 rounded-lg shadow-md text-center text-xl md:text-2xl transition ${
              r.href === "#"
                ? "bg-white/10 text-gray-400 cursor-not-allowed"
                : "bg-white/20 text-black hover:bg-white/30"
            }`}
          >
            {r.title}
          </a>
        ))}
      </div>
    </div>
  );
}
