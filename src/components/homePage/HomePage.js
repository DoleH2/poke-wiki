import ButtonFunc from "./ButtonFunc";
import '../../scss/homepageStyle.scss';
import SendMessage from "../../apiFacebook/SendMessage";
import MenuShow from "../utilsComponent/MenuShow";
const HomePage = () => {
    return (
        <div className="container frame-home-page d-flex pt-5 flex-wrap justify-content-center p-3 gap-2"
            style={{ maxWidth: '600px' }}>
            {/* <ButtonFunc
                className="frame-button list-pokemon-btn rounded-3"
                text="List Pokemon"
            />
            <ButtonFunc
                className="frame-button compare-btn rounded-3"
                text="Compare Pokemon"
            /> */}
            <MenuShow />
            <SendMessage idFB={"812074489154828"} />
        </div>
    )
}

export default HomePage;