export const InfoDetailsPokemon = ({ dataPokemon }) => {
  console.log(dataPokemon);
  return (
    <div className="container bg-white mt-2 rounded shadow">
      <div className="d-flex flex-wrap px-2 py-3">
        <div className="d-flex flex-wrap px-2 gap-5 justify-content-center">
          <p className="m-0" style={{ minWidth: "100px" }}>
            Height: {dataPokemon.height * 10} cm
          </p>
          <p className="m-0" style={{ minWidth: "100px" }}>
            Weight: {dataPokemon.weight * 0.1} kg
          </p>
        </div>
        <div className="frame-max-stats">
          HP = {Math.floor(0.01 * (2 * dataPokemon.stats[0].base_stat + 31) * 100) + 100 + 10}
        </div>
      </div>
    </div>
  );
};
