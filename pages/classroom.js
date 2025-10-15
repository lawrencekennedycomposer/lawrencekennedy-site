import Link from "next/link";

export default function ClassroomPage() {
  const articles = [

    {
      title: "Why Incentives Work for Adults and Teens Alike",
      href: "/articles/why-incentives/why_incentives_work.html",
    },
    {
      title: "Why Effort-Based Rewards Build Real Confidence",
      href: "/articles/effort-confidence/effort_confidence.html",
    },
    {
      title: "Status, Peers, and the Hidden Currency of the Classroom",
      href: "/articles/status-peers/status_peers.html",
    },
     {
      title: "Kick Start any class in 90 seconds – Coin Flip Knockout!",
      href: "/articles/kick_start_any_class_90s_article_with_game.html",
    },
   {
      title: "Fairness, Consistency, and Why Classroom Economies Last",
      href: "/articles/fairness/fairness_consistency.html",
    },
  ];

  return (
    <div className="hero-background min-h-screen w-full flex flex-col items-center justify-start text-center px-6 py-12 relative">
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
      <h1 className="text-5xl md:text-6xl font-light tracking-wide text-grey drop-shadow-2xl mb-12 bg-black/10 px-4 py-2 rounded-lg">
        Class Economy (Concept)
      </h1>

      {/* Article buttons */}
      <div className="flex flex-col gap-6 max-w-2xl w-full">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white/20 text-black py-8 px-6 rounded-lg shadow-md hover:bg-white/30 transition text-center text-xl md:text-2xl"
          >
            {article.title}
          </a>
        ))}
      </div>
    </div>
  );
}


