import { useDispatch } from "react-redux";
import bulbasaur from "../../img/bulbasaur.png";
import { openLoginModal } from "../../redux/reducers/toggleSlice";
import Button from "react-bootstrap/esm/Button";
const CompareHomePage = () => {
  const dispatch = useDispatch();
  return (
    <div className="frame-compare-homepage rounded shadow mt-5">
      <div className="row">
        <div className="col-12 col-md-6 m-auto">
          <div className="frame-content-compare-homepage p-4">
            <p className="h2 m-0 text-white">Which pokemon is stronger?</p>
            <p className="m-0 text-white">Compare the stats of pokemon</p>
            <Button
              variant="danger"
              className="rounded-0 mt-4"
              onClick={() => dispatch(openLoginModal())}
            >
              Compare Now
            </Button>
          </div>
        </div>
        <div className="col-12 col-md-6 m-auto">
          <div className="frame-img-compare-homepage">
            <img src={bulbasaur} className="w-100"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareHomePage;
