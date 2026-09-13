import { AboutSection } from "@/components/home/AboutSection";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { GallerySection } from "@/components/home/GallerySection";
import { Hero } from "@/components/home/Hero";
import { MenuPreview } from "@/components/home/MenuPreview";
import { ReservationCTA } from "@/components/home/ReservationCTA";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <FeatureStrip />

      <MenuPreview />

      <AboutSection />

      <GallerySection />

      <TestimonialsSection />

      <ReservationCTA />

      {/* Temporary placeholder for Phase 11 */}
      <section className="min-h-[40vh] bg-background" />
    </main>
  );
}