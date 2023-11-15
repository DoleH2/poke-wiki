import '../scss/loadcirclestyle.scss';
import imgPokemon from '../img/btn-search.png';
const LoadCircle = () => {
    return (
        <div className='frame-loading d-flex align-items-center justify-content-center w-100'>
            <div className="load m-0 mx-auto">
                <img src={imgPokemon} className='w-100'></img>
            </div>
        </div>
    )
}

export default LoadCircle;