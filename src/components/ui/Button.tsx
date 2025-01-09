import { FC, MouseEventHandler } from "react";
import ButtonSvg from "../../assets/svg/ButtonSvg";

interface ButtonProps {
	className: string;
	children: React.ReactNode;
	href?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	px?: string;
	isWhite?: boolean;
}

const Button: FC<ButtonProps> = ({
	className,
	href,
	onClick,
	children,
	px,
	isWhite = false,
}) => {
	const classes = `button relative inline-flex items-center 
	justify-center h-11 transition-colors hover:text-color-1 
	${px || "px-6"} ${isWhite ? "text-n-8" : "text-n-1"}
	${className || ""}`;
	const spanClasses = `relative z-10`;

	const renderButton = () => (
		<button
			className={classes}
			onClick={onClick}
		>
			<span className={spanClasses}>{children}</span>
			{ButtonSvg(isWhite)}
		</button>
	);

	const renderLink = () => (
		<a
			className={classes}
			href={href}
		>
			<span className={spanClasses}>{children}</span>
			{ButtonSvg(isWhite)}
		</a>
	);

	return href ? renderLink() : renderButton();
};

export default Button;
