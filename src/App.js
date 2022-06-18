import "./App.css";
import Spacer from "./components/Spacer";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="card">
			<Spacer />
			<Info />
			<About />
			<Interests />
			<Footer />
		</div>
	);
}

export default App;
