import Reveal from "@/components/ui/Reveal";
import GoldDivider from "@/components/ui/GoldDivider";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Letter() {
  return (
    <section className="relative w-full bg-ivory px-6 py-32 sm:py-40">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Reveal>
          <Eyebrow>Ein Brief, vor der Überraschung</Eyebrow>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <GoldDivider className="mx-auto w-16" />
        </Reveal>

        <div className="mt-14 space-y-8 text-left sm:text-center">
          <Reveal delay={0.05}>
            <p className="font-display text-2xl italic leading-relaxed text-ink-soft sm:text-3xl">
              <span className="float-left mr-3 mt-1 font-serif text-6xl not-italic text-gold-deep sm:text-7xl">
                J
              </span>
              enny, seit fast einem Jahr kenne ich dich, seit sieben Monaten
              gehören wir zusammen. Ich liebe dein Lachen — ehrlich gesagt,
              mehr als jeden Witz, der es auslöst. Und ich liebe, wie du
              einfach du selbst bist, ohne dich je zu verstellen.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-2xl italic leading-relaxed text-ink-soft sm:text-3xl">
              Du erfüllst mein Leben, motivierst mich, Dinge auszuprobieren,
              die ich mir allein nie zugetraut hätte — und das alles mit
              einer Leichtigkeit, die ich vorher nicht kannte. Bei dir fühle
              ich mich einfach zuhause.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-2xl italic leading-relaxed text-ink-soft sm:text-3xl">
              Ich hätte dir etwas schenken können, das in Papier eingepackt
              ist — etwas, das still im Regal steht und irgendwann vergisst,
              warum es überhaupt ausgesucht wurde.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-2xl italic leading-relaxed text-ink-soft sm:text-3xl">
              Aber Dinge verblassen. Momente nicht. Deshalb wollte ich dir
              stattdessen eine Erinnerung schenken — eine, die nur uns
              gehört, die niemand uns nehmen kann, und über die wir auch in
              Jahren noch sprechen werden.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-display text-2xl italic leading-relaxed text-ink-soft sm:text-3xl">
              Dieses Jahr gibt es keine Schachtel zum Öffnen.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16">
          <GoldDivider className="mx-auto w-16" />
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <p className="text-gradient-gold animate-shimmer font-serif text-4xl italic sm:text-5xl md:text-6xl">
            Also pack deinen Koffer&hellip;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
