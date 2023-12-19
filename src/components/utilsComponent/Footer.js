import '../../scss/footerStyle.scss';
const Footer = () => {
    return (
        <div className="container-fluid bg-white mt-3 frame-footer p-3">
            <div className='polygon-footer'>
                <div className='frame-info-footer d-flex justify-content-between'>
                    <div className='d-flex flex-column justify-content-center'>
                        <p className='fw-bold'>Owner</p>
                        <p>HungLV2185</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center'>
                        <p className='fw-bold'>Data</p>
                        <p>PokeApi</p>
                    </div>
                </div>
                <div className='w-100'>
                    <p className='text-center m-0'>Trang web là dự án cá nhân</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;