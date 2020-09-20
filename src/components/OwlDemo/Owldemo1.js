import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owlstyles.css'
class Owldemo1 extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid p-0'>
                    <OwlCarousel items={1}
                        className="owl-theme"
                        loop={false}
                        nav={false}
                        dots={false}
                        margin={0} autoplay={false}>
                        <div className="col-lg-12 p-0 m-0 d-flex flex-row flex-wrap align-items-start justify-content-between">
                            <div className="col-lg-3 p-2">
                                <div className="col-lg-12 p-0 item-img-block">
                                    <img alt="sampeimage" className="img" src={process.env.PUBLIC_URL + '/images/livayur.png'} />
                                    <div className="p-0 on-over-work-item">
                                        <a className="d-flex flex-row flex-wrap align-items-center justify-content-center h-100" href="https://livayur.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-external-link-square font-30"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-2">
                                <div className="col-lg-12 p-0 item-img-block">
                                    <img alt="sampeimage" className="img" src={process.env.PUBLIC_URL + '/images/home-clearance-premium.jpg'} />
                                    <div className="p-0 on-over-work-item">
                                        <a className="d-flex flex-row flex-wrap align-items-center justify-content-center h-100" href="https://www.homeclearance.com.au/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-external-link-square font-30"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-2">
                                <div className="col-lg-12 p-0 item-img-block">
                                    <img alt="sampeimage" className="img" src={process.env.PUBLIC_URL + '/images/nabler.png'} />
                                    <div className="p-0 on-over-work-item">
                                        <a className="d-flex flex-row flex-wrap align-items-center justify-content-center h-100" href="https://www.nabler.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-external-link-square font-30"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-2">
                                <div className="col-lg-12 p-0 item-img-block">
                                    <img alt="sampeimage" className="img" src={process.env.PUBLIC_URL + '/images/prathima.png'} />
                                    <div className="p-0 on-over-work-item">
                                        <a className="d-flex flex-row flex-wrap align-items-center justify-content-center h-100" href="https://prathimahospitals.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-external-link-square font-30"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-2">
                                <div className="col-lg-12 p-0 item-img-block">
                                    <img alt="sampeimage" className="img" src={process.env.PUBLIC_URL + '/images/myearth.png'} />
                                    <div className="p-0 on-over-work-item">
                                        <a className="d-flex flex-row flex-wrap align-items-center justify-content-center h-100" href="/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-external-link-square font-30"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-2">
                                <div className="col-lg-12 p-0 item-img-block">
                                    <img alt="sampeimage" className="img" src={process.env.PUBLIC_URL + '/images/tys361.png'} />
                                    <div className="p-0 on-over-work-item">
                                        <a className="d-flex flex-row flex-wrap align-items-center justify-content-center h-100" href="http://www.tys361.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-external-link-square font-30"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-2">
                                <div className="col-lg-12 p-0 item-img-block">
                                    <img alt="sampeimage" className="img" src={process.env.PUBLIC_URL + '/images/sitasurgicals.png'} />
                                    <div className="p-0 on-over-work-item">
                                        <a className="d-flex flex-row flex-wrap align-items-center justify-content-center h-100" href="http://sitasurgicals.in/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-external-link-square font-30"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 p-2">
                                <div className="col-lg-12 p-0 item-img-block">
                                    <img alt="sampeimage" className="img" src={process.env.PUBLIC_URL + '/images/ammaphysiotherapy.png'} />
                                    <div className="p-0 on-over-work-item">
                                        <a className="d-flex flex-row flex-wrap align-items-center justify-content-center h-100" href="https://ammaphysiotherapy.com/" target="_blank" rel="noopener noreferrer">
                                            <i className="fa fa-external-link-square font-30"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}
export default Owldemo1  