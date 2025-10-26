import Link from "next/link";

export default function AdventuresPage() {
  const articles = [
    // 1) existing
    {
      title: "Travel Recipes",
      href: "/travel/recipes",
    },

    // 2) new
    {
      title: "Nha-Trang",
      href: "/travel/nhatrang/index.html",
      newTab: true,
    },

    // 3) new
    {
      title: "Hue - coming soon",
      href: "#",
    },

    // 4) new
    {
      title: "Journey to Vientiane - coming soon",
      href: "#",
    },

    // 5) new
    {
      title: "Vang Vieng - coming soon",
      href: "#",
    },

    // 6) today’s article (live)
    {
      title: "Tat Lo: Life at the Right Speed",
      href: "/travel/tatlo/index.html",
      newTab: true,
    },

    // 7) new
    {
      title: "Phnom Penh - coming soon",
      href: "#",
    },

    // 8) new
    {
      title: "Siem Reap - coming soon",
      href: "#",
    },

    // 9) existing (opens in new tab)
    {
      title: "Borneo: Between Paradise and Reality",
      href: "/travel/Borneo/Borneo_Between_Paradise_and_Reality_full.html",
      newTab: true,
    },
  ];

  // 10) existing
  const playlist = {
    title: "Travel Video Playlist",
    href: "https://youtube.com/playlist?list=PLClRwhpsLj3QlVcx2iQSr4MUiC0zC6slA&si=qQ14agB9-YGShxrj",
    newTab: true,
  };

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
        Travel & Adventures
      </h1>

      {/* Main Article buttons */}
      <div className="flex flex-col gap-6 max-w-2xl w-full mb-10">
        {articles.map((a, i) => (
          <a
            key={i}
            href={a.href}
            target={a.newTab ? "_blank" : "_self"} // Borneo opens in new tab only
            rel={a.newTab ? "noopener noreferrer" : undefined}
            className="w-full bg-white/20 text-black py-8 px-6 rounded-lg shadow-md hover:bg-white/30 transition text-center text-xl md:text-2xl"
          >
            {a.title}
          </a>
        ))}
      </div>

      {/* Playlist button (lighter red, bottom) */}
      <a
        href={playlist.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-2xl bg-rose-300/70 text-black py-8 px-6 rounded-lg shadow-md hover:bg-rose-400 transition text-center text-xl md:text-2xl"
      >
        {playlist.title}
      </a>
    </div>
  );
}
