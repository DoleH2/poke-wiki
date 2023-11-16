import logo from "./logo.svg";
import "./App.css";
import "./scss/framerootstyle.scss";
import { PokeWikiFrame } from "./components/PokeWikiFrame";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ErrorPage from "./components/utilsComponent/ErrorPage";
import { PageInfoPokemon } from "./components/infoPokemonPage/PageInfoPokemon";
function App() {
  return (
    <Routes>
      <Route index path="/" exact element={<PokeWikiFrame />} />
      <Route path="/info" exact element={<PageInfoPokemon />} />
      <Route path="/error" exact element={<ErrorPage></ErrorPage>} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
}

export default App;
