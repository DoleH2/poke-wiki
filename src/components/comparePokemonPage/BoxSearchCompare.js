import { useCallback, useMemo, useState } from "react";
import SearchPokemon from "../listPokemonPage/SearchPokemon";
import { useGetListPokemonMainQuery } from "../../redux/reducers/apiFetch";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import OptionCompare from "./OptionCompare";

const BoxSearchCompare = () => {
  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //end modal
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
  return (
    <div className="frame-pokemon-select">
      <Button
        onClick={handleShow}
        className="btn btn-light border"
        style={{ width: "300px", height: "300px" }}
      >
        <i class="fa-solid fa-plus fs-1 text-secondary"></i>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Search Pokemon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="frame-search-compare">
            <input
              className="form-control"
              onChange={(e) => handleChangeSearch(e.target.value)}
            />
            <div className="display-pokemon-search-compare">
              {filterData.map((item) => (
                <OptionCompare dataPokemon={item} />
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default BoxSearchCompare;
