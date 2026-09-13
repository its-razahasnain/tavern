import { FeatureStrip } from "@/components/home/FeatureStrip";
import { Hero } from "@/components/home/Hero";
import { MenuPreview } from "@/components/home/MenuPreview";

export default function Home() {
  return (
    <main>
      <Hero />

      <FeatureStrip />

      <MenuPreview />

      {/* Temporary placeholder for Phase 7 */}
      <section className="min-h-[40vh] bg-background" />
    </main>
  );
}