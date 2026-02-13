import { useEffect, useRef, useState } from "react";
import photographerImg from "@/assets/photographer-portrait.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Text - left */}
        <div
          className={`space-y-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="heading-caps text-muted-foreground">O meni</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light italic leading-tight">
            Transparentnost i odgovornost kroz objektiv
          </h2>
          <p className="text-muted-foreground leading-relaxed font-light">
            Fotografijom se bavim više od dvadeset godina, a od 2018. godine profesionalno dokumentujem venčanja, rođendane i proslave. Moj put nije tipična priča „fotograf od malena“ — počeo sam uz računare i digitalne alate, ovladao Photoshop‑om i Lightroom‑om, a zatim se posvetio fotografisanju događaja.
            Danas radim kao profesionalni fotograf za venčanja, rođendane i evente u Nišu, Srbiji i regionu. Od mene možete očekivati transparentnost i odgovornost: sve što dogovorimo, isporučujem tačno kako je dogovoreno. Fotografija za mene nije samo posao, već i obaveza i odgovornost da klijentima pružim uspomene koje će trajati zauvek.
            Moj pristup je iskren i direktan — kombinujem tehničku preciznost sa emocijom trenutka. Bilo da je u pitanju venčanje, osamnaesti rođendan ili prva proslava, moj cilj je da svaka fotografija bude autentična i verna vašem danu.
          </p>
          <a href="/kontakt" className="link-underline heading-caps text-xs inline-block mt-4">
            KONTAKTIRAJ ME
          </a>
        </div>

        {/* Photo - right */}
        <div
          className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={photographerImg}
              alt="Aleksandar Ničić - Wedding Photographer"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
