import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import SelectionContainer from "./components/SelectionContainer";
import {
	SelectionContextProvider,
	useSelector,
} from "./context/SelectionContext";

function App() {
	const { bgColor } = useSelector();
	console.log(bgColor);
	return (
		<SelectionContextProvider>
			<div className="App">
				<Canvas dpr={[1, 2]}>
					<Experience />
				</Canvas>
				<SelectionContainer />
			</div>
		</SelectionContextProvider>
	);
}

export default App;
