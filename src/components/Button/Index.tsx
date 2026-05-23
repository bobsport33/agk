import styled from "@emotion/styled";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
	variant?: ButtonVariant;
	fullWidth?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
	padding: 10px 16px;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	border: none;
	transition: all 0.2s ease;

	width: ${(props) => (props.fullWidth ? "100%" : "auto")};

	background: ${(props) => {
		switch (props.variant) {
			case "secondary":
				return "#64748b";
			case "danger":
				return "#ef4444";
			default:
				return "#4f46e5";
		}
	}};

	color: white;

	&:hover {
		opacity: 0.9;
		transform: translateY(-1px);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none;
	}
`;

export const Button = ({
	variant = "primary",
	fullWidth = false,
	disabled = false,
	onClick,
	children
}: ButtonProps) => {
	return (
		<StyledButton
			variant={variant}
			fullWidth={fullWidth}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</StyledButton>
	);
};
