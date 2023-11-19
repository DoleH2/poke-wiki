import "../scss/searchframeStyle.scss";
import logoBtnSearch from "../img/btn-search.png";
import pikachu from "../img/pikachu.png";
import { useDispatch } from "react-redux";
import {
  filterListPokemon,
  setSearchName,
} from "../redux/reducers/dataPokemonSlice";
import { useGetListPokemonQuery } from "../redux/reducers/apiFetch";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { changeRouter } from "../utils/handleRouter";
export const SearchFrame = () => {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const handleSubmitSearch = (dataForm) => {
    dispatch(setSearchName(dataForm.search));
    changeRouter(navigate, "/search-pokemon", dataForm);
  };
  return (
    <div className="container frame-search mx-auto d-flex align-items-center justify-content-center">
      <form
        onSubmit={handleSubmit(handleSubmitSearch)}
        className="frame-input-search d-flex align-items-center justify-content-center w-100"
      >
        <img
          className="d-none d-md-block"
          src={pikachu}
          style={{ width: "200px" }}
        ></img>
        <input
          className="form-control"
          style={{ maxWidth: "350px" }}
          placeholder="Nhập tên pokemon..."
          {...register("search", {})}
        />
        <button className="btn p-0" style={{ maxWidth: "38px" }}>
          <img src={logoBtnSearch} className="w-100"></img>
        </button>
      </form>
    </div>
  );
};
