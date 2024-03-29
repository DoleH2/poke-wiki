import { Suspense, lazy, memo, useCallback, useEffect, useState } from "react";
import '../../scss/listpokemonstyle.scss';
import LoadCircle from "../utilsComponent/LoadCircle";
import { Pagination } from "../utilsComponent/Pagination";
import { useGetListPokemonQuery } from "../../redux/reducers/apiPokeFetch";
import { useNavigate, useParams } from "react-router-dom";
import { changeRouter } from "../../utils/handleRouter";
const CardPokemon = lazy(() => import("./CardPokemon"));

const limit = 18;

export const ListPokemon = () => {
  let navigate = useNavigate();
  const { page } = useParams();
  const handleChangePage = (page) => {
    changeRouter(navigate, "/pokemon/" + (Number(page.selected) + 1));
  };
  const { data, error, status, refetch } = useGetListPokemonQuery({
    limit: limit,
    offset: (page - 1) * limit,
  });
  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <>
      <div className="container frame-list-pokemon p-0">
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
      </div>
    </>
  );
};
