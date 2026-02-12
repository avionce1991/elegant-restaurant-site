import { useRef, useEffect, useState } from "react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9,
];

const HorizontalGallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = section.offsetHeight - window.innerHeight;

      if (sectionTop <= 0 && sectionTop >= -sectionHeight) {
        const progress = Math.abs(sectionTop) / sectionHeight;
        // Move from 0 to -(images.length - 1) * 100vw
        const maxTranslate = (images.length - 1) * 100;
        setTranslateX(-progress * maxTranslate);
      } else if (sectionTop > 0) {
        setTranslateX(0);
      } else {
        setTranslateX(-(images.length - 1) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalImages = images.length;

  return (
    <section
      ref={sectionRef}
      style={{ height: `${totalImages * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="flex h-full items-stretch"
          style={{
            width: `${totalImages * 100}vw`,
            transform: `translateX(${translateX}vw)`,
            willChange: "transform",
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-full"
              style={{ width: "100vw" }}
            >
              <img
                src={img}
                alt={`Wedding photography ${i + 1}`}
                className={`w-full h-full object-contain ${i === 3 ? "" : "md:object-cover"}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalGallery;
