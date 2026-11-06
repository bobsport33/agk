import type { CSSProperties, MouseEventHandler } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
interface LinkProps { text: string; href: string; target?: string; color?: string; onClick?: MouseEventHandler<HTMLAnchorElement>; }
export default function Link({ text, href, target, color, onClick }: LinkProps) {
  const { pathname } = useRouter();
  const active = pathname === href || (href === "/creative-work" && pathname.startsWith("/creative-work/"));
  const external = /^https?:/.test(href);
  return <NextLink className="text-link" href={href} target={target || (external ? "_blank" : undefined)} rel={external ? "noopener noreferrer" : undefined} aria-current={active ? "page" : undefined} style={color ? { "--text-primary": color } as CSSProperties : undefined} onClick={onClick}>{text}</NextLink>;
}
