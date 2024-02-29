import { Navbar } from "../utilsComponent/Navbar";
import InventoryFrame from "./InventoryFrame";
import "../../scss/inventorypageStyle.scss";
const BackpackPage = () => {
    return (
        <div className="container-fluid mx-auto position-relative p-0 m-0" style={{ minWidth: '250px' }}>
            <Navbar />
            <InventoryFrame />
        </div>
    )
}

export default BackpackPage;