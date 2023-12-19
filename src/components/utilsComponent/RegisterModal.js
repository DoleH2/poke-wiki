import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/button';
import { getToggleRegister } from "../../redux/selectors/toggleSelector";
import { closeRegisterModal, openLoginModal } from "../../redux/reducers/toggleSlice";
const RegisterModal = () => {
    const dispatch = useDispatch();
    const toggleRegister = useSelector(getToggleRegister);
    const handleOpenLogin = () => {
        dispatch(closeRegisterModal());
        dispatch(openLoginModal());
    }
    return (
        <Modal
            className="modal-register"
            show={toggleRegister}
            onHide={() => dispatch(closeRegisterModal())}
        >
            <Modal.Header
                className="bg-transparent"
                closeButton
            ><p className="m-0 fs-5 fw-bold">Register</p></Modal.Header>
            <Modal.Body className="d-flex justify-content-center flex-column">
                <form>
                    <label htmlFor="username">Email</label>
                    <input id="username" className="form-control mb-3" placeholder="example@xyz.com"></input>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control mb-3" placeholder="Enter your password"></input>
                    <label htmlFor="repassword">Re-Password</label>
                    <input id="repassword" type="password" className="form-control" placeholder="Enter Re-password"></input>

                </form>
            </Modal.Body>
            <Modal.Footer className="border-0">
                <div className="d-flex w-100 flex-column gap-2">
                    <Button variant="danger" className="w-100 fw-bold py-3">Sign up</Button>
                    <Button variant="link" style={{ textDecoration: "none", color: 'rgb(47 47 47)' }} onClick={handleOpenLogin}>Already an account ? <span className="fw-bold" >Log in</span></Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default RegisterModal;