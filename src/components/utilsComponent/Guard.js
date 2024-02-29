import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import { useLogoutMutation } from "../../redux/reducers/apiMember";
const Guard = (props) => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const changeRouter = (path, data) => {
        navigate(path, { state: data });
    };
    const [logout] = useLogoutMutation();
    const statusLogin = Cookies.get("Poke");
    useEffect(() => {
        if (!statusLogin) {
            logout();
            changeRouter("/");
        } else {
            const jwt = statusLogin;
            const data = jwtDecode(jwt);
            console.log(jwt);
            console.log(data.role);
        }
    }, [statusLogin])
    return (

        statusLogin && <>{props.children}</>

    )
}

export default Guard;