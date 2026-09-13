import { FeatureStrip } from "@/components/home/FeatureStrip";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <FeatureStrip />

      {/* Temporary placeholder for Phase 6 */}
      <section
        className="
          min-h-[40vh]
          bg-background
        "
      />
    </main>
  );
}