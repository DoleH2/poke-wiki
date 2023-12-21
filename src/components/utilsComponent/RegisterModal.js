import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/button';
import { getToggleRegister } from "../../redux/selectors/toggleSelector";
import { closeRegisterModal, openLoginModal } from "../../redux/reducers/toggleSlice";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { validateEqualString } from "../../validate/validate";
import { useSignupMutation } from "../../redux/reducers/apiFetch";




const RegisterModal = () => {
    const dispatch = useDispatch();
    const toggleRegister = useSelector(getToggleRegister);
    const { register, reset, clearErrors, handleSubmit, watch, formState: { errors } } = useForm();
    const [submitRegister] = useSignupMutation();
    const handleOpenLogin = () => {
        dispatch(closeRegisterModal());
        dispatch(openLoginModal());
    }

    const handleClearError = (typeClear) => {
        clearErrors(typeClear);
    }

    const handleSubmitRegister = async (data) => {
        try {
            const result = await submitRegister(data);
        } catch (error) {

        }
    }

    const validateInput = {
        password: {
            onChange: (e) => handleClearError("password"),
            required: { value: true, message: "Nhap password" },
            pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: "Sai mat khau" }
        },
        email: {
            onChange: (e) => handleClearError("email"),
            required: { value: true, message: "Nhap password" },
            pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Sai format Email" },
        },
        repassword: {
            onChange: (e) => handleClearError("repassword"),
            validate: () => !validateEqualString(watch("password"), watch("repassword")) && "Sai Repassword"
        }
    }


    return (
        <Modal
            className="modal-register"
            show={toggleRegister}
            onHide={() => dispatch(closeRegisterModal())}
        >
            <form onSubmit={handleSubmit(handleSubmitRegister)}>
                <Modal.Header
                    className="bg-transparent"
                    closeButton
                ><p className="m-0 fs-5 fw-bold">Register</p></Modal.Header>
                <Modal.Body className="d-flex justify-content-center flex-column">
                    <label htmlFor="username">Email</label>
                    <input id="username" className="form-control" placeholder="example@xyz.com"
                        {...register("email", validateInput.email)}
                    ></input>
                    <p className="notify text-danger">{errors.email && errors.email.message}</p>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" className="form-control" placeholder="Enter your password"
                        {...register("password", validateInput.password)}
                    ></input>
                    <p className="notify text-danger">{errors.password && errors.password.message}</p>
                    <label htmlFor="repassword">Re-Password</label>
                    <input id="repassword" type="password" className="form-control" placeholder="Enter Re-password"
                        {...register("repassword", validateInput.repassword)}></input>
                    <p className="notify text-danger">{errors.repassword && errors.repassword.message}</p>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <div className="d-flex w-100 flex-column gap-2">
                        <Button type="submit" variant="danger" className="w-100 fw-bold py-3">Sign up</Button>
                        <Button variant="link" style={{ textDecoration: "none", color: 'rgb(47 47 47)' }} onClick={handleOpenLogin}>Already an account ? <span className="fw-bold" >Log in</span></Button>
                    </div>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default RegisterModal;