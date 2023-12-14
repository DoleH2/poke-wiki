import "../../scss/homepageStyle.scss";
import SendMessage from "../../apiFacebook/SendMessage";
import MenuShow from "../utilsComponent/MenuShow";
import charizard from "../../img/charizard.png";
import Button from "react-bootstrap/button";
import { useDispatch } from "react-redux";
import { openLoginModal } from "../../redux/reducers/toggleSlice";
import GachaHomePage from "./GachaHomePage";
import CompareHomePage from "./CompareHomePage";
const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <div className="container frame-home-page">
      {/* <MenuShow /> */}
      <div className="home-page mb-3" style={{ maxHeight: "700px" }}>
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center pe-3">
            <div className="content-home-page p-2">
              <p className="m-0 text-white">Pokemon</p>
              <p className="h2 text-white">
                Catch them ! Collect your Strongest and Rarest Pokemon
              </p>
              <Button
                variant="danger"
                className="rounded-0 mt-4"
                onClick={() => dispatch(openLoginModal())}
              >
                Collect Now
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-7 ps-3">
            <div className="img-home-page">
              <img src={charizard} className="w-100"></img>
            </div>
          </div>
        </div>
      </div>
      <GachaHomePage />
      <CompareHomePage />
      <SendMessage idFB={"812074489154828"} />
    </div>
  );
};

export default HomePage;
