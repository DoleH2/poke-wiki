export const InfoDetailsPokemon = ({ dataPokemon }) => {
  return (
    <div className="container bg-white mt-2 rounded shadow">
      <div className="d-flex flex-wrap px-2 py-3">
        <p className="m-0" style={{ minWidth: "100px" }}>
          Height: {dataPokemon.height * 10} cm
        </p>
        <p className="m-0" style={{ minWidth: "100px" }}>
          Weight: {dataPokemon.weight * 0.1} kg
        </p>
      </div>
    </div>
  );
};
