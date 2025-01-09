import { FC } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/ui/Button";
import Header from "./components/Header";
import Section from "./components/ui/Section";

const App: FC = () => {
	return (
		<>
			<div
				className="pt-[4.75rem] lg:pt-[5.25rem] 
			overflow-hidden"
			>
				<Header />
			</div>
			<ButtonGradient />
		</>
	);
};

export default App;
