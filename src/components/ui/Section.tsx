import { FC, PropsWithChildren } from "react";
import SectionSvg from "../../assets/svg/SectionSvg";

interface SectionProps extends PropsWithChildren {
	id: string;
	className?: string;
	hasCrosses?: boolean;
	crossesOffset?: string;
	customPaddings?: string;
}

const Section: FC<SectionProps> = ({
	className,
	id,
	hasCrosses,
	crossesOffset,
	customPaddings,
	children,
}) => {
	return (
		<div
			id={id}
			className={`relative ${
				customPaddings || "py-10 lg:py-16 xl:py-20"
			} ${hasCrosses ? "lg:py-32 xl:py-40" : ""} ${
				className || ""
			}
			}`}
		>
			{children}

			<div
				className="hidden absolute top-0 left-5 
			w-0.25 h-full bg-stroke-1 pointer-events-none
			md:block lg:left-7.5 xl:left-10"
			/>
			<div
				className="hidden absolute top-0 right-5 
			w-0.25 h-full bg-stroke-1 pointer-events-none
			md:block lg:right-7.5 xl:right-10"
			/>

			{hasCrosses && (
				<>
					<div
						className={`hidden absolute top-0 left-7.5
						right-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset} 
							pointer-events-none lg:block xl:left-10
							xl:right-10`}
					/>
					<SectionSvg crossesOffset={crossesOffset} />
				</>
			)}
		</div>
	);
};

export default Section;
