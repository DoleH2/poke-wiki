import { Suspense, lazy, memo, useCallback, useEffect, useState } from "react";
import "../../scss/listpokemonstyle.scss";
import LoadCircle from "../LoadCircle";
import { Pagination } from "../Pagination";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDataPokemon,
  getDataPokemon,
} from "../../redux/selectors/dataPokemonSelector";
import { useGetListPokemonQuery } from "../../redux/reducers/apiFetch";
import {
  filterNamePokemon,
  setAllData,
} from "../../redux/reducers/dataPokemonSlice";
import { changeRouter } from "../../utils/handleRouter";
const CardPokemon = lazy(() => import("../CardPokemon"));

const limit = 18;

export const ListSearchPokemon = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  // const dataAll = useSelector(getAllDataPokemon);
  // console.log(dataAll);

  // const handleChangePage = (page) => {
  //   changeRouter(navigate, "/pokemon/" + (Number(page.selected) + 1));
  // };
  const { data, error, status, refetch } = useGetListPokemonQuery({
    limit: 2000,
    offset: 0,
  });
  // dispatch(setAllData(data));
  // dispatch(filterNamePokemon());
  // console.log(dataAll);
  console.log(data);
  useEffect(() => {
    if (status) dispatch(filterNamePokemon(dataAll));
  }, [data]);

  return (
    <>
      {/* <div className="container frame-list-pokemon p-0">
        <div className="list-pokemon py-2 px-1">
          {status === "pending" ? (
            <LoadCircle />
          ) : (
            <>
              {data.results.map((pokemon, idx) => (
                <Suspense key={idx} fallback={<LoadCircle />}>
                  <CardPokemon dataPokemon={pokemon} />
                </Suspense>
              ))}
            </>
          )}
        </div>
        <div className="frame-paging pt-2">
          {status !== "pending" && (
            <Pagination
              curPage={page}
              maxPage={Math.ceil(data.count / limit)}
              onChange={handleChangePage}
            />
          )}
        </div>
      </div> */}
    </>
  );
};
