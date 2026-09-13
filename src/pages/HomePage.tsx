import { siteContent as c } from "../data/siteContent";
import { Arrow, Button } from "../components/Button";
import { SectionHeader } from "../components/SectionHeader";
import { SolutionCard } from "../components/SolutionCard";
import { ContactSection } from "../components/ContactSection";

export function HomePage() {
  return (
    <main id="conteudo">
      {/* =====================================================
          HERO
          ===================================================== */}
      <section
        id="inicio"
        className="hero dark"
        aria-labelledby="hero-title"
      >
        <div
          className="hero-background"
          aria-hidden="true"
        />

        <div
          className="hero-overlay"
          aria-hidden="true"
        />

        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              {c.hero.eyebrow}
            </p>

            <h1 id="hero-title">
              {c.nameLines.map((line) => (
                <span key={line}>
                  {line}
                </span>
              ))}
            </h1>

            <p className="hero-profession">
              {c.title}
            </p>

            <p className="hero-description">
              {c.hero.text}
            </p>

            <div className="button-group">
              <Button href="#contato">
                {c.cta.hero}
              </Button>

              <Button
                href="#atuacao"
                variant="text"
              >
                {c.cta.discover}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOBRE
          ===================================================== */}
      <section
        id="sobre"
        className="section about"
      >
        <div className="container about-layout">
          <div className="about-visual">
            <img
              {...c.photos.about}
              loading="lazy"
            />

            <div className="experience-badge">
              <strong>
                {c.about.stat.value}
              </strong>

              <span>
                {c.about.stat.label}
              </span>
            </div>
          </div>

          <div className="about-copy">
            <SectionHeader
              eyebrow={c.about.eyebrow}
              title={c.about.title}
            />

            {c.about.paragraphs.map((p) => (
              <p key={p}>
                {p}
              </p>
            ))}

            <a
              className="text-link"
              href="#solucoes"
            >
              {c.cta.discover}
              <Arrow diagonal />
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          POSICIONAMENTO
          ===================================================== */}
      <section className="section positioning dark">
        <div className="container positioning-layout">
          <div>
            <SectionHeader
              eyebrow={c.positioning.eyebrow}
              title={c.positioning.title}
            />

            <p className="positioning-lead">
              {c.positioning.lead}
            </p>

            {c.positioning.paragraphs.map((p) => (
              <p key={p}>
                {p}
              </p>
            ))}

            <p className="signature">
              {c.positioning.signature}
            </p>
          </div>

          <div className="smile-portrait">
            <img
              {...c.photos.smile}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          ATUAÇÃO
          ===================================================== */}
      <section
        id="atuacao"
        className="section audience"
      >
        <div className="container">
          <div className="split-heading">
            <SectionHeader
              eyebrow={c.audience.eyebrow}
              title={c.audience.title}
            />

            <p>
              {c.audience.text}
            </p>
          </div>

          <div className="audience-grid">
            {c.audience.items.map((item, i) => (
              <div
                className="audience-item"
                key={item}
              >
                <span>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3>
                  {item}
                </h3>

                <Arrow diagonal />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUÇÕES
          ===================================================== */}
      <section
        id="solucoes"
        className="section solutions"
      >
        <div className="container solutions-layout">
          <div className="solutions-intro">
            <SectionHeader
              eyebrow={c.solutions.eyebrow}
              title={c.solutions.title}
              text={c.solutions.text}
            />

            <div
              className="orbit"
              aria-hidden="true"
            >
              <span />
              <i />
            </div>
          </div>

          <div>
            <ol className="solution-list">
              {c.solutions.items.map((item, i) => (
                <SolutionCard
                  key={item.title}
                  item={item}
                  index={i}
                />
              ))}
            </ol>

            <Button href="#contato">
              {c.cta.solutions}
            </Button>
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIÊNCIA
          ===================================================== */}
      <section
        id="experiencia"
        className="section approach dark"
      >
        <div className="container">
          <SectionHeader
            eyebrow={c.approach.eyebrow}
            title={c.approach.title}
          />

          <div className="approach-grid">
            {c.approach.items.map((item, i) => (
              <article key={item.title}>
                <span className="approach-index">
                  / 0{i + 1}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MANIFESTO
          ===================================================== */}
      <section className="section manifesto">
        <div className="container">
          <span
            className="manifesto-mark"
            aria-hidden="true"
          >
            “
          </span>

          <h2>
            {c.manifesto.first}
          </h2>

          <p>
            {c.manifesto.second}
          </p>

          <span className="manifesto-line" />
        </div>
      </section>

      {/* =====================================================
          PRESENÇA
          ===================================================== */}
      <section className="section presence">
        <div className="container">
          <div className="split-heading">
            <SectionHeader
              eyebrow={c.presence.eyebrow}
              title={c.presence.title}
            />

            <p>
              {c.presence.text}
            </p>
          </div>

          <div className="gallery">
            {[
              c.photos.presence,
              c.photos.executive,
              c.photos.color,
            ].map((photo, i) => (
              <figure key={photo.src}>
                <img
                  {...photo}
                  loading="lazy"
                />

                <figcaption>
                  <span>
                    0{i + 1}
                  </span>

                  {c.presence.captions[i]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTATO
          ===================================================== */}
      <ContactSection />
    </main>
  );
}