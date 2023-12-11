import SunRay from "../utilsComponent/SunRay";
import pokeBall from '../../img/pokeball.png';
const GachaFrame = () => {
    return (
        <div className="frame-gacha-pokemon">
            <div className="mx-auto mt-5 position-relative"
                style={{ width: '100px', height: '100px' }}>
                <SunRay srcImg={pokeBall} />
            </div>
        </div>
    )
}

export default GachaFrame;