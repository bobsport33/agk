import styled from "@emotion/styled";
import Link from "next/link";
import { HomeArrow } from "@/modules/home/shared";
import { bookContent } from "@/content/books";

export const BooksContainer = styled.div`
  width: min(calc(100% - var(--books-gutter) * 2), 1420px);
  margin-inline: auto;
`;

export function BookInquiryLink() {
  return <Link className="inquiry-link" href="/contact?topic=books">
    <span>{bookContent.inquiryLabel}</span>
    <span className="arrow-orb"><HomeArrow /></span>
  </Link>;
}

export function BooksSpark() {
  return <svg className="asterisk" viewBox="0 0 100 100" aria-hidden="true">
    <path d="M42 0h16v31L80 9l11 11-22 22h31v16H69l22 22-11 11-22-22v31H42V69L20 91 9 80l22-22H0V42h31L9 20 20 9l22 22Z" />
  </svg>;
}
