import { FC } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/ui/Button";

const App: FC = () => {
	return (
		<>
			<h1 className="text-3xl font-bold underline">Test</h1>

			<div
				className="pt-[4.75rem] lg:pt-[5.25rem] 
			overflow-hidden"
			>
				<Button className="mt-10">Something</Button>
			</div>
			<ButtonGradient />
		</>
	);
};

export default App;
