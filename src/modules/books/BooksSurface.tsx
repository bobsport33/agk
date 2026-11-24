import styled from "@emotion/styled";

export const BooksSurface = styled.div`
  --books-gutter: clamp(24px, 4vw, 64px);
  --gutter: var(--books-gutter);
  --split-gap: clamp(40px, 5vw, 80px);
  --coral: var(--color-coral); --teal: var(--color-teal); --paper: var(--color-paper);
  --ink: var(--color-ink); --fable: var(--color-fable);
  --ease: cubic-bezier(.2, .8, .2, 1);
  font: 400 1rem/1.6 var(--font-body); color: var(--color-ink);
  h1,h2,h3,p,figure { margin: 0; }
  a { color: inherit; text-decoration-thickness: 1px; }
  a:focus-visible { outline: 3px solid currentColor; outline-offset: 6px; }
  a { touch-action: manipulation; }
  .arrow { display: block; flex-shrink: 0; transition: transform 240ms var(--ease); }
  img { display: block; max-width: 100%; }

.books-hero{background:var(--coral);overflow:hidden}
.hero-layout{display:grid;grid-template-columns:1.2fr .8fr;gap:var(--split-gap);align-items:center;padding-block:44px}
.hero-copy{min-width:0}
.books-hero h1{font-size:clamp(48px,4.7vw,68px);font-weight:800;line-height:1.01}
.books-hero h1 span{display:block}
.hero-copy p{max-width:60ch;margin-top:24px;font-size:18px;line-height:1.6}
.hero-collage{position:relative;isolation:isolate;width:min(100%,440px);height:310px;justify-self:end}
.hero-collage .plate{position:absolute;inset:12px 20px 20px 30%;background:var(--teal);transform:rotate(-7deg)}
.hero-portrait{position:absolute;top:16px;right:8%;width:56%;height:84%;object-fit:cover;object-position:32% 50%;border:9px solid var(--paper);transform:rotate(6deg);box-shadow:0 12px 24px #1a1a1a24}
.hero-city{position:absolute;left:2%;bottom:8px;width:51%;height:49%;object-fit:cover;border:9px solid var(--paper);transform:rotate(-7deg);box-shadow:0 12px 24px #1a1a1a24}
.hero-collage .asterisk{position:absolute;right:0;bottom:2px;width:56px;height:56px;fill:var(--ink)}
.book-launch{background:var(--teal);padding-block:80px}
.launch-layout{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--split-gap);align-items:center}
.book-gallery{position:relative;isolation:isolate;width:100%;aspect-ratio:1.07;min-width:0}
.archive-photo{position:absolute;background:var(--paper);padding:12px;box-shadow:0 12px 28px #1a1a1a26}
.archive-image{position:relative;width:100%;height:100%}
.archive-photo img{width:100%;height:100%;object-fit:cover}
.ferris-photo{left:4%;top:3%;width:84%;height:61%;transform:rotate(-3deg);z-index:1}
.ferris-photo img{object-position:55% 45%}
.bertha-photo{left:3%;bottom:2%;width:31%;height:48%;transform:rotate(5deg);z-index:3}
.bertha-photo img{object-position:50% 32%}
.fair-photo{right:2%;bottom:5%;width:64%;height:40%;transform:rotate(-2deg);z-index:2}
.fair-photo img{object-position:50% 66%;filter:grayscale(1)}
.book-date{position:absolute;right:-20px;top:-24px;display:grid;place-content:center;gap:4px;width:108px;height:108px;border-radius:50%;background:var(--coral);text-align:center;line-height:1.1;transform:rotate(3deg);z-index:4}
.book-date span{font-size:14px;font-weight:500}
.book-date strong{font:800 32px/1.1 var(--font-display);letter-spacing:-.03em}
.launch-copy{min-width:0}
.launch-copy h2{font-size:clamp(40px,4.1vw,64px);font-weight:800;line-height:1.04}
.launch-copy h2 span{display:block}
.book-summary{margin-top:28px;max-width:48ch;font-size:18px;line-height:1.65}
.publisher{font-size:16px;margin-top:20px}
.publisher a:hover{color:var(--fable)}
.inquiry-link{display:inline-flex;align-items:center;gap:20px;max-width:100%;min-height:64px;margin-top:28px;font-size:17px;font-weight:500;text-decoration:none}
.inquiry-link>span:first-of-type{text-decoration:underline;text-underline-offset:.3em}
.arrow-orb{display:grid;place-items:center;flex-shrink:0;width:64px;height:64px;border-radius:50%;background:var(--paper);color:var(--ink);transition:background 240ms var(--ease),color 240ms var(--ease),transform 240ms var(--ease)}
.arrow-orb .arrow{width:30px;height:30px}
.inquiry-link:hover .arrow-orb,.inquiry-link:focus-visible .arrow-orb{background:var(--ink);color:var(--paper)}
.inquiry-link:hover .arrow,.inquiry-link:focus-visible .arrow{transform:translate(3px,-3px)}
.inquiry-link:active .arrow-orb{transform:scale(.96)}
.writing{padding-block:56px;background:#f0e7dc}
.writing-layout{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--split-gap);align-items:start}
.writing h2{font-size:clamp(32px,3vw,44px);font-weight:600;line-height:1.08}
.writing p{max-width:58ch;font-size:18px;line-height:1.65}
.more-books{--text-heading:var(--paper);padding-block:72px;background:var(--ink);color:var(--paper)}
.more-layout{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:var(--split-gap);align-items:start}
.more-heading h2{font-size:clamp(44px,4.7vw,68px);font-weight:800;line-height:1.03;max-width:14ch}
.more-heading h2 span{display:block}
.more-heading p{margin-top:24px;font-size:24px;font-weight:500}
.future-stories{list-style:none;margin:0;padding:0;display:grid;gap:24px}
.future-stories li{display:grid;grid-template-columns:18px minmax(0,1fr);gap:20px;align-items:start;max-width:47ch;font-size:20px;line-height:1.5}
.future-stories svg{width:14px;height:14px;fill:var(--coral);margin-top:8px}
.more-books .inquiry-link{margin-left:38px;margin-top:28px}
.more-books .inquiry-link:hover .arrow-orb,.more-books .inquiry-link:focus-visible .arrow-orb{background:var(--coral);color:var(--ink)}
@media(max-width:1100px){
 .hero-layout{grid-template-columns:1.15fr .85fr;gap:40px;padding-block:40px}
 .books-hero h1{font-size:50px}
 .hero-copy p{font-size:17px}
 .hero-collage{height:270px}
 .hero-portrait,.hero-city{border-width:8px}
 .book-launch{padding-block:64px}
 .launch-layout{gap:40px}
 .launch-copy h2{font-size:42px}
 .book-summary{font-size:17px;margin-top:24px}
 .book-gallery{aspect-ratio:.98}
 .book-date{width:92px;height:92px;right:-16px;top:-20px}
 .book-date strong{font-size:28px}
 .archive-photo{padding:10px}
 .inquiry-link{gap:16px;font-size:16px}
 .arrow-orb{width:56px;height:56px}
 .future-stories li{font-size:18px}
}
@media(max-width:900px){
 .hero-layout{grid-template-columns:1.2fr .8fr;gap:24px}
 .books-hero h1{font-size:clamp(36px,5.5vw,48px)}
 .hero-collage{height:240px}
 .hero-portrait{right:8%;width:65%}
 .hero-city{left:0;width:62%;height:44%}
 .hero-collage .asterisk{width:40px;height:40px}
 .launch-layout{grid-template-columns:1fr;gap:40px}
 .launch-copy{grid-row:1}
 .launch-copy h2{font-size:clamp(42px,6vw,56px)}
 .launch-copy h2 span{display:inline}
 .launch-copy h2 span+span::before{content:' '}
 .book-summary{max-width:65ch}
 .book-gallery{max-width:620px;justify-self:center;aspect-ratio:1.12}
 .writing-layout{grid-template-columns:1fr;gap:24px}
 .writing h2{font-size:38px}
 .writing p{max-width:68ch}
 .more-layout{grid-template-columns:1fr;gap:36px}
 .more-heading h2{max-width:16ch;font-size:56px}
 .more-heading h2 span{display:inline}
 .more-heading h2 span+span::before{content:' '}
 .more-heading p{font-size:22px;margin-top:20px}
 .future-stories li{max-width:60ch;font-size:20px}
}
@media(max-width:600px){
 .hero-layout{grid-template-columns:1fr;padding-block:32px;gap:24px}
 .books-hero h1{font-size:clamp(31px,8.5vw,44px);line-height:1.04}
 .hero-copy p{font-size:16px;margin-top:20px}
 .hero-collage{width:min(100%,320px);height:220px;justify-self:center}
 .hero-portrait{width:52%;right:10%;border-width:7px}
 .hero-city{width:49%;left:3%;height:49%;border-width:7px}
 .hero-collage .plate{inset:12px 24px 16px 32%}
 .hero-collage .asterisk{right:6px;width:44px;height:44px}
 .book-launch{padding-block:48px}
 .launch-layout{gap:32px}
 .launch-copy h2{font-size:clamp(32px,9vw,42px);line-height:1.07}
 .book-summary{font-size:17px;line-height:1.6;margin-top:24px}
 .publisher{font-size:15px;margin-top:20px}
 .inquiry-link{gap:16px;margin-top:24px;font-size:16px;line-height:1.4;min-height:56px}
 .inquiry-link>span:first-of-type{max-width:25ch}
 .arrow-orb{width:52px;height:52px}
 .arrow-orb .arrow{width:26px;height:26px}
 .book-gallery{aspect-ratio:1.02;max-width:440px}
 .archive-photo{padding:8px}
 .ferris-photo{left:3%;width:86%;height:60%}
 .bertha-photo{left:3%;width:33%;height:47%}
 .fair-photo{right:2%;width:62%;height:39%;bottom:5%}
 .book-date{width:80px;height:80px;top:-18px;right:-16px}
 .book-date span{font-size:12px}.book-date strong{font-size:26px}
 .writing{padding-block:40px}.writing-layout{gap:20px}
 .writing h2{font-size:32px}.writing p{font-size:17px;line-height:1.6}
 .more-books{padding-block:48px}.more-layout{gap:32px}
 .more-heading h2{font-size:clamp(36px,10.5vw,46px);max-width:14ch}
 .more-heading p{font-size:21px;margin-top:20px}
 .future-stories{gap:24px}.future-stories li{font-size:18px;gap:16px;grid-template-columns:14px minmax(0,1fr)}
 .future-stories svg{width:12px;height:12px;margin-top:7px}
 .more-books .inquiry-link{margin-left:30px}
}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}html{scroll-behavior:auto}}

`;
