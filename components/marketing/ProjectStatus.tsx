import { Reveal } from "@/components/motion/Reveal";
import { CtaLink } from "@/components/ui/CtaLink";
import { HomeMidClose, HomeMidShell } from "@/components/vascurra/ui/home-mid-shell";
import { HomeMidArt } from "@/components/vascurra/home/mid-art";
import { projectStatus } from "@/content/home";
import { sectionIds } from "@/content/site";

export function ProjectStatus() {
  return (
    <HomeMidShell labelledBy="status-heading">
      <Reveal>
        <p className="home-mid-kicker">{projectStatus.eyebrow}</p>
        <h2 id="status-heading" className="home-mid-heading mt-4 max-w-4xl">
          <span className="block text-[var(--vascurra-deep-teal)]">
            {projectStatus.headingLead}
          </span>
          <span className="text-mark">{projectStatus.headingAccent}</span>
        </h2>
        <p className="home-mid-body mt-6 max-w-3xl text-ink-body">{projectStatus.intro}</p>
        <div className="mt-8">
          <CtaLink href={`#${sectionIds.approach}`}>{projectStatus.cta} →</CtaLink>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <HomeMidArt
          slot="s05-responsible-development"
          src="/vascurra/homepage-hd/05-ambitious-in-vision-careful-in-development.png"
          alt="Three stages of responsible development: human judgement, privacy, and evidence before claims."
          width={1672}
          height={941}
          maxWidthClass="mt-14 w-full max-w-none"
          sizes="(min-width: 1280px) 1280px, 100vw"
        />
      </Reveal>

      <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
        {projectStatus.themes.map((theme, i) => (
          <Reveal as="li" key={theme.id} delay={80 + i * 70}>
            <h3 className="text-[clamp(1.25rem,1.8vw,1.55rem)] leading-snug font-semibold text-[var(--vascurra-deep-teal)]">
              {theme.name}
            </h3>
            <p className="mt-3 text-[1.125rem] leading-relaxed text-ink-body">{theme.body}</p>
          </Reveal>
        ))}
      </ol>

      <HomeMidClose>{projectStatus.note}</HomeMidClose>
      <p className="sr-only">{projectStatus.boundaries}</p>
    </HomeMidShell>
  );
}
