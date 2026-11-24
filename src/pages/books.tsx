import Head from "next/head";
import Image from "next/image";
import { BookFeature } from "@/modules/playbook/BookFeature";
import { BooksSurface } from "@/modules/books/BooksSurface";
import { BookInquiryLink, BooksContainer, BooksSpark } from "@/modules/books/shared";
import { booksPageCopy } from "@/content/books";

export default function Books() {
  return <BooksSurface>
    <Head><title>Books | Anastasia Guletsky Kelly</title></Head>
    <section className="books-hero" aria-labelledby="books-title">
      <BooksContainer className="hero-layout">
        <div className="hero-copy">
          <h1 id="books-title"><span>{booksPageCopy.headline[0]}</span>{" "}<span>{booksPageCopy.headline[1]}</span></h1>
          <p>{booksPageCopy.intro}</p>
        </div>
        <div className="hero-collage" role="group" aria-label="Book and Chicago photographs">
          <div className="plate" aria-hidden="true" />
          <Image className="hero-portrait" src="/assets/books/open-book.jpg" alt="An open book with its pages fanned out" width={1400} height={933} sizes="(max-width: 600px) 166px, (max-width: 900px) 23vw, 247px" priority />
          <Image className="hero-city" src="/assets/GettyImages-474505518_edited.webp" alt="Chicago architecture along the river" width={1284} height={846} sizes="(max-width: 600px) 157px, (max-width: 900px) 22vw, 225px" priority />
          <BooksSpark />
        </div>
      </BooksContainer>
    </section>
    <BookFeature />
    <section className="writing" aria-labelledby="writing-title">
      <BooksContainer className="writing-layout">
        <h2 id="writing-title">{booksPageCopy.writingTitle}</h2><p>{booksPageCopy.writing}</p>
      </BooksContainer>
    </section>
    <section className="more-books" aria-labelledby="more-title">
      <BooksContainer className="more-layout">
        <div className="more-heading">
          <h2 id="more-title"><span>{booksPageCopy.moreTitle[0]}</span>{" "}<span>{booksPageCopy.moreTitle[1]}</span></h2>
          <p>{booksPageCopy.moreIntro}</p>
        </div>
        <div>
          <ul className="future-stories">{booksPageCopy.futureStories.map(story => <li key={story}><BooksSpark /><span>{story}</span></li>)}</ul>
          <BookInquiryLink />
        </div>
      </BooksContainer>
    </section>
  </BooksSurface>;
}
