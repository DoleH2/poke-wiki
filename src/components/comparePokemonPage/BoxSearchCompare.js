import { Suspense, lazy, useCallback, useMemo, useState } from "react";
import { useGetListPokemonMainQuery } from "../../redux/reducers/apiFetch";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from 'react-hook-form';
import InfoPokemonCompare from "./InfoPokemonCompare";
const OptionCompare = lazy(() => import('./OptionCompare'));

const BoxSearchCompare = ({ active }) => {
  const { register } = useForm();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false)
  };
  const [toggleChoose, setToggleChoose] = useState(false);
  const handleShow = () => setShow(true);
  const [choosePokemonState, setChoosePokemonState] = useState();
  const [filterData, setFilterData] = useState([]);
  const { data, error, status } = useGetListPokemonMainQuery({
    limit: 2000,
    offset: 0,
  });
  const [searchCompare, setSearchCompare] = useState("");

  const handleFilterData = useCallback((data, search) => {
    if (search === "") {
      setFilterData([]);
      return;
    }
    const listSearch = data.results.filter((item) =>
      item.name.includes(search.toLowerCase())
    );
    setFilterData(listSearch.slice(0, 5));
    return;
  }, []);
  useMemo(() => handleFilterData(data, searchCompare), [searchCompare]);
  const handleChangeSearch = (value) => {
    clearTimeout(handleChangeSearch.idOfTimeout);
    handleChangeSearch.idOfTimeout = setTimeout(() => {
      if (status === "fulfilled") {
        setSearchCompare(value);
      }
    }, 1000);
  };
  const handleClickChoosePokemon = useCallback((data) => {
    console.log(data);
    handleClose();
    setChoosePokemonState(data);
    if (!toggleChoose) {
      console.log(toggleChoose);
      setToggleChoose(true);
      active(true);
    } else {
      console.log('vao neeee');
      active(false);
    }
  }, [toggleChoose])
  return (
    <div className="frame-pokemon-select">
      {
        choosePokemonState ?
          (<InfoPokemonCompare dataPokemon={choosePokemonState} onClickEdit={handleShow} />) :
          (
            <Button
              onClick={handleShow}
              className="btn btn-light border"
              style={{ width: "200px", height: "200px" }}
            >
              <i className="fa-solid fa-plus fs-1 text-secondary"></i>
              <p>Choose Pokemon</p>
            </Button>
          )
      }



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Pokemon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="frame-search-compare">
            <input autoComplete="off"
              className="form-control"
              {...register("input-search-compare", {
                onChange: (e) => handleChangeSearch(e.target.value)
              })}
            />
            <div className="display-pokemon-search-compare">
              {filterData.map((item, idx) => (
                <Suspense key={idx}>
                  <OptionCompare dataPokemon={item}
                    onClick={(data) => handleClickChoosePokemon(data, true)}
                  />
                </Suspense>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default BoxSearchCompare;
