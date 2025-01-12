import { FC } from "react";
import { Section } from "./ui";
import { socials } from "../consts";

const Footer: FC = () => {
	return (
		<Section
			id="footer"
			hasCrosses
			className="!px-0 !py-10"
		>
			<div
				className="container flex sm:justify-between 
			justify-center items-center gap-10 max-sm:flex-col"
			>
				<p className="caption text-n-4 lg:block">
					&copy; {new Date().getFullYear()} All rights reserved.
				</p>

				<ul className="flex gap-5 flex-wrap">
					{socials.map(item => (
						<li key={item.id}>
							<a
								href={item.url}
								target="_blank"
								className="flex items-center 
								justify-center w-10 h-10 bg-n-7
								rounded-full transition-colors
								hover:bg-n-6"
							>
								<img
									src={item.iconUrl}
									width={16}
									height={16}
									alt={item.title}
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</Section>
	);
};

export default Footer;
