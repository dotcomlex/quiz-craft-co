import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import FloatingCTA from "@/components/FloatingCTA";
import StickyHeader from "@/components/StickyHeader";

// Lazy load below-the-fold sections for faster initial load
const TrustBadgesSection = lazy(() => import("@/components/TrustBadgesSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const ReviewsSection = lazy(() => import("@/components/ReviewsSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));

const Index = () => {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      <Suspense fallback={<div className="h-24 bg-white" />}>
        <TrustBadgesSection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-white" />}>
        <GallerySection />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-secondary" />}>
        <ReviewsSection />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-white" />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-white" />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<div className="h-64 bg-secondary" />}>
        <FinalCTASection />
      </Suspense>
      <FloatingCTA />
    </main>
  );
};

export default Index;
