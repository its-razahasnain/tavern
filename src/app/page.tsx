import { AboutSection } from "@/components/home/AboutSection";
import { FeatureStrip } from "@/components/home/FeatureStrip";
import { GallerySection } from "@/components/home/GallerySection";
import { Hero } from "@/components/home/Hero";
import { MenuPreview } from "@/components/home/MenuPreview";
import { ReservationCTA } from "@/components/home/ReservationCTA";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { RestaurantSchema } from "@/components/seo/RestaurantSchema";

export default function Home() {
  return (
    <main>
      <RestaurantSchema />

      <Hero />
      <FeatureStrip />
      <MenuPreview />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ReservationCTA />
    </main>
  );
}