// components/Backdrop.js
import Image from "next/image";

export default function Backdrop({ src }) {
  if (!src) return null; // safety check

  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src={src}
        alt="Background"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      {/* Light overlay so text stays readable */}
      <div className="absolute inset-0 bg-white/20"></div>
    </div>
  );
}


