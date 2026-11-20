import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { bookContent } from "@/content/books";
import { homeCopy } from "@/content/home";
import { homePreviews } from "@/content/site";
import { HomeArrow, HomeContainer } from "./shared";

const Sections = styled.div`
  .spread { padding-block: var(--home-section); }
  .spread-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--home-split-gap); align-items: center; }
  .spread-copy { min-width: 0; grid-area: copy; }
  .portfolio-grid { grid-template-areas: 'visual copy'; }
  .books-grid { grid-template-areas: 'copy visual'; }
  .spread-title { font-size: clamp(64px, 5.9vw, 96px); font-weight: 800; line-height: .94; margin-bottom: 28px; }
  .spread-title span { display: block; }
  .spread-copy > p { font-size: 18px; line-height: 1.65; max-width: 58ch; }
  .spread-link { display: inline-flex; align-items: center; justify-content: flex-start; gap: 20px; width: fit-content; min-height: 64px; margin-top: 32px; color: var(--color-ink); text-decoration: none; font-size: 18px; font-weight: 500; }
  .spread-link .link-label { text-decoration: underline; text-underline-offset: .3em; }
  .arrow-orb { display: grid; place-items: center; flex-shrink: 0; border-radius: 50%; transition: background 240ms var(--home-ease), color 240ms var(--home-ease), transform 240ms var(--home-ease); }
  .spread-link .arrow-orb { width: 64px; height: 64px; background: var(--color-coral); color: var(--color-ink); }
  .arrow { display: block; flex-shrink: 0; transition: transform 240ms var(--home-ease); }
  .spread-link .arrow { width: 32px; height: 32px; }
  .spread-link:hover .arrow-orb { background: var(--color-ink); color: var(--color-paper); }
  .spread-link:hover .arrow { transform: translate(3px, -3px); }
  .campaign-pair { grid-area: visual; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; align-items: start; }
  .campaign-pair a { display: block; overflow: hidden; box-shadow: 0 10px 28px #1a1a1a12; transition: transform 240ms var(--home-ease); }
  .campaign-pair img { width: 100%; height: auto; aspect-ratio: 1; object-fit: contain; background: var(--color-paper); transition: transform 400ms var(--home-ease); }
  .campaign-pair a:hover { transform: translateY(-2px); }
  .campaign-pair a:hover img { transform: scale(1.025); }
  .books { background: var(--color-teal); }
  .books-copy > p { max-width: 45ch; }
  .book-title { font-size: clamp(28px, 2.6vw, 40px); font-weight: 600; line-height: 1.1; max-width: 24ch; margin-top: 28px; }
  .books-copy .publisher { font-size: 16px; margin-top: 16px; line-height: 1.5; }
  .books-copy .spread-link .arrow-orb { background: var(--color-paper); }
  .books-copy .spread-link:hover .arrow-orb { background: var(--color-ink); }
  .book-stage { grid-area: visual; min-width: 0; width: 100%; padding: 14px; }
  .book-visual { position: relative; width: 100%; padding: 18px; background: var(--color-paper); transform: rotate(-3deg); box-shadow: 0 16px 35px #1a1a1a26; }
  .book-visual img { display: block; width: 100%; height: auto; aspect-ratio: 1; object-fit: cover; }
  .book-date { position: absolute; right: -18px; bottom: -12px; display: grid; place-content: center; width: 124px; height: 124px; border-radius: 50%; background: var(--color-coral); text-align: center; font-size: 14px; line-height: 1.2; transform: rotate(3deg); }
  .book-date strong { font: 800 36px/1.1 var(--font-display); letter-spacing: -.03em; }
  .about { padding-block: var(--home-section); }
  .about-intro { display: flex; flex-direction: column; align-items: center; gap: 28px; text-align: center; }
  .about h2 { font-size: clamp(52px, 5.2vw, 76px); font-weight: 800; line-height: .98; }
  .about-intro p { max-width: 70ch; font-size: 18px; line-height: 1.7; }
  .facts { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 32px; list-style: none; margin: 56px 0 48px; padding: 0; text-align: center; }
  .fact { min-width: 0; }
  .fact-icon { display: block; box-sizing: content-box; width: 36px; height: 36px; padding: 18px; margin: 0 auto 20px; stroke: var(--color-fable); stroke-width: 1.65; stroke-linecap: round; stroke-linejoin: round; fill: none; background: var(--color-teal); border-radius: 50%; }
  .fact p { max-width: 22ch; margin-inline: auto; font-size: 16px; line-height: 1.65; text-wrap: balance; }
  .about-outro { max-width: 64ch; margin-inline: auto; font-size: 18px; line-height: 1.65; text-align: center; }
  .contact { padding-block: 72px; background: var(--color-coral); }
  .contact-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--home-split-gap); align-items: start; }
  .contact h2 { font-size: clamp(64px, 6vw, 96px); font-weight: 800; line-height: .98; max-width: 8ch; }
  .contact p { max-width: 54ch; font-size: 18px; line-height: 1.65; }
  .button { display: inline-flex; align-items: center; justify-content: space-between; gap: 48px; min-height: 56px; margin-top: 28px; padding: 14px 24px; background: var(--color-ink); color: var(--color-paper); font-weight: 500; text-decoration: none; transition: transform 200ms var(--home-ease), background 200ms var(--home-ease); }
  .button .arrow { width: 24px; height: 24px; }
  .button:hover { background: var(--color-fable); transform: translateY(-2px); }
  .button:hover .arrow { transform: translate(3px, -3px); }
  .button:active { transform: scale(.96); }

  @media (max-width: 1100px) {
    .spread-title { font-size: 64px; }
    .book-title { font-size: 30px; }
    .book-visual { padding: 14px; }
    .book-date { width: 100px; height: 100px; }
    .book-date strong { font-size: 30px; }
    .facts { gap: 24px; }
    .fact-icon { padding: 16px; width: 32px; height: 32px; }
  }
  @media (max-width: 900px) {
    .spread-grid { grid-template-columns: minmax(0, 1fr); grid-template-areas: 'copy' 'visual'; gap: 40px; }
    .spread-title { font-size: clamp(54px, 8vw, 72px); }
    .spread-title span { display: inline; }
    .spread-copy > p { max-width: 68ch; }
    .spread-link { max-width: 100%; margin-top: 24px; }
    .campaign-pair { width: 100%; max-width: 640px; justify-self: center; gap: 16px; }
    .book-stage { width: 100%; max-width: 620px; justify-self: center; }
    .book-title { font-size: 34px; max-width: 26ch; }
    .facts { display: flex; flex-wrap: wrap; justify-content: center; gap: 36px 28px; margin-block: 40px; }
    .fact { flex: 0 0 calc(33.3333% - 28px); }
    .contact-grid { grid-template-columns: 1fr; gap: 28px; }
    .contact h2 { max-width: none; }
  }
  @media (max-width: 600px) {
    .spread-title { font-size: clamp(28px, 8.5vw, 38px); line-height: 1.02; margin-bottom: 24px; }
    .spread-grid { gap: 32px; }
    .spread-copy > p { font-size: 17px; }
    .spread-link { font-size: 17px; min-height: 56px; margin-top: 24px; }
    .spread-link .arrow-orb { width: 56px; height: 56px; }
    .spread-link .arrow { width: 28px; height: 28px; }
    .campaign-pair { gap: 12px; }
    .book-stage { padding: 10px; }
    .book-visual { padding: 12px; }
    .book-title { font-size: clamp(26px, 7.5vw, 32px); margin-top: 24px; }
    .book-date { width: 94px; height: 94px; right: -12px; bottom: -10px; }
    .book-date strong { font-size: 28px; }
    .about h2 { font-size: clamp(28px, 8.5vw, 38px); }
    .about-intro { gap: 24px; }
    .about-intro p { font-size: 17px; max-width: 37ch; }
    .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 20px; margin-block: 36px; }
    .fact { padding: 0; }
    .fact:last-child { grid-column: 1 / -1; max-width: 30ch; justify-self: center; }
    .fact p { max-width: 24ch; }
    .fact-icon { width: 32px; height: 32px; padding: 16px; margin-bottom: 16px; }
    .about-outro { font-size: 17px; max-width: 37ch; }
    .contact { padding-block: 56px; }
    .contact h2 { font-size: clamp(38px, 11vw, 56px); }
    .contact p { font-size: 17px; }
    .button { width: 100%; }
  }
  @media (max-width: 360px) { .facts { gap: 32px 16px; } }
  @media (prefers-reduced-motion: reduce) {
    &, & *, & *::before, & *::after { animation: none !important; transition: none !important; }
  }
`;

const factIcons = [
  <path key="pencil" d="m16 3 5 5M3 21l3-8L16 3a2 2 0 0 1 3 0l2 2a2 2 0 0 1 0 3L11 18l-8 3Zm3-8 5 5M3 21l4-4" />,
  <g key="business"><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a23 23 0 0 0 18 0M10 13h4" /></g>,
  <path key="spark" d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z" />,
  <path key="dog" d="M4 9 2 6l1-3 5 2M16 5l5-2 1 3-2 3M4 9v6a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6V9a8 8 0 0 0-16 0ZM9 11h.01M15 11h.01M10 16h4l-2 2-2-2Z" />,
  <g key="film"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 3v18M17 3v18M3 8h4M3 16h4M17 8h4M17 16h4M7 12h10" /></g>,
];

const campaignLabels = [
  "View Harley-Davidson campaign",
  "View another Harley-Davidson campaign execution",
  "View Converse campaign",
  "View another Converse campaign execution",
];
const campaignAlts = [
  "Harley-Davidson 2024 digital campaign advertisement",
  "Harley-Davidson Pan America campaign advertisement",
  "Converse social campaign with original copy",
  "Converse Chuck 70 social campaign with original copy",
];

function SplitTitle({ title }: { title: string }) {
  const split = title.lastIndexOf(" ");
  return <><span>{title.slice(0, split)}</span>{" "}<span>{title.slice(split + 1)}</span></>;
}

function SectionLink({ href, label }: { href: string; label: string }) {
  return <Link className="spread-link" href={href}><span className="link-label">{label}</span><span className="arrow-orb" aria-hidden="true"><HomeArrow className="arrow" /></span></Link>;
}

export function HomeSections() {
  const campaigns = homePreviews.flatMap((project) => project.images.map((image) => ({ ...image, href: project.href })));

  return (
    <Sections>
      <section className="portfolio spread" id="portfolio" aria-labelledby="portfolio-title">
        <HomeContainer className="spread-grid portfolio-grid">
          <div className="spread-copy">
            <h2 className="spread-title" id="portfolio-title"><SplitTitle title={homeCopy.portfolio.title} /></h2>
            <p>{homeCopy.portfolio.description}</p>
            <SectionLink href={homeCopy.portfolio.href} label={homeCopy.portfolio.label} />
          </div>
          <div className="campaign-pair">
            {campaigns.map((image, index) => (
              <Link key={image.src} href={image.href} aria-label={campaignLabels[index]}>
                <Image data-project={index === 0 ? "harley" : undefined} src={image.src} alt={campaignAlts[index]} width={image.width} height={image.height} sizes="(max-width: 900px) min(calc((100vw - 64px) / 2), 312px), (max-width: 1548px) 22vw, 326px" />
              </Link>
            ))}
          </div>
        </HomeContainer>
      </section>

      <section className="books spread" id="books" aria-labelledby="books-title">
        <HomeContainer className="spread-grid books-grid">
          <div className="book-stage"><figure className="book-visual">
            <Image src={bookContent.archivalImage} alt={bookContent.archivalImageAlt} width={820} height={580} sizes="(max-width: 900px) min(calc(100vw - 96px), 564px), (max-width: 1548px) 39vw, 606px" />
            <span className="book-date"><span>{bookContent.dateBadge[0]}</span><strong>{bookContent.dateBadge[1]}</strong></span>
          </figure></div>
          <div className="spread-copy books-copy">
            <h2 className="spread-title" id="books-title"><SplitTitle title={homeCopy.books.title} /></h2>
            <p>{homeCopy.books.description}</p>
            <h3 className="book-title">{bookContent.title}</h3>
            <p className="publisher">Published by <a href={bookContent.publisherUrl} target="_blank" rel="noopener noreferrer">{bookContent.publisher}</a></p>
            <SectionLink href={homeCopy.books.href} label={homeCopy.books.label} />
          </div>
        </HomeContainer>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <HomeContainer>
          <div className="about-intro"><h2 id="about-title">{homeCopy.about.title}</h2><p>{homeCopy.about.description}</p></div>
          <ul className="facts" aria-label="Five fun facts about Anastasia">
            {homeCopy.about.facts.map((fact, index) => <li className="fact" key={fact}><svg className="fact-icon" viewBox="0 0 24 24" aria-hidden="true">{factIcons[index]}</svg><p>{fact}</p></li>)}
          </ul>
          <p className="about-outro">{homeCopy.about.outro}</p>
        </HomeContainer>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <HomeContainer className="contact-grid">
          <h2 id="contact-title">{homeCopy.contact.title}</h2>
          <div><p>{homeCopy.contact.description}</p><Link className="button" href={homeCopy.contact.href}><span>{homeCopy.contact.label}</span><HomeArrow className="arrow" /></Link></div>
        </HomeContainer>
      </section>
    </Sections>
  );
}
