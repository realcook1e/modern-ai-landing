import { FC } from "react";
import { loading } from "../../assets";

interface GeneratingProps {
	text: string;
	className?: string;
}

const Generating: FC<GeneratingProps> = ({
	text,
	className,
}) => {
	return (
		<div
			className={`flex items-center h-[3.5rem] px-6
		bg-n-8/80 rounded-[1.7rem] ${className || ""}
		text-base`}
		>
			<img
				className="w-5 h-5 mr-4"
				src={loading}
				alt="Loading"
			/>
			{text}
		</div>
	);
};

export default Generating;
