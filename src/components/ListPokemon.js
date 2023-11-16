import { memo, useCallback, useEffect, useState } from "react";
import "../scss/listpokemonstyle.scss";
import { CardPokemon } from "./CardPokemon";
import { getRequest } from "../axios/httpRequest";
import { useDispatch, useSelector } from "react-redux";
import { changePage, fetchDataPokemon } from "../redux/reducers/dataPokemonSlice";
import { getDataPokemon } from "../redux/selectors/dataPokemonSelector";
import LoadCircle from "./LoadCircle";
import InfiniteScroll from "react-infinite-scroll-component";
import { Pagination } from "./Pagination";

export const ListPokemon = () => {
  const dispatch = useDispatch();
  const dataPokemon = useSelector(getDataPokemon);
  const page = dataPokemon.page;
  const fetchData = useCallback(async () => {
    dispatch(fetchDataPokemon());
  }, []);

  const handleChangePage = (page) => {
    dispatch(changePage(page.selected));
  }
  useEffect(() => {
    fetchData();
  }, [page]);


  return (
    <>
      <div className="container frame-list-pokemon p-0">
        <div className="list-pokemon py-2 px-1">
          {dataPokemon.status === "loading" ? (
            <LoadCircle />
          ) : (
            <>
              {dataPokemon.items.map((pokemon, idx) => (
                <CardPokemon key={idx} dataPokemon={pokemon} />
              ))}
            </>
          )}
        </div>
        <div className="frame-paging pt-2">
          <Pagination
            maxPage={dataPokemon.totalPage}
            onChange={handleChangePage}
          />
        </div>
      </div>
    </>
  );
};
