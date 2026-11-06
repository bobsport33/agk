import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import { FoundFablePanel } from "@/modules/playbook/FoundFablePanel";
import { BookFeature } from "@/modules/playbook/BookFeature";
import { homePreviews, homeRole } from "@/content/site";

const Hero = styled.section`
  position: relative;
  background: var(--surface-hero);
  padding-block: var(--space-4) var(--space-7);
  overflow: hidden;
`;
const Role = styled.div`
  display: flex; justify-content: flex-end;
  padding: var(--space-2) 0 var(--space-3); font-size: var(--font-size-small); letter-spacing: .04em;
`;
const HeroGrid = styled.div`
  display: grid; grid-template-columns: 1.2fr .8fr; align-items: center; gap: var(--layout-gap);
  min-height: 560px; padding-block: var(--space-5);
  @media(max-width:1024px){grid-template-columns:1fr 1fr;gap:var(--space-5);min-height:400px}
  @media(max-width:640px){grid-template-columns:1fr;gap:var(--space-5);padding-top:var(--space-6)}
`;
const Copy = styled.div`
  position: relative; z-index: var(--layer-art-front);
  h1{font-family:var(--font-display);font-weight:var(--weight-display);font-size:var(--font-size-home-hero);line-height:var(--leading-display);letter-spacing:var(--tracking-display)}
  em{display:inline-block;background:var(--color-paper);font-style:normal;padding:0 .12em .04em}
  nav{display:flex;gap:var(--space-5);margin-top:var(--space-5)}
  .text-link{color:var(--text-heading);text-underline-offset:.28em}
  @media(max-width:640px){nav{margin-top:var(--space-4)}}
`;
const Art = styled.div`
  position:relative; height:490px; max-width:640px; width:100%; justify-self:end; isolation:isolate;
  .plate{position:absolute;z-index:0;background:var(--color-teal);inset:10px -10px 60px 18%;transform:rotate(-7deg)}
  .portrait{position:absolute;z-index:2;width:66%;height:75%;right:8%;top:35px;object-fit:cover;object-position:50% 24%;border:var(--frame-portrait) solid var(--color-paper);transform:rotate(7deg);box-shadow:var(--shadow-plate)}
  .city{position:absolute;z-index:3;width:60%;height:auto;left:-15%;bottom:0;border:var(--frame-portrait) solid var(--color-paper);transform:rotate(-9deg);box-shadow:var(--shadow-plate)}
  .star{position:absolute;z-index:4;right:-1%;bottom:0;width:120px;height:120px;color:var(--color-ink)}
  @media(max-width:1024px){height:400px;max-width:560px;.portrait{border-width:var(--space-2)}.city{border-width:var(--space-2)}.star{width:80px;height:80px}}
  @media(max-width:640px){height:320px;max-width:430px;justify-self:center;.plate{inset:0 10px 30px 25%}.portrait{right:9%;top:14px;width:58%;height:260px}.city{left:0;width:51%;height:160px;object-fit:cover}.star{right:0;bottom:12px}}
`;
const Work = styled.section`
  padding-block: var(--section-space);
  h2{font-size:var(--font-size-h2);font-weight:var(--weight-heading);line-height:var(--leading-heading);letter-spacing:var(--tracking-display);margin-bottom:var(--space-7)}


`;
const Row = styled.article`
  display:grid;grid-template-columns:1fr 1.15fr;align-items:center;gap:var(--layout-gap);padding:var(--space-7) 0;border-top:var(--border-width) solid var(--border-subtle); &:first-of-type{border-top:0}
  &:nth-of-type(even){grid-template-columns:1.15fr 1fr}
  &:nth-of-type(even) .details{order:2}&:nth-of-type(even) .imgs{order:1}
  h3{margin-bottom:var(--space-3)}.details{max-width:var(--measure-preview)}.detail-copy{margin-block:var(--space-3)}
  .imgs{display:flex;align-items:center;gap:var(--space-3);justify-content:center}
  .imgs img{width:min(calc(50% - 9px),280px);height:auto;object-fit:contain;box-shadow:var(--shadow-art)}
  .imgs img:nth-of-type(2){margin-top:var(--space-7)}
  @media(max-width:1024px){grid-template-columns:1fr;gap:var(--space-5);padding-block:var(--space-6);&:nth-of-type(even){grid-template-columns:1fr}&:nth-of-type(even) .details,&:nth-of-type(even) .imgs{order:initial}.imgs img:nth-of-type(2){margin-top:var(--space-5)}}
  @media(max-width:640px){grid-template-columns:1fr!important;gap:var(--space-5);padding-block:var(--space-5);&:nth-of-type(even) .details,&:nth-of-type(even) .imgs{order:initial}.imgs img{width:min(calc(50% - 9px),280px)}}
`;
const ArrowLink=styled(Link)`display:inline-flex;align-items:center;gap:var(--space-3);min-height:var(--tap-target);color:var(--text-primary);text-decoration:underline;text-underline-offset:.3em;font-weight:var(--weight-medium);`;
export default function Home(){return <><Head><title>Anastasia Guletsky Kelly | Creative Director &amp; Author</title></Head><Hero><div className="container"><Role>{homeRole}</Role><HeroGrid><Copy><h1 className="type-home-hero">some of my<br/><em>many</em><br/>voices:</h1><nav><Link className="text-link" href="/creative-work">Creative work <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/books">Books <span aria-hidden="true">↗</span></Link></nav></Copy><Art aria-label="Portrait and City of Chicago campaign"><div className="plate"/><Image className="portrait" src="/assets/playbook/portrait.png" alt="Anastasia Guletsky Kelly" width={718} height={983} priority/><Image className="city" src="/assets/playbook/hero-city.webp" alt="City of Chicago campaign" width={1000} height={1000} priority/><svg className="star" viewBox="0 0 100 100" aria-hidden="true"><path d="M42 0h16v31L80 9l11 11-22 22h31v16H69l22 22-11 11-22-22v31H42V69L20 91 9 80l22-22H0V42h31L9 20 20 9l22 22Z" fill="currentColor"/></svg></Art></HeroGrid></div></Hero><div className="container"><Work><h2>Creative work.</h2>{homePreviews.map((preview) => <Row key={preview.name}><div className="details"><h3>{preview.name}</h3>{"eyebrow" in preview && <p>{preview.eyebrow}</p>}<p className="detail-copy">{preview.description}</p><ArrowLink className="text-link" href={preview.href}>{preview.linkLabel} <span aria-hidden="true">↗</span></ArrowLink></div><div className="imgs">{preview.images.map((image) => <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 640px) 45vw, 280px"/>)}</div></Row>)}<ArrowLink className="text-link" href="/creative-work">View all creative work <span aria-hidden="true">↗</span></ArrowLink></Work></div><FoundFablePanel/><BookFeature/></>}
