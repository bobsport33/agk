import type { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
}
const StyledButton = styled.button<{ variant: "primary" | "secondary" | "danger"; fullWidth: boolean }>`
  --button-bg: ${({ variant }) => variant === "secondary" ? "var(--background-secondary)" : variant === "danger" ? "var(--status-error)" : "var(--background-primary)"};
  --button-hover: ${({ variant }) => variant === "secondary" ? "var(--background-secondary-hover)" : variant === "danger" ? "var(--status-error)" : "var(--background-primary-hover)"};
  --button-active: ${({ variant }) => variant === "secondary" ? "var(--background-secondary-active)" : "var(--background-primary-active)"};
  --button-disabled: ${({ variant }) => variant === "secondary" ? "var(--background-secondary-disabled)" : "var(--background-primary-disabled)"};
  display: inline-flex; align-items: center; justify-content: space-between; gap: var(--space-5);
  min-height: var(--control-height); padding: var(--control-padding-block) var(--control-padding-inline);
  width: ${({ fullWidth }) => fullWidth ? "100%" : "auto"};
  border: 1px solid currentColor; border-radius: var(--radius-control);
  background: var(--button-bg); color: ${({ variant }) => variant === "danger" ? "var(--color-paper)" : variant === "secondary" ? "var(--on-secondary)" : "var(--on-primary)"};
  font: inherit; transition: background var(--duration-base), transform var(--duration-base);
  &:not(:disabled):hover { background: var(--button-hover); }
  &:not(:disabled):active { background: var(--button-active); transform: translateY(1px); }
  &:disabled { background: var(--button-disabled); color: var(--on-disabled); cursor: not-allowed; }
  @media (max-width: 640px) { width: 100%; }
`;
export const Button = ({variant = "primary", fullWidth = false, type = "button", ...props}: ButtonProps) => <StyledButton variant={variant} fullWidth={fullWidth} type={type} {...props} />;
