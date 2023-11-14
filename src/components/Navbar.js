import '../scss/navbarStyle.scss';
import logoPokemon from '../img/logo-pokemon.png'
export const Navbar = () => {
    return (
        <nav className="navbar-frame bg-dark d-flex align-items-center">
            <div className='container d-flex align-items-center justify-content-between gap-3 p-0'>
                <div className='logo-frame'>
                    <img src={logoPokemon}></img>
                </div>
                <div className='func-frame d-flex align-items-center position-relative'>
                    <div className='func-detail d-md-block'>
                        <div className='func-btn-detail ms-auto ms-md-0 d-block d-md-flex bg-dark h-100'>
                            <button className='btn d-block mx-auto'>Home</button>
                            <button className='btn d-block mx-auto'>Home</button>
                        </div>
                        <div className='func-detail-backdrop w-100 h-100 position-absolute bg-dark d-md-none'></div>
                    </div>
                    <button className='btn btn-more-navbar close d-block d-md-none'>
                        <i class="fa-solid fa-bars fs-4"></i>
                    </button>
                </div>
            </div>
        </nav>
    )
}