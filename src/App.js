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
import { PokeListFrame } from "./components/PokeListPage";
import { PokeSearchPage } from "./components/searchPage/PokeSearchPage";
function App() {
  return (
    <Routes>
      <Route path="/" index exact element={<PokeWikiFrame />} />
      <Route path="/pokemon/:page" exact element={<PokeListFrame />} />
      <Route path="/search-pokemon" exact element={<PokeSearchPage />} />
      <Route path="/info" exact element={<PageInfoPokemon />} />
      <Route path="/error" exact element={<ErrorPage></ErrorPage>} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
}

export default App;
