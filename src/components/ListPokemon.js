import { memo, useCallback, useEffect, useState } from "react";
import "../scss/listpokemonstyle.scss";
import { CardPokemon } from "./CardPokemon";
import { getRequest } from "../axios/httpRequest";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataPokemon } from "../redux/reducers/dataPokemonSlice";
import { getDataPokemon } from "../redux/selectors/dataPokemonSelector";
import LoadCircle from "./LoadCircle";
import InfiniteScroll from "react-infinite-scroll-component";

export const ListPokemon = () => {
  const dispatch = useDispatch();
  const [hasMore, setHasMore] = useState(true);
  const dataPokemon = useSelector(getDataPokemon);
  console.log(dataPokemon);
  const fetchData = useCallback(async () => {
    dispatch(fetchDataPokemon());
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const scrollOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container frame-list-pokemon p-0 py-3">
      {/* {dataPokemon.status === "loading" ? (
        <LoadCircle />
      ) : ( */}
      <>
        <InfiniteScroll
          dataLength={dataPokemon.items.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<LoadCircle />}
        >
          {dataPokemon.items.map((pokemon, idx) => (
            <CardPokemon key={idx} dataPokemon={pokemon} />
          ))}
        </InfiniteScroll>
      </>
      {/* )} */}
      <button className="btn btn-scroll-up border" onClick={scrollOnTop}>
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </div>
  );
};
