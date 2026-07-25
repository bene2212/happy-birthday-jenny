import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import GoldDivider from "@/components/ui/GoldDivider";

const lines = [
  "Ich weiß nicht, welcher unser Lieblingsmoment sein wird.",
  "Vielleicht, wie Paris erwacht.",
  "Vielleicht das Lachen in einem kleinen Café.",
  "Vielleicht, uns gemeinsam ein wenig zu verlaufen.",
];

export default function Promise() {
  return (
    <section className="relative w-full bg-ivory py-32 sm:py-44">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <Eyebrow>Ein Versprechen</Eyebrow>
        </Reveal>
        <Reveal delay={0.1} className="mt-8">
          <GoldDivider className="mx-auto w-16" />
        </Reveal>

        <div className="mt-16 space-y-6">
          {lines.map((line, i) => (
            <Reveal key={line} delay={i * 0.15}>
              <p className="font-display text-2xl italic leading-relaxed text-ink-soft/85 sm:text-3xl">
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={lines.length * 0.15 + 0.15} className="mt-14">
          <p className="text-gradient-gold animate-shimmer font-serif text-3xl italic sm:text-4xl md:text-5xl">
            Aber ich weiß, dass das eine unserer liebsten Erinnerungen wird.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
