import "../../scss/navbarStyle.scss";
import logoPokemon from "../../img/logo-pokemon.png";
import { useNavigate } from "react-router-dom";
import { openLoginModal } from "../../redux/reducers/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cookies from "js-cookie";
import UserLogin from "./UserLogin";
import { getToggleStatusLogin } from "../../redux/selectors/toggleSelector";
import ResetPasswordModal from "./ResetPasswordModal";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const changeRouter = (path, data) => {
    navigate(path, { state: data });
  };
  const statusLogin = useSelector(getToggleStatusLogin);
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);
  //xử lý offcanvas khi thay đổi size window
  const handleResizeWindow = () => {
    setSizeScreen(window.innerWidth);
    const backdropOffcanvas = document.getElementsByClassName("offcanvas-backdrop")[0];
    const offcanvas = document.getElementsByClassName("offcanvas")[0];
    if (backdropOffcanvas && backdropOffcanvas.classList.contains("show") && ((offcanvas && offcanvas.classList.contains("show")) || (!offcanvas))) {
      const btnClose = offcanvas.getElementsByClassName('btn-close')[0];
      btnClose.click();
    }
  }
  //xử lý click mở login
  const handleOpenLoginOffcanvas = () => {
    const btnClose = document.getElementsByClassName('btn-close')[0];
    btnClose.click();
    dispatch(openLoginModal());
  }
  useEffect(() => {
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    }
  }, [])
  return (
    <nav className="navbar-frame bg-dark d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between gap-3 p-0">
        <div className="logo-frame">
          <img alt="logo" src={logoPokemon}></img>
        </div>
        <div className="func-frame d-flex align-items-center position-relative">
          {
            sizeScreen >= 768 ? (
              <div className="func-detail d-none d-md-flex bg-dark">
                <button
                  className="btn d-block mx-auto"
                  onClick={() => changeRouter("/")}
                >Home</button>
                <button
                  className="btn d-block mx-auto"
                  onClick={() => changeRouter("/pokemon/1")}
                >List</button>
                <button
                  className="btn d-block mx-auto"
                  onClick={() => changeRouter("/compare")}
                >Compare</button>
                <button
                  className="btn d-block mx-auto"
                  onClick={() => changeRouter("/gacha")}
                >Gacha</button>
                {
                  statusLogin ?
                    (<UserLogin />) :
                    (<button
                      className="btn d-block mx-auto"
                      onClick={() => dispatch(openLoginModal())}
                    >Login</button>)
                }
              </div>

            ) : (
              <>
                <div className={`offcanvas offcanvas-top bg-dark`} style={{ minHeight: '200px' }} tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                  <div className="offcanvas-header">
                    <img alt="logo" src={logoPokemon}></img>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
                      !statusLogin &&
                      (<button
                        className="btn d-block mx-auto"
                        onClick={() => handleOpenLoginOffcanvas()}
                      >
                        Login
                      </button>)
                    }
                  </div>
                </div>
                {statusLogin && <UserLogin />}
                <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"><i className="fa-solid fa-bars"></i></button>
              </>

            )
          }

        </div>
      </div>
      <LoginModal />
      <RegisterModal />
      <ResetPasswordModal />
    </nav>
  );
};
