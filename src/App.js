import logo from "./logo.svg";
import "./App.css";
import { PokeWikiFrame } from "./components/PokeWikiFrame";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function App() {
  return (
    <div className="App">
      <PokeWikiFrame />
    </div>
  );
}

export default App;
