import logoBbb from "@/assets/logo-bbb.png";
import logoHomeadvisor from "@/assets/logo-homeadvisor-elite.png";
import logoBenjaminMoore from "@/assets/logo-benjamin-moore.png";
import logoBehr from "@/assets/logo-behr.png";
import logoAngi from "@/assets/logo-angi.png";

const TrustBadgesSection = () => {
  const badges = [
    { src: logoBbb, alt: "BBB A+ Rated" },
    { src: logoBenjaminMoore, alt: "Benjamin Moore" },
    { src: logoBehr, alt: "BEHR" },
    { src: logoAngi, alt: "Angi Certified Pro" },
    { src: logoHomeadvisor, alt: "HomeAdvisor Elite Service" },
  ];

  // Double the badges for seamless loop
  const allBadges = [...badges, ...badges];

  return (
    <section className="py-6 bg-white border-y border-border overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: '#1E293B' }}>
        Trusted & Certified
      </p>
      <div className="flex w-max animate-scroll">
        {allBadges.map((badge, index) => (
          <div
            key={`${badge.alt}-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-8 sm:px-12 min-w-[140px] sm:min-w-[180px]"
          >
            <img
              src={badge.src}
              alt={badge.alt}
              className="h-12 sm:h-16 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadgesSection;
