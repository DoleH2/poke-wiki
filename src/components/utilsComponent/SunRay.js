import '../../scss/sunray.scss';
const SunRay = ({ srcImg }) => {
    return (
        <div className="sun bg-white">
            <img src={srcImg} className="img-center w-100" style={{ transform: 'scale(1.5)' }}></img>
            <div className="ray_box">
                <div className="ray ray1"></div>
                <div className="ray ray2"></div>
                <div className="ray ray3"></div>
                <div className="ray ray4"></div>
                <div className="ray ray5"></div>
                <div className="ray ray6"></div>
                <div className="ray ray7"></div>
                <div className="ray ray8"></div>
                <div className="ray ray9"></div>
                <div className="ray ray10"></div>
            </div>
        </div>
    )
}

export default SunRay;