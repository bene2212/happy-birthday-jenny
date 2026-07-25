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
              enny, seit fast einem Jahr kenne ich dich. Es ist verrückt, wie
              schnell du zu einem Menschen geworden bist, der aus meinem
              Leben einfach nicht mehr wegzudenken ist.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-2xl italic leading-relaxed text-ink-soft sm:text-3xl">
              Ich liebe dein Lachen – ehrlich gesagt manchmal sogar mehr als
              den Witz, der es auslöst. Und ich liebe, wie du einfach du
              selbst bist, ohne dich jemals zu verstellen. Genau das macht
              dich für mich so besonders.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-2xl italic leading-relaxed text-ink-soft sm:text-3xl">
              Du bereicherst mein Leben auf eine Weise, die ich vorher nicht
              kannte. Du motivierst mich, Dinge auszuprobieren, die ich
              alleine wahrscheinlich nie gewagt hätte, und gibst mir dabei
              das Gefühl, dass alles ein bisschen leichter ist. Bei dir fühle
              ich mich einfach zuhause.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-2xl italic leading-relaxed text-ink-soft sm:text-3xl">
              Ich hätte dir etwas schenken können, das in Geschenkpapier
              eingewickelt ist. Etwas, das man auspackt, sich anschaut und
              irgendwann ins Regal stellt.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-2xl italic leading-relaxed text-ink-soft sm:text-3xl">
              Aber Dinge verlieren mit der Zeit ihren Wert. Erinnerungen
              nicht.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-display text-2xl italic leading-relaxed text-ink-soft sm:text-3xl">
              Deshalb wollte ich dir dieses Jahr etwas schenken, das man
              nicht einfach in die Hand nehmen kann. Etwas, das uns gehört.
              Etwas, an das wir uns noch lange erinnern werden – und über
              das wir hoffentlich auch in vielen Jahren noch gemeinsam
              lachen und erzählen.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="font-display text-2xl italic leading-relaxed text-ink-soft sm:text-3xl">
              Es gibt etwas viel Wertvolleres.
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
