import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/button';
import { getToggleLogin } from "../../redux/selectors/toggleSelector";
import { useForm } from 'react-hook-form';
import { closeLoginModal, openRegisterModal, userLogin } from "../../redux/reducers/toggleSlice";
import { postRequest } from "../../axios/httpRequest";
import { useLoginMutation } from "../../redux/reducers/apiFetch";
import cookie from 'js-cookie';

const LoginModal = () => {
    const dispatch = useDispatch();
    const { register, reset, clearErrors, handleSubmit, setError, formState: { errors } } = useForm();
    const toggleLogin = useSelector(getToggleLogin);
    const [submitLogin] = useLoginMutation();

    const handleOpenRegister = () => {
        dispatch(closeLoginModal());
        reset();
        dispatch(openRegisterModal());
    }
    const handleSubmitLogin = async (data) => {
        try {
            const result = await submitLogin(data).unwrap();
            dispatch(userLogin());
            dispatch(closeLoginModal());
            reset();
        } catch (error) {
            if (error.status === 400) {
                console.log(error);
                setError("errorBackend", { type: 'custom', message: error.data.message });
            } else if (error.status === 500) {
                console.log(error);
                //chuyen trang error
            }
        }
    }
    const handleClearError = () => {
        clearErrors();
    }

    return (
        <Modal
            className="modal-login"
            show={toggleLogin}
            onHide={() => dispatch(closeLoginModal())}
        >
            <form onSubmit={handleSubmit(handleSubmitLogin)}>
                <Modal.Header
                    className="bg-transparent"
                    closeButton
                ><p className="m-0 fs-5 fw-bold">Login</p></Modal.Header>
                <Modal.Body className="d-flex justify-content-center flex-column">
                    <label htmlFor="username">Email</label>
                    <input id="username" className="form-control mb-3" placeholder="example@xyz.com"
                        {...register("email")}
                        onChange={handleClearError}
                    ></input>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter your password"
                        {...register("password")}
                        onChange={handleClearError}
                    ></input>
                    <Button variant="link" className="p-0 text-start"
                        style={{ textDecoration: "none", color: 'rgb(47 47 47)' }}>Forget password ?</Button>
                    <p className="notify text-danger m-0">{errors.errorBackend && errors.errorBackend.message}</p>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <div className="d-flex w-100 flex-column gap-2">
                        <Button variant="danger" type="submit" className="w-100 fw-bold py-3">Log in</Button>
                        <Button variant="link" style={{ textDecoration: "none", color: 'rgb(47 47 47)' }} onClick={handleOpenRegister}>Don't have an Account ? <span className="fw-bold">Sign up</span></Button>
                    </div>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default LoginModal;