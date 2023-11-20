import { Suspense, lazy, memo, useCallback, useEffect, useState } from "react";
import "../../scss/listpokemonstyle.scss";
import LoadCircle from "../LoadCircle";
import { Pagination } from "../Pagination";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDataPokemon,
  getDataPokemon,
  getFilterDataPokemon,
} from "../../redux/selectors/dataPokemonSelector";
import { useGetListPokemonMainQuery, useGetListPokemonQuery } from "../../redux/reducers/apiFetch";
import {
  filterNamePokemon,
  setAllData,
  setSearchName,
} from "../../redux/reducers/dataPokemonSlice";
import { changeRouter } from "../../utils/handleRouter";
const CardPokemon = lazy(() => import("../CardPokemon"));

const limit = 18;

export const ListSearchPokemon = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const dataFilter = useSelector(getFilterDataPokemon);
  // const handleChangePage = (page) => {
  //   changeRouter(navigate, "/pokemon/" + (Number(page.selected) + 1));
  // };
  // console.log(Object.keys(dataAll).length !== 0);
  const { data, error, status, refetch } = useGetListPokemonMainQuery({
    limit: 2000,
    offset: 0,
  });
  console.log(status);
  console.log(error);
  useEffect(() => {
    if (status === "fulfilled") {
      dispatch(filterNamePokemon({ list: data.results }))
    }
  }, [status])


  return (
    <>
      <div className="container frame-list-pokemon p-0">
        {console.log(dataFilter)}
        <div className="list-pokemon py-2 px-1">
          {status === "pending" || dataFilter === undefined ? (
            <LoadCircle />
          ) : (
            <>
              {dataFilter.map((pokemon, idx) => (
                <Suspense key={idx} fallback={<LoadCircle />}>
                  <CardPokemon dataPokemon={pokemon} />
                </Suspense>
              ))}
            </>
          )}
        </div>
        {/* <div className="frame-paging pt-2">
          {status === "success" && (
            <Pagination
              curPage={1}
              maxPage={Math.ceil(dataFilter.length / limit)}
              onChange={handleChangePage}
            />
          )}
        </div> */}
      </div>
    </>
  );
};
