import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import PageNotFound from './components/PageNotFound'


function App(props) {
  const theme = 'dark'
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const [device, setdevice] = useState(false);
  // const [mobnav, setmobnav] = useState('');
  const [menuBool, setmenuBool] = useState(false);
  const [rendercomponent, setrendercomponent] = useState('Home');
  const [containerHeight, setcontainerHeight] = useState(null);
  const sectionHeightStyle = {
    'height': windowHeight
  }
  const containerHeightStyle = {
    'height': containerHeight
  }
  const onToggleMenuClick = (bool) => {
    setmenuBool(!bool)
    console.log(bool)
  }
  const onClickGotoComponentFn = (param) => {
    setrendercomponent(param);
    setmenuBool(false)
  }
  useEffect(() => {
    const windowWidthInit = () => {
      if(windowWidth < 769){
        setdevice(true)
      }else{
        setdevice(false)
      }
    }
    windowWidthInit();
    setcontainerHeight(windowHeight - (windowWidth < 769?96:192))
  },[])
  return (
    <div className="app-wrapper bg-gradient">
      <header className="d-block d-lg-none">
        <button className="navv-toggle-button" onClick={() => {onToggleMenuClick(menuBool)}}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <section className={`main-section theme-${theme}`} style={sectionHeightStyle}>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-lg-12 p-3 p-lg-5 gap-around d-flex flex-row flex-wrap align-items-stretch justify-content-between">
              <div className={`main-card p-0 col-lg-12 d-flex flex-row flex-wrap align-items-stretch justify-content-between bg-theme br-30`}>
                <div className={`col-lg-3 pr-5 pl-3 py-4 p-lg-5 left-block ${device?'mobile bg-theme':'desktop'} ${menuBool?'on-open':'on-close'}`} style={{'right': !menuBool?-windowWidth:'-20px'}}>
                  <div className="col-lg-12 p-0">
                    <div className="col-lg-12 p-0 mx-auto profile-pic-block mb-3 bs-1">
                      <img className="img-fluid w-100" src={process.env.PUBLIC_URL + '/images/pro-1.JPG'} alt="logo" />
                    </div>
                    <div className="col-lg-12 p-0 pb-4 profile-details-block text-center">
                      <h2 className="name text-bold m-0 mb-3 font-20 font-lg-24">Syed Baji Shaik</h2>
                      <h4 className="designation font-14 font-lg-16 m-0">Front end Developer</h4>
                    </div>
                    <div className="col-lg-12 p-0 pb-4 mobile-navigation-block d-block d-lg-none">
                      <Navigation active={rendercomponent} onClickGotoComponentFn={onClickGotoComponentFn} />
                    </div>
                    <div className="col-lg-12 p-0 pb-4 profile-social-block d-flex justify-content-center flex-row flex-wrap font-16 font-lg-24">
                      <Link className="social-icon mx-2" to="/">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                      <Link className="social-icon mx-2" to="/">
                        <i className="fa fa-twitter"></i>
                      </Link>
                      <Link className="social-icon mx-2" to="/">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </div>
                    <div className="col-lg-12 p-0 pb-3 profile-details-block text-center">
                      <button className="btn border text-white">Download CV</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 pt-5 p-3 py-lg-5 pr-lg-3 pl-lg-5 right-block card-bg br-30">
                  <div className="col-lg-12 p-0 content-container pr-lg-4" style={containerHeightStyle}>
                    {rendercomponent === 'Home'?<Home />:rendercomponent === 'About'?<About />:rendercomponent === 'Resume'?<Resume />:rendercomponent === 'Portfolio'?<Portfolio />:rendercomponent === 'Contact'?<Contact />:<Home />}
                  </div>
                </div>
                <div className="col-lg-1 p-0 last-block desktop-navigation-block br-30 d-none d-lg-block">
                  <Navigation active={rendercomponent} onClickGotoComponentFn={onClickGotoComponentFn} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
