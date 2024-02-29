import { useSelector, useDispatch } from "react-redux";
import { getToggleRegister } from "../../redux/selectors/toggleSelector";
import { closeRegisterModal, openLoginModal } from "../../redux/reducers/toggleSlice";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { validateEqualString } from "../../validate/validate";
import { useSignupMutation } from "../../redux/reducers/apiUser";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/button';
import LoadCircle from "./LoadCircle";




const RegisterModal = () => {
    const dispatch = useDispatch();
    const { register, reset, clearErrors, handleSubmit, watch, formState: { errors }, setError } = useForm();
    const toggleRegister = useSelector(getToggleRegister);
    const [submitRegister] = useSignupMutation();

    const [debounceSubmitRegister, setDebounceSubmitRegister] = useState(true);


    const handleOpenLogin = () => {
        dispatch(closeRegisterModal());
        reset();
        dispatch(openLoginModal());
    }

    const handleClearError = (typeClear) => {
        clearErrors(typeClear);
        clearErrors("customError");
    }

    const handleSubmitRegister = async (data) => {
        if (debounceSubmitRegister) {
            setDebounceSubmitRegister(false);
        } else {
            return;
        }
        try {
            const result = await submitRegister(data).unwrap();
            handleOpenLogin();
        } catch (error) {
            console.log(error);
            if (error.status === 400) {
                setError("customError", { type: 'custom', message: error.data.message })
            } else if (error.status === 500) {
                console.log(error);
            } else {
                console.log(error);
            }
        }
        setDebounceSubmitRegister(true);
    }

    const validateInput = {
        password: {
            onChange: (e) => handleClearError("password"),
            required: { value: true, message: "Please enter a password" },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                , message: "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character"
            }
        },
        email: {
            onChange: (e) => handleClearError("email"),
            required: { value: true, message: "Please enter an email" },
            pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                , message: "Wrong email format"
            },
        },
        repassword: {
            onChange: (e) => handleClearError("repassword"),
            required: { value: true, message: "Please enter the password again" },
            validate: () => !validateEqualString(watch("password"), watch("repassword")) ? "Password do not match" : true
        }
    }


    return (
        <Modal
            className="modal-register"
            show={toggleRegister}
            onHide={() => { dispatch(closeRegisterModal()); reset() }}
        >
            <form onSubmit={handleSubmit(handleSubmitRegister)}>
                <Modal.Header
                    className="bg-transparent"
                    closeButton
                ><p className="m-0 fs-5 fw-bold">Register</p></Modal.Header>
                <Modal.Body className="d-flex justify-content-center flex-column">
                    <label htmlFor="email-register">Email</label>
                    <input id="email-register" className="form-control" placeholder="example@xyz.com"
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
                    <p className="notify text-danger">{errors.customError && errors.customError.message}</p>
                </Modal.Body>
                <Modal.Footer className="border-0">
                    <div className="d-flex w-100 flex-column gap-2">
                        {
                            debounceSubmitRegister ?
                                <Button type="submit" variant="danger" className="w-100 fw-bold py-3"
                                >Sign up</Button>
                                : <LoadCircle />
                        }

                        <Button variant="link" style={{ textDecoration: "none", color: 'rgb(47 47 47)' }} onClick={handleOpenLogin}>Already an account ? <span className="fw-bold" >Log in</span></Button>
                    </div>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default RegisterModal;