import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/button';
import { getToggleLogin } from "../../redux/selectors/toggleSelector";
import { closeLoginModal, openLoginModal } from "../../redux/reducers/toggleSlice";
const LoginModal = () => {
    const dispatch = useDispatch();
    const toggleLogin = useSelector(getToggleLogin);
    return (
        <Modal
            className="modal-login"
            show={toggleLogin}
            onHide={() => dispatch(closeLoginModal())}
        >
            <Modal.Header
                className="bg-transparent"
                closeButton
            ><p className="m-0 fs-5 fw-bold">Login</p></Modal.Header>
            <Modal.Body className="d-flex justify-content-center flex-column">
                <form>
                    <label htmlFor="username">Email</label>
                    <input id="username" className="form-control mb-3" placeholder="example@xyz.com"></input>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter your password"></input>
                    <Button variant="link" className="p-0"
                        style={{ textDecoration: "none", color: 'rgb(47 47 47)' }}>Forget password ?</Button>
                </form>
            </Modal.Body>
            <Modal.Footer className="border-0">
                <div className="d-flex w-100 flex-column gap-2">
                    <Button variant="danger" className="w-100 fw-bold py-3">Log in</Button>
                    <Button variant="link" style={{ textDecoration: "none", color: 'rgb(47 47 47)' }}>Don't have an Account ? <span className="fw-bold">Sign up</span></Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;