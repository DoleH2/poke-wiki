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
import { PokeListFrame } from "./components/listPokemonPage/PokeListPage";
import PageComparePokemon from "./components/comparePokemonPage/PageComparePokemon";
import GachaPage from "./components/gachaPokemonPage/GachaPage";
function App() {
  return (
    <Routes>
      <Route path="/" index exact element={<PokeWikiFrame />} />
      <Route path="/pokemon/:page" exact element={<PokeListFrame />} />
      <Route path="/info" exact element={<PageInfoPokemon />} />
      <Route path="/compare" exact element={<PageComparePokemon />} />
      <Route path="/gacha" exact element={<GachaPage />} />
      <Route path="/error" exact element={<ErrorPage></ErrorPage>} />
      <Route path="*" element={<Navigate to="/error" />} />
    </Routes>
  );
}

export default App;
