import "../../scss/navbarStyle.scss";
import logoPokemon from "../../img/logo-pokemon.png";
import { useNavigate } from "react-router-dom";
import { openLoginModal } from "../../redux/reducers/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { useEffect } from "react";
import Cookies from "js-cookie";
import UserLogin from "./UserLogin";
import { getToggleStatusLogin } from "../../redux/selectors/toggleSelector";
export const Navbar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const changeRouter = (path, data) => {
    navigate(path, { state: data });
  };
  const cookie = Cookies.get('Poke');
  const statusLogin = useSelector(getToggleStatusLogin);

  return (
    <nav className="navbar-frame bg-dark d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between gap-3 p-0">
        <div className="logo-frame">
          <img src={logoPokemon}></img>
        </div>
        <div className="func-frame d-flex align-items-center position-relative">
          {/*  */}
          <div className="func-detail d-none d-md-flex bg-dark">
            <button
              className="btn d-block mx-auto"
              onClick={() => changeRouter("/")}
            >
              Home
            </button>
            <button
              className="btn d-block mx-auto"
              onClick={() => changeRouter("/pokemon/1")}
            >
              List
            </button>
            <button
              className="btn d-block mx-auto"
              onClick={() => changeRouter("/compare")}
            >
              Compare
            </button>
            <button
              className="btn d-block mx-auto"
              onClick={() => changeRouter("/gacha")}
            >
              Gacha
            </button>
            {
              statusLogin ?
                (<UserLogin />) :
                (<button
                  className="btn d-block mx-auto"
                  onClick={() => dispatch(openLoginModal())}
                >
                  Login
                </button>)
            }
          </div>
          {/*  */}
          <div
            className="offcanvas offcanvas-top bg-dark d-block d-md-none"
            tabIndex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
          >
            <div className="offcanvas-header">
              <div className="offcanvas-title" id="offcanvasTopLabel">
                <img src={logoPokemon}></img>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body bg-dark">
              <button
                className="btn d-block mx-auto"
                onClick={() => changeRouter("/")}
              >
                Home
              </button>
              <button
                className="btn d-block mx-auto"
                onClick={() => changeRouter("/pokemon/1")}
              >
                List
              </button>
              <button
                className="btn d-block mx-auto"
                onClick={() => changeRouter("/compare")}
              >
                Compare
              </button>
              <button
                className="btn d-block mx-auto"
                onClick={() => changeRouter("/gacha")}
              >
                Gacha
              </button>
              {
                statusLogin ?
                  (<UserLogin />) :
                  (<button
                    className="btn d-block mx-auto"
                    onClick={() => dispatch(openLoginModal())}
                  >
                    Login
                  </button>)
              }
            </div>
          </div>
          <button
            type="button"
            className="btn btn-more-navbar close d-block d-md-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
          >
            <i className="fa-solid fa-bars fs-4"></i>
          </button>
        </div>
      </div>
      <LoginModal />
      <RegisterModal />
    </nav>
  );
};
