import React from 'react';

const Navigation = (props) => {
    const {active} = props;
    console.log(active)
    return (
        <div className="col-lg-12 p-0 d-flex flex-row flex-lg-column flex-wrap justify-content-around align-items-center align-content-center py-0 py-lg-5 font-20 font-lg-24 h-100 nav-container">
            <button className={`nav-iconn p-3 mb-3 mb-lg-0 bs-1 ${active === 'Home'?'active':''}`} title="Home" onClick={() => { props.onClickGotoComponentFn('Home') }}>
                <span className="d-inline d-lg-none font-12 mr-2 mr-lg-0">Home</span>
                <i className="fa fa-home"></i>
            </button>
            <button className={`nav-iconn p-3 mb-3 mb-lg-0 bs-1 ${active === 'About'?'active':''}`} title="About" onClick={() => { props.onClickGotoComponentFn('About') }}>
                <span className="d-inline d-lg-none font-12 mr-2 mr-lg-0">About </span>
                <i className="fa fa-user"></i>
            </button>
            <button className={`nav-iconn p-3 mb-3 mb-lg-0 bs-1 ${active === 'Resume'?'active':''}`} title="Resume" onClick={() => { props.onClickGotoComponentFn('Resume') }}>
                <span className="d-inline d-lg-none font-12 mr-2 mr-lg-0">Resume </span>
                <i className="fa fa-graduation-cap"></i>
            </button>
            <button className={`nav-iconn p-3 mb-3 mb-lg-0 bs-1 ${active === 'Portfolio'?'active':''}`} title="Portfolio" onClick={() => { props.onClickGotoComponentFn('Portfolio') }}>
                <span className="d-inline d-lg-none font-12 mr-2 mr-lg-0">Portfolio </span>
                <i className="fa fa-suitcase font-18"></i>
            </button>
            <button className={`nav-iconn p-3 bs-1 ${active === 'Contact'?'active':''}`} title="Contact" onClick={() => { props.onClickGotoComponentFn('Contact') }}>
                <span className="d-inline d-lg-none font-12 mr-2 mr-lg-0">Contact </span>
                <i className="fa fa-envelope font-18"></i>
            </button>
        </div>
    );
}

export default Navigation;
