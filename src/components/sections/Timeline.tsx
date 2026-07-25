import DayCard from "@/components/sections/DayCard";
import VersaillesHighlight from "@/components/sections/VersaillesHighlight";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import GoldDivider from "@/components/ui/GoldDivider";
import { images } from "@/lib/images";

export default function Timeline() {
  return (
    <section className="relative w-full bg-champagne/40 py-32 sm:py-40">
      <div className="mx-auto mb-24 max-w-2xl px-6 text-center sm:mb-32">
        <Reveal>
          <Eyebrow>Die Reiseroute</Eyebrow>
        </Reveal>
        <Reveal delay={0.1} className="mt-6">
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">
            Fünf Tage, geschrieben für uns
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-8">
          <GoldDivider className="mx-auto w-16" />
        </Reveal>
      </div>

      <div className="flex flex-col gap-28 sm:gap-36">
        <DayCard
          day={1}
          title="Ankunft"
          image={images.day1Montmartre}
          imageAlt="Straßen von Montmartre in Paris zur goldenen Stunde"
          teaser="Wir landen, atmen durch, und Montmartre begrüßt uns mit Kopfsteinpflaster und Geigenmusik von irgendwoher, das wir nicht ganz sehen können."
          items={[
            "Ankunft in Paris — ankommen, ohne Eile",
            "Ein ruhiger Spaziergang durch die verwinkelten Gassen von Montmartre",
            "Abendessen in einem kleinen, romantischen Restaurant",
            "Sonnenuntergang über Paris an der Sacré-Cœur",
          ]}
        />

        <DayCard
          day={2}
          title="Entlang der Seine"
          image={images.day2Louvre}
          imageAlt="Der Innenhof des Louvre in Paris"
          teaser="Ein Tag für Kunst, Gärten und weite offene Plätze — der genau dort endet, wo jeder gute Pariser Abend enden sollte: am Wasser."
          items={[
            "Vormittag im Louvre",
            "Ein Spaziergang durch den Jardin des Tuileries",
            "Ein Moment auf der Place de la Concorde",
            "Ein Abendspaziergang entlang der Seine",
          ]}
          reverse
        />

        <VersaillesHighlight />

        <DayCard
          day={4}
          title="Gold & Licht"
          image={images.day4ArcDeTriomphe}
          imageAlt="Der Arc de Triomphe am oberen Ende der Champs-Élysées"
          teaser="Der Eiffelturm, der Arc de Triomphe und eine Prachtstraße, die nach Leder und Parfüm duftet — Paris in seiner glamourösesten Form."
          items={[
            "Der Eiffelturm und die Wiesen des Champ de Mars",
            "Ein Moment unter dem Arc de Triomphe",
            "Bummeln über die Champs-Élysées — Louis Vuitton, Dior, Cartier in goldenem Schaufensterlicht",
            "Abendessen auf einer Dachterrasse mit Blick über die Stadt",
          ]}
        />

        <DayCard
          day={5}
          title="Ein ruhiger Morgen"
          image={images.day5Cafe}
          imageAlt="Eine ruhige Pariser Café-Terrasse am Morgen"
          teaser="Kein Plan, kein Zeitdruck — nur Kaffee, Gebäck und gemeinsames Verlaufen, bevor wir uns von der Stadt verabschieden müssen."
          items={[
            "Ein ruhiger Pariser Morgen, ohne Wecker",
            "Kaffee und etwas Warmes aus einer französischen Bäckerei",
            "Durch Straßen schlendern, die auf keiner Karte stehen",
            "Einfach die Stadt genießen, zusammen",
          ]}
          reverse
        />
      </div>
    </section>
  );
}
