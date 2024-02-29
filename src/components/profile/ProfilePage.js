import { Navbar } from "../utilsComponent/Navbar";
import ProfileFrame from "./ProfileFrame";

const ProfilePage = () => {
    return (
        <div className="container-fluid mx-auto position-relative p-0 m-0" style={{ minWidth: '250px' }}>
            <Navbar />
            <ProfileFrame />
        </div>
    )
}

export default ProfilePage;