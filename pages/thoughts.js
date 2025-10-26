import Link from "next/link";

export default function ThoughtsPage() {
  const articles = [
    {
      title: "Universal Basic Income and the Paradox of Personal Debt",
      href: "/thoughts/ubi/Universal_Basic_Income_and_the_Paradox_of_Personal_Debt_Clean.pdf",
    },
    {
      title: "The Dopamine Economy",
      href: "/thoughts/dopamine/The_Dopamine_Economy_Web_Optimised.pdf",
    },
        {
      title: "The Death of The Priest",
      href: "/thoughts/the_death_of_the_priest/the-death-of-the-priest-v3.html",
    },
    
    // Add more later as needed
  ];

  return (
    <div className="hero-spiral min-h-screen w-full flex flex-col items-center justify-start text-center px-6 py-12 relative">
      {/* Home arrow (top-left) */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/">
          <button
            className="px-5 py-2 rounded-full bg-white/30 text-white text-2xl drop-shadow-lg hover:bg-white/50 transition"
            aria-label="Return to Home"
          >
            ←
          </button>
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-light tracking-wide text-white drop-shadow-2xl mb-12 bg-black/10 px-4 py-2 rounded-lg">
        Thoughts & Concepts
      </h1>

      {/* Article buttons */}
      <div className="flex flex-col gap-6 max-w-2xl w-full">
        {articles.map((a, i) => (
          <a
            key={i}
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white/20 text-black py-8 px-6 rounded-lg shadow-md hover:bg-white/30 transition text-center text-xl md:text-2xl"
          >
            {a.title}
          </a>
        ))}
      </div>
    </div>
  );
}
