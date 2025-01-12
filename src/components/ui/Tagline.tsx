import { FC, PropsWithChildren } from "react";
import brackets from "../../assets/svg/Brackets";

interface TaglineProps extends PropsWithChildren {
	className?: string;
}

const Tagline: FC<TaglineProps> = ({ className, children }) => {
	return (
		<div
			className={`tagline flex items-center
		${className || ""}`}
		>
			{brackets("left")}
			<div className="mx-3 text-n-3">{children}</div>
			{brackets("right")}
		</div>
	);
};

export default Tagline;
