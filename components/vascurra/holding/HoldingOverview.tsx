import Image from "next/image";
import { CtaLink } from "@/components/ui/CtaLink";
import { VascurraGradientText } from "@/components/vascurra/home/gradient-text";
import { v4Artwork } from "@/components/vascurra/home/v4-artwork-slot";
import { holdingOverview } from "@/content/holding";
import { footer } from "@/content/home";
import { privacyHref } from "@/content/site";
import styles from "./holding-overview.module.css";

export function HoldingOverview() {
  const { mission, challenge, project, perspectives, research, development } = holdingOverview;

  return (
    <>
      <section id="overview" aria-labelledby="overview-heading" className={`${styles.section} ${styles.missionSection}`}>
        <div className={`${styles.shell} ${styles.mission}`}>
          <div>
            <p className={styles.eyebrow}>{mission.eyebrow}</p>
            <h2 id="overview-heading" className={styles.heading}>
              {mission.heading.map((line) => <span key={line}>{line}</span>)}
            </h2>
            <div className={styles.copy}>
              <h3 className={styles.originHeading}>{mission.originHeading}</h3>
              <p>{mission.origin}</p>
              <p>{mission.body}</p>
              <p>{mission.detail}</p>
            </div>
            <p className={styles.statement}>
              <span>{mission.closing[0]}</span>
              <VascurraGradientText>{mission.closing[1]}</VascurraGradientText>
            </p>
          </div>
          <figure className={styles.portrait}>
            <Image
              src="/vascurra/v2/section-02-origin-illustration.webp"
              alt=""
              width={720}
              height={696}
              sizes="(min-width: 1344px) 576px, (min-width: 1024px) 43vw, (min-width: 768px) 40vw, (min-width: 640px) 576px, calc(100vw - 40px)"
              loading="eager"
            />
          </figure>
        </div>
      </section>

      <section id="challenge" aria-labelledby="challenge-heading" className={`${styles.section} ${styles.mist} ${styles.challengeSection}`}>
        <div className={`${styles.shell} ${styles.challengeLayout}`}>
          <div className={styles.challengeTitle}>
            <p className={styles.eyebrow}>{challenge.eyebrow}</p>
            <h2 id="challenge-heading" className={`${styles.heading} ${styles.challengeHeading}`}>
              {challenge.heading.map((line) => <span key={line}>{line}</span>)}
            </h2>
          </div>
          <div className={styles.challengeNarrative}>
            <div className={styles.challengeMain}>
              {challenge.main.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className={styles.challengeFragmentation}>
              <h3>{challenge.fragmentationHeading}</h3>
              <p>{challenge.fragmentation}</p>
            </div>
            <div className={styles.challengeResponse}>
              <h3>{challenge.responseHeading}</h3>
              <ol>
                {challenge.response.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </div>
          </div>
          <div className={styles.challengeClosing}>
            <p>{challenge.closing[0]}</p>
            <p>{challenge.closing[1]}</p>
          </div>
        </div>
      </section>

      <section id="project" aria-labelledby="project-heading" className={`${styles.section} ${styles.mist} ${styles.projectSection}`}>
        <div className={styles.shell}>
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrow}>{project.eyebrow}</p>
              <h2 id="project-heading" className={`${styles.heading} ${styles.systemHeading}`}>
                {project.heading.map((line) => <span key={line}>{line}</span>)}
              </h2>
            </div>
            <p className={styles.lead}>{project.introduction}</p>
          </div>
          <ol className={styles.layers}>
            {project.layers.map((layer, index) => (
              <li key={layer.name}>
                <span className={styles.number} aria-hidden="true">0{index + 1}</span>
                <div className={styles.layerText}>
                  <h3>{layer.name}</h3>
                  <p className={styles.role}>{layer.role}</p>
                  <p>{layer.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="perspectives" aria-labelledby="perspectives-heading" className={`${styles.section} ${styles.perspectivesSection}`}>
        <div className={styles.shell}>
          <div className={styles.intro}>
            <div>
              <p className={styles.eyebrow}>{perspectives.eyebrow}</p>
              <h2 id="perspectives-heading" className={`${styles.heading} ${styles.systemHeading}`}>
                {perspectives.heading.map((line) => <span key={line}>{line}</span>)}
              </h2>
            </div>
            <p className={styles.lead}>{perspectives.introduction}</p>
          </div>
          <figure className={styles.systemArtwork}>
            <Image
              src={v4Artwork.system.src}
              alt={perspectives.artworkAlt}
              width={v4Artwork.system.width}
              height={v4Artwork.system.height}
              sizes="(min-width: 1440px) 1408px, (min-width: 1280px) calc(100vw - 32px), (min-width: 1024px) calc(100vw - 96px), (min-width: 640px) calc(100vw - 64px), 100vw"
              loading="lazy"
            />
          </figure>
          <ul className={styles.perspectives}>
            {perspectives.items.map((item) => (
              <li key={item.name}><h3>{item.name}</h3><p>{item.body}</p></li>
            ))}
          </ul>
          <p className={styles.boundary}>{perspectives.boundary}</p>
        </div>
      </section>

      <section id="research" aria-labelledby="research-heading" className={`${styles.section} ${styles.researchSection}`}>
        <div className={styles.shell}>
          <div className={styles.editorial}>
            <div>
              <p className={styles.eyebrow}>{research.eyebrow}</p>
              <h2 id="research-heading" className={`${styles.heading} ${styles.editorialHeading}`}>
                {research.heading.map((line) => <span key={line}>{line}</span>)}
              </h2>
            </div>
            <div className={styles.editorialCopy}><p>{research.body}</p><p>{research.detail}</p></div>
          </div>
          <div className={styles.researchBoundary}>
            <p className={styles.distinction}>{research.distinction}</p>
            <p>{research.boundary}</p>
          </div>
        </div>
      </section>

      <section id="development" aria-labelledby="development-heading" className={`${styles.section} ${styles.deep}`}>
        <div className={styles.shell}>
          <p className={styles.eyebrow}>{development.eyebrow}</p>
          <h2 id="development-heading" className={styles.heading}>
            <span>{development.heading[0]}</span>
            <VascurraGradientText luminous>{development.heading[1]}</VascurraGradientText>
          </h2>
          <p className={`${styles.lead} ${styles.developmentLead}`}>{development.introduction}</p>
          <ul className={styles.principles}>
            {development.principles.map((principle) => (
              <li key={principle.name}><h3>{principle.name}</h3><p>{principle.body}</p></li>
            ))}
          </ul>
          <dl className={styles.status}>
            {development.status.map((stage) => (
              <div key={stage.name}>
                <dt>{stage.name}<span>{stage.qualifier}</span></dt>
                <dd>{stage.body}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.developmentClose}>
            <p className={styles.disclaimer}>{footer.disclaimer}</p>
            <CtaLink href={privacyHref} variant="onDeepGhost">{development.privacyCta}</CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
