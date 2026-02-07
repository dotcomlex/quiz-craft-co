import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import avatar6 from "@/assets/avatar-6.jpg";
import avatar7 from "@/assets/avatar-7.jpg";
import avatar8 from "@/assets/avatar-8.jpg";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const reviews = [
    {
      name: "Alexa Y.",
      location: "Denver, CO",
      avatar: avatar1,
      rating: 5,
      text: "I couldn't be happier with the paint job! Their team was professional, punctual, and truly experts in color selection. They helped me choose the perfect shades that transformed my home, and the quality of their work exceeded all my expectations. Highly recommend for anyone looking for flawless results and great customer service!",
    },
    {
      name: "Morgan J.",
      location: "Aurora, CO",
      avatar: avatar2,
      rating: 5,
      text: "From start to finish, Jose and his team delivered exceptional service and quality. Their attention to detail and expertise in paint colors made the entire process easy and enjoyable. The crew was friendly, efficient, and left my home looking stunning. I will definitely be calling them again for future projects!",
    },
    {
      name: "Robert D.",
      location: "Lakewood, CO",
      avatar: avatar3,
      rating: 5,
      text: "They made it so easy. Their advice was spot-on, and now every room feels perfectly balanced and welcoming. The quality of their work really shows, and the crew treated my home with care and respect. I've already recommended them to friends and family!",
    },
    {
      name: "Sarah T.",
      location: "Littleton, CO",
      avatar: avatar4,
      rating: 5,
      text: "We had our entire exterior painted and the difference is night and day. Jose's crew prepped everything properly, covered all the landscaping, and the finished product looks incredible. Neighbors have been stopping by to ask who did the work. The whole job was done in three days and they cleaned up perfectly every evening.",
    },
    {
      name: "James & Lisa K.",
      location: "Thornton, CO",
      avatar: avatar5,
      rating: 5,
      text: "After getting three quotes, we went with Emerald Paints and it was the best decision. Jose came out personally, walked through every room, and gave us honest recommendations on colors and finishes. No pressure, no upselling. The paint job is flawless and the price was very fair. Already planning to have them do our basement next.",
    },
    {
      name: "Carlos M.",
      location: "Westminster, CO",
      avatar: avatar6,
      rating: 5,
      text: "Our last painter left us with peeling paint and uneven coverage after just six months. Jose and his team came in, did the proper prep work that was skipped before, and the results speak for themselves. A year later, everything still looks perfect. This is how painting should be done. Real professionals who stand behind their work.",
    },
    {
      name: "Patricia W.",
      location: "Arvada, CO",
      avatar: avatar7,
      rating: 5,
      text: "I was nervous about painting our kitchen because the walls had some damage and I wasn't sure what colors would work. Jose's color consultation was amazing. He brought samples, tested them on the wall with different lighting, and helped us pick the perfect shade. The finished kitchen feels like a completely different room. Worth every penny.",
    },
    {
      name: "David R.",
      location: "Centennial, CO",
      avatar: avatar8,
      rating: 5,
      text: "Hired Emerald Paints for our office space and they worked around our business hours without any disruption. Professional, fast, and the quality is outstanding. Our clients have been complimenting the new look since day one. Already booked them for our second location.",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const getVisibleReviews = () => reviews.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section 
      className="py-12 sm:py-16 lg:py-24"
      style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          {/* Label - GOLD for visibility on dark */}
          <span 
            className="inline-block font-semibold text-sm uppercase tracking-wider mb-3"
            style={{ color: '#F5C518' }}
          >
            Customer Reviews
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            This Is Why Colorado Homeowners <span style={{ color: '#F5C518' }}>Trust Us</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto px-4">
            Real stories from real families who transformed their homes.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {getVisibleReviews().map((review, index) => (
              <div
                key={currentIndex + index}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-border/30 h-full flex flex-col"
              >
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/20 mb-3 sm:mb-4" />
                <p className="text-foreground/90 mb-4 sm:mb-5 text-xs sm:text-sm leading-relaxed">"{review.text}"</p>
                {/* Stars - GOLD color */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ fill: '#F5C518', color: '#F5C518' }} />
                  ))}
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 pt-3 sm:pt-4 border-t border-border/50 mt-auto">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary/20"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-semibold text-secondary text-xs sm:text-sm">{review.name}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{review.location}</p>
                  </div>
                </div>
                {/* Verified Badge */}
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-muted-foreground mt-2 sm:mt-3">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Verified Google Review</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-11 h-11 sm:w-11 sm:h-11 rounded-full min-h-[44px] bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-11 h-11 sm:w-11 sm:h-11 rounded-full min-h-[44px] bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          {/* Inline CTA - GREEN */}
          <div className="flex justify-center mt-8 sm:mt-10">
            <div className="animate-subtle-rock w-full sm:w-auto">
              <Link to="/qualify" className="block">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="group shadow-2xl text-lg px-8 py-6 animate-cta-glow w-full sm:w-auto min-h-[44px]"
                >
                  Check My Eligibility
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
