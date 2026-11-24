import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import { PortfolioArrow } from "@/modules/portfolio/shared";
import type { PortfolioProject } from "@/data/projects";

const Card = styled(Link)`
  position: relative; display: block; width: 100%; height: 100%; min-width: 0; min-height: 0;
  padding: 8px; border: 1px solid var(--border-subtle); border-radius: 4px;
  background: var(--color-paper); text-decoration: none;
  box-shadow: 0 3px 12px #1a1a1a14;
  transition: transform 240ms var(--portfolio-ease), box-shadow 240ms var(--portfolio-ease);
  .project-visual { position: relative; width: 100%; height: 100%; overflow: hidden; border-radius: 4px; background: var(--color-ink); }
  .project-image { object-fit: cover; transition: transform 450ms var(--portfolio-ease); }
  .project-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 24px; background: var(--color-soft); color: var(--color-ink); }
  .project-placeholder strong { font: 600 clamp(28px, 2.6vw, 36px)/1.1 var(--font-display); letter-spacing: -.03em; text-align: center; text-wrap: balance; }
  .project-placeholder small { margin-top: 12px; font-size: 13px; }
  .project-rest { position: absolute; inset: 0; display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; padding: 20px; color: var(--color-paper); background: linear-gradient(0deg, #1a1a1af2, #1a1a1a80 38%, transparent 72%); transition: opacity 220ms var(--portfolio-ease); }
  .project-rest strong { font-size: 16px; font-weight: 500; line-height: 1.3; }
  .project-rest .arrow { width: 22px; height: 22px; }
  .project-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: flex-end; gap: 14px; padding: 24px; background: #1a1a1af2; color: var(--color-paper); clip-path: inset(100% 0 0); transition: clip-path 330ms var(--portfolio-ease); }
  .project-overlay h2 { color: inherit; font-size: clamp(22px, 2vw, 28px); font-weight: 600; line-height: 1.02; letter-spacing: -.03em; }
  .project-overlay p { max-width: 48ch; font-size: 16px; line-height: 1.45; }
  .project-action { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 2px; font-size: 14px; font-weight: 500; }
  .project-action .arrow { width: 24px; height: 24px; color: var(--color-coral); }
  .project-image-note { font-size: 13px; line-height: 1.4; }
  &[data-image-pending=true] .project-rest { background: none; color: var(--color-ink); justify-content: flex-end; }
  &[data-image-pending=true] .project-rest strong { display: none; }
  &[data-image-pending=true] .project-overlay { background: var(--color-soft); color: var(--color-ink); }
  &[data-image-pending=true] .project-action .arrow { color: inherit; }
  &:hover, &:focus-visible { box-shadow: 0 12px 28px #1a1a1a26; transform: translateY(-2px); }
  &:hover .project-overlay, &:focus-visible .project-overlay { clip-path: inset(0); }
  &:hover .project-rest, &:focus-visible .project-rest { opacity: 0; }
  &:hover .project-image, &:focus-visible .project-image { transform: scale(1.025); }
  &:active { transform: translateY(0); }
  @media (min-width: 1025px) and (max-width: 1350px) {
    .project-rest, .project-overlay { padding: 18px; }
    .project-overlay { gap: 10px; }
    .project-overlay h2 { font-size: 22px; }
    .project-overlay p { font-size: 15px; line-height: 1.4; }
  }
  @media (min-width: 1025px) {
    &[data-compact=true] .project-overlay { padding: 18px; gap: 10px; }
    &[data-compact=true] .project-overlay h2 { font-size: 22px; }
    &[data-compact=true] .project-overlay p { font-size: 15px; line-height: 1.4; }
  }
  @media (max-width: 1024px) {
    .project-overlay h2 { font-size: 28px; }
    .project-overlay p { font-size: 16px; line-height: 1.5; }
  }
  @media (max-width: 640px) {
    .project-rest { display: none; }
    .project-overlay { clip-path: none; background: linear-gradient(0deg, #1a1a1af2 0%, #1a1a1ad9 35%, #1a1a1a40 75%, transparent); gap: 12px; }
    .project-overlay h2 { font-size: 26px; }
    .project-overlay p { font-size: 15px; line-height: 1.4; }
    .project-overlay h2, .project-overlay p { text-wrap: pretty; }
    .project-action { margin-top: 4px; }
  }
  @media (max-width: 360px) {
    /* Long titles reach the light upper artwork in the smallest square tiles. */
    .project-overlay { background: linear-gradient(0deg, #1a1a1af2 0%, #1a1a1ad9 45%, #1a1a1ab3 100%); }
  }
  @media (hover: none) and (min-width: 641px) {
    .project-rest { display: none; }
    .project-overlay { clip-path: none; background: linear-gradient(0deg, #1a1a1af2 0%, #1a1a1ad9 35%, #1a1a1a40 75%, transparent); }
  }
`;

export default function DisplayCard({ project, priority = false }: { project: PortfolioProject; priority?: boolean }) {
  const titleId = `project-title-${project.id}`;
  const descriptionId = `project-description-${project.id}`;
  const imageNoteId = `project-image-note-${project.id}`;
  return <Card className="project" data-project={project.id} data-compact={project.compact ? "true" : undefined} data-image-pending={!project.imageUrl ? "true" : undefined} href={project.href} target={project.external ? "_blank" : undefined} rel={project.external ? "noopener noreferrer" : undefined} aria-labelledby={titleId} aria-describedby={project.imageUrl ? descriptionId : `${descriptionId} ${imageNoteId}`}>
    <div className="project-visual">
      {project.imageUrl ? <Image className="project-image" src={project.imageUrl} alt={project.alt} fill priority={priority} style={{ objectFit: project.objectFit ?? "cover", objectPosition: project.objectPosition ?? "center" }} sizes={`(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) ${project.id === "recent-web-projects" ? 92 : 46}vw, (max-width: 1548px) 31vw, 460px`} /> : <div className="project-placeholder" aria-hidden="true"><strong>{project.client}</strong><small>Image coming soon</small></div>}
      <div className="project-rest" aria-hidden="true"><strong>{project.client}</strong><PortfolioArrow /></div>
      <div className="project-overlay"><h2 id={titleId}>{project.client}</h2><p id={descriptionId}>{project.description}</p>{!project.imageUrl && <small className="project-image-note" id={imageNoteId}>Image coming soon</small>}<span className="project-action">{project.actionLabel ?? "View project"}<PortfolioArrow /></span></div>
    </div>
  </Card>;
}
