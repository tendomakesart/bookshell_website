import { AmbientBackdrop } from "../components/AmbientBackdrop";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WebsiteSplash } from "../components/WebsiteSplash";
import type { ReactNode } from "react";

type InfoPageProps = {
  active: "privacy" | "roadmap" | "changelog" | "press" | "contact";
  cards: Array<{ title: string; copy: ReactNode }>;
  eyebrow: string;
  lede: string;
  title: string;
};

export function InfoPage({ active, cards, eyebrow, lede, title }: InfoPageProps) {
  return (
    <>
      <WebsiteSplash />
      <AmbientBackdrop />
      <Header active={active} />
      <main className="info-page">
        <section className="info-hero">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="hero-lede">{lede}</p>
          </div>
          <div className="placeholder-image" aria-label={`${title} placeholder visual`}>
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="info-card-grid" aria-label={`${title} details`}>
          {cards.map((card) => (
            <article className="info-card" key={card.title}>
              <span aria-hidden="true" />
              <h2>{card.title}</h2>
              <p>{card.copy}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
