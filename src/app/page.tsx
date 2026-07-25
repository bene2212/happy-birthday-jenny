import Hero from "@/components/sections/Hero";
import Letter from "@/components/sections/Letter";
import ParisReveal from "@/components/sections/ParisReveal";
import Timeline from "@/components/sections/Timeline";
import ParisMap from "@/components/sections/ParisMap";
import ParisFacts from "@/components/sections/ParisFacts";
import Countdown from "@/components/sections/Countdown";
import Promise from "@/components/sections/Promise";
import Finale from "@/components/sections/Finale";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <Letter />
      <ParisReveal />
      <Timeline />
      <ParisMap />
      <ParisFacts />
      <Countdown />
      <Promise />
      <Finale />
    </main>
  );
}
