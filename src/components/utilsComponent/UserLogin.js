import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../../scss/userloginStyle.scss';
import { useLogoutMutation } from '../../redux/reducers/apiFetch';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/reducers/toggleSlice';
const UserLogin = () => {
    const dispatch = useDispatch();
    const [submitLogout] = useLogoutMutation();
    const handleLogout = async () => {
        try {
            const result = await submitLogout().unwrap();
            dispatch(userLogout());
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="frame-user-login">
            <DropdownButton data-bs-theme="dark" className='bg-none border-0' variant='none'
                title=
                {<div className='group-dropdown-user d-flex align-items-center gap-2'>
                    <div className="frame-avt">
                        <img src="" style={{ width: '40px', height: '40px' }}></img>
                    </div>
                    <div className="frame-name">
                        <p className="m-0 text-white">
                            Hung Le
                        </p>
                    </div>
                </div>}>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            </DropdownButton>

        </div>
    )
}

export default UserLogin;