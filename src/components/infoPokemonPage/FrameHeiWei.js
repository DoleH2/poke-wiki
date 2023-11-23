const FrameHeiWei = ({ dataPokemon }) => {
    return (
        <div className="d-flex flex-wrap px-2 gap-3 justify-content-center align-items-center">
            <p className="m-0 fw-bold" style={{ minWidth: "100px" }}>
                Height: {dataPokemon.height * 10} cm
            </p>
            <p className="m-0 fw-bold" style={{ minWidth: "100px" }}>
                Weight: {dataPokemon.weight / 10} kg
            </p>
        </div>
    )
}

export default FrameHeiWei;