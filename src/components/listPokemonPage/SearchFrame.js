import "../../scss/searchframeStyle.scss";
import pikachu from "../../img/pikachu.png";
import { useDispatch } from "react-redux";
import {
  filterNamePokemon, setSearchName,
} from "../../redux/reducers/dataPokemonSlice";
import { useGetListPokemonMainQuery } from "../../redux/reducers/apiFetch";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getFilterDataPokemon, getSearchPokemon } from "../../redux/selectors/dataPokemonSelector";
import SearchPokemon from "./SearchPokemon";



export const SearchFrame = () => {
  const dispatch = useDispatch();
  const filterSearch = useSelector(getFilterDataPokemon);
  const searchState = useSelector(getSearchPokemon);
  const { data, error, status } = useGetListPokemonMainQuery({ limit: 2000, offset: 0 });
  const handleChangeSearch = (value) => {
    clearTimeout(handleChangeSearch.idOfTimeout);
    handleChangeSearch.idOfTimeout = setTimeout(() => {
      if (status === "fulfilled") {
        dispatch(setSearchName(value));
        dispatch(filterNamePokemon({ list: data.results }));
      }

    }, 1000)
  };
  return (
    <div className="container frame-search mx-auto d-flex align-items-center justify-content-center">
      <form autoComplete="off"
        className="frame-input-search d-flex align-items-center justify-content-center w-100 position-relative"
      >
        <img
          className="d-none d-md-block"
          src={pikachu}
          style={{ width: "200px" }}
        ></img>
        <SearchPokemon
          onChange={(value) => handleChangeSearch(value)}
          defaultValue={searchState}
          placeHolder="Nhap ten pokemon"
          filterSearch={filterSearch}
          className="mx-auto"
          style={{ width: '350px' }}
        />
      </form>
    </div>
  );
};
