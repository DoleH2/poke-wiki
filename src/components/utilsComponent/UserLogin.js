import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../../scss/userloginStyle.scss';

import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/reducers/toggleSlice';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../redux/reducers/apiMember';
const UserLogin = () => {
    let navigate = useNavigate();
    const changeRouter = (path, data) => {
        navigate(path, { state: data });
    };
    const dispatch = useDispatch();
    const [submitLogout] = useLogoutMutation();
    const handleLogout = async () => {
        try {
            const result = await submitLogout().unwrap();
            dispatch(userLogout());
            changeRouter("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="frame-user-login">
            <DropdownButton data-bs-theme="dark" className='bg-none border-0' variant='none'
                title=
                {
                    <div className='group-dropdown-user d-flex align-items-center gap-2'>
                        <div className="frame-name">
                            <p className="m-0 text-white">
                                Hung Le
                            </p>
                        </div>
                    </div>
                }>
                <Dropdown.Item
                    onClick={() => changeRouter("/profile")}
                >Profile</Dropdown.Item>
                <Dropdown.Item
                    onClick={() => changeRouter("/inventory/1")}
                >Inventory</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            </DropdownButton>

        </div>
    )
}

export default UserLogin;