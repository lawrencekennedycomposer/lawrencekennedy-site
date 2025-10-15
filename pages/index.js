export default function HomePage() {
  return (
    <div className="hero-portrait-main min-h-screen w-full flex flex-col justify-between px-6 py-10 lg:py-16">
      {/* Title row */}
      <div className="w-full text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-gray-100 drop-shadow-[0_5px_7px_rgba(0,0,0,0.4)]">
          Lawrence Kennedy
        </h1>
      </div>

      {/* Buttons row */}
      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-24">
        {[
          { label: "Music", href: "/music" },
          { label: "Class Economy", href: "/classroom" },
          { label: "Adventures", href: "/adventures" },
          { label: "Thoughts & Concepts", href: "/thoughts" },
        ].map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            className="block rounded-3xl bg-white/50 backdrop-blur-md shadow-lg border border-white/60
                       px-8 md:px-8 lg:px-6 py-6 md:py-6 lg:py-6
                       transition-all duration-300 hover:bg-white/70 hover:shadow-2xl hover:-translate-y-1 text-center"
          >
            <span className="text-1xl md:text-3xl lg:text-2xl font-medium text-gray-600 drop-shadow-sm">
              {btn.label}
            </span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="w-full text-center text-sm text-gray-600/70">
        © {new Date().getFullYear()} · Thoughts Unfolding
      </footer>
    </div>
  );
}

