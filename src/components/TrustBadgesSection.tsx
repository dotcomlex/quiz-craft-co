import logoBbb from "@/assets/logo-bbb.png";
import logoHomeadvisor from "@/assets/logo-homeadvisor-elite.png";

const TrustBadgesSection = () => {
  // Mix of real logo images and text-based badges for painting industry
  const badges = [
    { type: "image", src: logoBbb, alt: "BBB A+ Rated" },
    { type: "text", label: "★★★★★ Google Reviews" },
    { type: "text", label: "Sherwin-Williams" },
    { type: "text", label: "Benjamin Moore" },
    { type: "text", label: "Angi Certified" },
    { type: "image", src: logoHomeadvisor, alt: "HomeAdvisor Elite Service" },
    { type: "text", label: "Licensed Colorado Contractor" },
  ];

  // Double the badges for seamless loop
  const allBadges = [...badges, ...badges];

  return (
    <section className="py-6 bg-white border-y border-border overflow-hidden">
      <p className="text-center text-xs text-secondary uppercase tracking-widest mb-4 font-medium">
        Trusted & Certified
      </p>
      <div className="flex w-max animate-scroll">
        {allBadges.map((badge, index) => (
          <div
            key={`${badge.type === "image" ? badge.alt : badge.label}-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-8 sm:px-12 min-w-[140px] sm:min-w-[180px]"
          >
            {badge.type === "image" ? (
              <img
                src={badge.src}
                alt={badge.alt}
                className="h-14 sm:h-18 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="text-sm sm:text-base font-semibold text-secondary/60 hover:text-secondary transition-colors duration-300 whitespace-nowrap">
                {badge.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadgesSection;
