import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/button';
import { getToggleLogin } from "../../redux/selectors/toggleSelector";
import { useForm } from 'react-hook-form';
import { closeLoginModal, openRegisterModal, openResetPassModal, userLogin } from "../../redux/reducers/toggleSlice";
import { postRequest } from "../../axios/httpRequest";
import { useLoginMutation } from "../../redux/reducers/apiFetch";
import cookie from 'js-cookie';
import LoadCircle from "./LoadCircle";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const LoginModal = () => {
    const dispatch = useDispatch();
    const { register, reset, clearErrors, handleSubmit, setError, formState: { errors } } = useForm();
    const toggleLogin = useSelector(getToggleLogin);
    const [submitLogin] = useLoginMutation();
    const [debounceSubmitLogin, setDebounceSubmitLogin] = useState(true);
    const handleOpenRegister = () => {
        dispatch(closeLoginModal());
        reset();
        dispatch(openRegisterModal());
    }
    const handleOpenResetPass = () => {
        dispatch(closeLoginModal());
        reset();
        dispatch(openResetPassModal());
    }
    const handleSubmitLogin = async (data) => {
        if (debounceSubmitLogin) {
            setDebounceSubmitLogin(false);
        } else {
            return;
        }
        try {
            const result = await submitLogin(data).unwrap();
            dispatch(userLogin());
            dispatch(closeLoginModal());
            reset();
        } catch (error) {
            if (error.status === 400) {
                console.log(error);
                setError("customError", { type: 'custom', message: error.data.message });
            } else if (error.status === 500) {
                console.log(error);
                //chuyen trang error
            }
        }
        setDebounceSubmitLogin(true);
    }
    const handleClearError = () => {
        clearErrors();
    }

    return (
        <Modal
            className="modal-login"
            show={toggleLogin}
            onHide={() => { dispatch(closeLoginModal()); reset() }}
        >
            <form onSubmit={handleSubmit(handleSubmitLogin)}>
                <Modal.Header
                    className="bg-transparent"
                    closeButton
                ><p className="m-0 fs-5 fw-bold">Login</p></Modal.Header>
                <Modal.Body className="d-flex justify-content-center flex-column">
                    <label htmlFor="email-login">Email</label>
                    <input id="email-login" className="form-control mb-3" placeholder="example@xyz.com"
                        {...register("email")}
                        onChange={handleClearError}
                    ></input>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter your password"
                        {...register("password")}
                        onChange={handleClearError}
                    ></input>
                    <Button variant="link" className="p-0 text-start"
                        style={{ textDecoration: "none", color: 'rgb(47 47 47)' }}
                        onClick={handleOpenResetPass}
                    >Forget password ?</Button>
                    <p className="notify text-danger m-0">{errors.customError && errors.customError.message}</p>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <div className="d-flex w-100 flex-column gap-2">
                        {
                            debounceSubmitLogin ?
                                <Button variant="danger" type="submit" className="w-100 fw-bold py-3">
                                    Log in
                                </Button>
                                : <LoadCircle />
                        }
                        <Button variant="link" style={{ textDecoration: "none", color: 'rgb(47 47 47)' }}
                            onClick={handleOpenRegister}>Don't have an Account ? <span className="fw-bold">Sign up</span></Button>
                    </div>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default LoginModal;