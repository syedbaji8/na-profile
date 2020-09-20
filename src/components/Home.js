import React from 'react';

const Home = (props) => {
    return (
        <div className="col-lg-12 p-0 d-flex flex-row flex-wrap align-items-center justify-content-center h-100 to-top align-content-center">
            <div className="col-lg-12 p-0 mx-auto profile-pic-block mb-3 bs-1 d-block d-lg-none">
                <img className="img-fluid w-100" src={process.env.PUBLIC_URL + '/images/pro-1.JPG'} alt="logo" />
            </div>
            <div className="col-lg-12 p-0 text-center">
                <h1 className="">Syed Baji Shaik</h1>
                <h4>Front end Developer</h4>
            </div>
        </div>
    );
}

export default Home;
