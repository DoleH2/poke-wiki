import SearchPokemon from "../listPokemonPage/SearchPokemon";
import BoxSearchCompare from "./BoxSearchCompare";

const FrameComparePokemon = () => {
  const handleFilter = () => {};
  return (
    <div className="container p-0 bg-white d-flex justify-content-center gap-2">
      <div className="row w-100">
        <div className="col-10 col-md-6 p-0">
          <div className="frame-add-compare p-0 d-flex justify-content-center">
            <BoxSearchCompare />
          </div>
        </div>
        <div className="col-10 col-md-6 p-0">
          <div className="frame-add-compare p-0 d-flex justify-content-center">
            <BoxSearchCompare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComparePokemon;
