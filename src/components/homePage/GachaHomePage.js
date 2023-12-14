import Button from 'react-bootstrap/esm/Button';
import pokeball from '../../img/pokeball-close.png';
import { useDispatch } from 'react-redux';
import { openLoginModal } from '../../redux/reducers/toggleSlice';
const GachaHomePage = () => {
    const dispatch = useDispatch();
    return (
        <div className="frame-gacha-home-page bg-dark rounded shadow">
            <div className="row mt-5">
                <div className="col-12 col-md-6 m-auto">
                    <div className='gacha-ball-homepage py-0 py-md-5 d-flex align-items-center justify-content-center'>
                        <img src={pokeball} className='w-50'></img>
                    </div>
                </div>
                <div className="col-12 col-md-6 m-auto">
                    <div className='content-gacha-homepage p-2'>
                        <p className='m-0 h3 text-white'>Which pokemon is for you?</p>
                        <p className='m-0 text-white'>Random a Pokemon</p>
                        <Button variant="danger"
                            className="rounded-0 mt-4"
                            onClick={() => dispatch(openLoginModal())}>
                            Try Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GachaHomePage;