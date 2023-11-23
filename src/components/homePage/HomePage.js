import ButtonFunc from "./ButtonFunc";
import '../../scss/homepageStyle.scss';
import bgCompare from '../../img/bg-compare-btn.jpg';
const HomePage = () => {
    return (
        <div className="container frame-home-page d-flex flex-wrap justify-content-center p-3 gap-2"
            style={{ maxWidth: '600px' }}>
            <ButtonFunc
                className="frame-button list-pokemon-btn rounded-3"
                text="List Pokemon"
            />
            <ButtonFunc
                className="frame-button compare-btn rounded-3"
                text="Compare Pokemon"
            />

        </div>
    )
}

export default HomePage;