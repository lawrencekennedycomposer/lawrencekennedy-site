import Link from "next/link";
import { useState } from "react";
import Backdrop from "../components/Backdrop";

export default function MusicPage() {
  const videos = [
    { id: "xfh1_CEuMLA", title: "BOSSA NOVA - PanAm Continental Class - STUDY MIX" },
    { id: "ponVkI6KNZc", title: "STUDY MIX - Chants from the Sirens of Eyre - VOLUME 1" },
    { id: "WNzrbUdm--Y", title: "Hints of Spring - Bluegrass Mix" },
    { id: "W5tc_hB1kW0", title: "STUDY SESSIONS AUGUST MIX" },
    { id: "v5G_vJO23pE", title: "Escape Winter Mix" },
    { id: "ykxOdI5VeyI", title: "Study Sessions May - Music to help you Study" },
    { id: "j6ZhIfMf-HA", title: "Study Mix - Music to help you Study" },
    { id: "playlist:PLClRwhpsLj3S0GHbU90F_1z6BlYHCcOpH", title: "The Full Collection - 2025" },
  ];

  const [active, setActive] = useState(null);

  return (
    <div className="relative min-h-screen w-full text-center overflow-hidden">
      {/* Background */}
      <Backdrop src="/img/leaf-master.webp" />

      {/* Sticky header */}
      <header className="sticky top-0 z-20">
        <div className="mx-auto max-w-3xl px-6 py-4 md:py-6">
          <h1 className="text-7xl md:text-7xl font-light tracking-wide text-gray-700 drop-shadow-5x1g bg-white/10 backdrop-blur-md rounded-xl inline-block px-4 py-2">
            - Music -
          </h1> {/* Return to Home button */}
<div className="absolute top-6 left-6 z-20">
  <Link href="/">
    <button className="px-12 py-2 rounded-lg bg-white/30 text-white text-lg drop-shadow-lg hover:bg-white/50 transition">
      ←   
    </button>
  </Link>
</div>

        </div>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-4xl px-6 pb-16 space-y-8 z-10">
        {videos.map((video, index) => {
          const isPlaylist = video.id.startsWith("playlist:");
          const embedUrl = isPlaylist
            ? `https://www.youtube.com/embed/videoseries?list=${video.id.replace("playlist:", "")}`
            : `https://www.youtube.com/embed/${video.id}`;

          return (
            <div
              key={index}
              className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg shadow-sm p-4 hover:bg-white/20 transition cursor-pointer"
              onClick={() => setActive(active === index ? null : index)}
            >
              {/* Thumbnail + Title */}
              <div className="flex items-center justify-center gap-6 w-full h-32">
                <div className="overflow-hidden rounded-md shadow">
                  <img
                    src={
                      isPlaylist
                        ? "https://img.youtube.com/vi/xfh1_CEuMLA/0.jpg"
                        : `https://img.youtube.com/vi/${video.id}/0.jpg`
                    }
                    alt={video.title}
                    className="w-44 h-28 object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <span className="text-xl font-medium text-gray-800 drop-shadow">
                  {video.title}
                </span>
              </div>

              {/* Expanded player */}
              {active === index && (
                <div className="w-full flex justify-center mt-6">
                  <iframe
                    className="w-full max-w-3xl h-72 md:h-96 rounded-md"
                    src={embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          );
        })}

        <p className="text-gray-900 bg-white/20 backdrop-blur-sm inline-block px-4 py-2 rounded-md drop-shadow">
          More mixes and projects coming soon…
        </p>
      </main>
    </div>
  );
}

