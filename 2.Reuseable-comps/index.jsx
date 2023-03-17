// building components
import Header from "./components/header";
import MainContent from "./components/MainContent";
import Card from "../my-react-app/src/components/Card";
import Footer from "./components/footer";

// name needs to be in PascalCase
function App() {
	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById("root"))