import "../scss/searchframeStyle.scss";
import logoBtnSearch from "../img/btn-search.png";
import pikachu from "../img/pikachu.png";
export const SearchFrame = () => {
  return (
    <div className="container frame-search mx-auto d-flex align-items-center justify-content-center">
      <form className="frame-input-search d-flex align-items-center justify-content-center w-100">
        <img
          className="d-none d-md-block"
          src={pikachu}
          style={{ width: "200px" }}
        ></img>
        <input
          className="form-control"
          style={{ maxWidth: "350px" }}
          placeholder="Nhập tên pokemon..."
        />
        <button className="btn p-0" style={{ maxWidth: "38px" }}>
          <img src={logoBtnSearch} className="w-100"></img>
        </button>
      </form>
    </div>
  );
};
