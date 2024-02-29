import { Navbar } from "../utilsComponent/Navbar";
import GachaFrame from "./GachaFrame";

const GachaPage = () => {
    return (
        <div className="container-fluid mx-auto position-relative p-0 m-0" style={{ minWidth: '330px' }}>
            <Navbar />
            <GachaFrame />
        </div>
    )
}

export default GachaPage;