import Image from "next/image";
import { bookContent } from "@/content/books";
import { BooksContainer, BookInquiryLink } from "@/modules/books/shared";

export function BookFeature() {
  return (
    <section className="book-launch" aria-labelledby="book-title">
      <BooksContainer className="launch-layout">
        <div
          className="book-gallery"
          role="group"
          aria-label="Historical photographs related to the book"
        >
          <figure className="archive-photo ferris-photo">
            <div className="archive-image">
              <Image
                src={bookContent.archivalImage}
                alt={bookContent.archivalImageAlt}
                fill
                sizes="(max-width: 600px) 80vw, (max-width: 900px) 521px, 42vw"
                style={{ objectFit: "cover", objectPosition: "55% 45%" }}
              />
            </div>
            <span className="book-date" aria-label={bookContent.publicationDate}>
              <span>{bookContent.dateBadge[0]}</span>
              <strong>{bookContent.dateBadge[1]}</strong>
            </span>
          </figure>
          <figure className="archive-photo bertha-photo">
            <div className="archive-image">
              <Image
                src="/assets/books/bertha-palmer.webp"
                alt="Historical portrait of Bertha Palmer, published by 1896"
                fill
                sizes="(max-width: 600px) 30vw, (max-width: 900px) 193px, 16vw"
                style={{ objectFit: "cover", objectPosition: "50% 32%" }}
              />
            </div>
          </figure>
          <figure className="archive-photo fair-photo">
            <div className="archive-image">
              <Image
                src="/assets/books/worlds-fair.webp"
                alt="The Court of Honor at the 1893 World's Columbian Exposition, photographed by E. R. Walker"
                fill
                sizes="(max-width: 600px) 57vw, (max-width: 900px) 397px, 32vw"
                style={{ objectFit: "cover", objectPosition: "50% 66%" }}
              />
            </div>
          </figure>
        </div>
        <div className="launch-copy">
          <h2 id="book-title">
            <span>BERTHA &amp;</span>{" "}
            <span>THE VERY FIRST</span>{" "}
            <span>BROWNIE</span>
          </h2>
          <p className="book-summary">{bookContent.summary}</p>
          <p className="publisher">
            Published by{" "}
            <a href={bookContent.publisherUrl} target="_blank" rel="noopener noreferrer">
              {bookContent.publisher}
            </a>
          </p>
          <BookInquiryLink />
        </div>
      </BooksContainer>
    </section>
  );
}
