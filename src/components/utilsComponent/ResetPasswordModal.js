import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useResetpassMutation } from "../../redux/reducers/apiFetch";
import { closeResetPassModal, openLoginModal } from "../../redux/reducers/toggleSlice";
import { getToggleResetPass } from "../../redux/selectors/toggleSelector";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/button';
import LoadCircle from "./LoadCircle";
import { ToastContainer, toast } from 'react-toastify';
const ResetPasswordModal = () => {
    const dispatch = useDispatch();
    const { register, reset, clearErrors, handleSubmit, setError, formState: { errors } } = useForm();
    const toggleResetPass = useSelector(getToggleResetPass);
    const [submitResetPass] = useResetpassMutation();
    const [debounceSubmitReset, setDebounceSubmitReset] = useState(true);
    const [stateSuccessSent, setStateSuccessSent] = useState(false);
    const handleOpenLogin = () => {
        dispatch(closeResetPassModal());
        reset();
        setStateSuccessSent(false);
        dispatch(openLoginModal());
    }
    const handleSubmitResetPass = async (data) => {
        if (debounceSubmitReset) {
            setDebounceSubmitReset(false);
        } else {
            return;
        }
        try {
            const result = await submitResetPass(data).unwrap();
            setStateSuccessSent(true);
        } catch (error) {
            if (error.status === 400) {
                setError("customError", { type: 'custom', message: error.data.message })
            } else if (error.status === 500) {
                console.log(error);
            } else {
                console.log(error);
            }
        }
        setDebounceSubmitReset(true);
    }
    const handleClearError = (typeClear) => {
        clearErrors(typeClear);
        clearErrors("customError");
    }
    const validate = {
        email: {
            onChange: (e) => handleClearError("email"),
            required: { value: true, message: "Please enter an email" },
            pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                , message: "Wrong email format"
            },
        }
    }
    return (

        <Modal
            className="modal-resetpassword"
            show={toggleResetPass}
            onHide={() => { dispatch(closeResetPassModal()); reset(); setStateSuccessSent(false) }}
        >
            <form onSubmit={handleSubmit(handleSubmitResetPass)}>
                <Modal.Header
                    className="bg-transparent"
                    closeButton
                ><p className="m-0 fs-5 fw-bold">Reset Password</p></Modal.Header>
                <Modal.Body className="d-flex justify-content-center flex-column">
                    <label htmlFor="email-reset">Email</label>
                    <input id="email-reset" className="form-control mb-3" placeholder="example@xyz.commmmm"
                        {...register("email", validate.email)}
                    ></input>
                    <p className="notify text-danger m-0">{errors.email && errors.email.message}</p>
                    <p className="notify text-danger m-0">{errors.customError && errors.customError.message}</p>
                    <p>Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    {stateSuccessSent && <p className="text-success">We have sent a confirmation email to the email address you provided. Please check your email</p>}
                    <div className="d-flex w-100 flex-column gap-2">
                        {
                            debounceSubmitReset ?
                                <Button variant="danger" type="submit" className="w-100 fw-bold py-3">
                                    Reset Password
                                </Button>
                                : <LoadCircle />
                        }
                        <Button variant="link" style={{ textDecoration: "none", color: 'rgb(47 47 47)' }} onClick={handleOpenLogin}>Already an account ? <span className="fw-bold" >Log in</span></Button>
                    </div>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default ResetPasswordModal;