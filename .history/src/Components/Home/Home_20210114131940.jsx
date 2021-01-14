// import logo from './logo.svg';
import "./Home.css";
// import Home from "./Components/Navigation/Navigation.jsx";
import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

const Home = ({ handleLogout }) => {
  const [viewPort, setviewPort] = useState({
    latitude: 0,
    longitude: 0,
    // width: "100%",
    // height: "27rem",
    zoom: 13,
  });

  function locationChange() {
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        var xaxis = position.coords.latitude;
        var yaxis = position.coords.longitude;
        setviewPort({ ...viewPort, latitude: xaxis, longitude: yaxis });
        console.log("Latitude: ", xaxis);
        console.log("Longitude: ", yaxis);
        // setviewPort({this:latitude,xaxis});
        // viewPort.latitude=xaxis
        // setviewPort({...viewPort,});
        console.log(viewPort);
      });
    } catch (err) {
      console.error(err.message);
    }
  }
  
  const {REACT_APP_MAPBOX_ACCESS_TOKEN} = process.env;
  

  return (
    <div>
      <section className="hero">
        <nav>
          <h2>WelCome</h2>
          <button onClick={handleLogout}>LogOut</button>
        </nav>
        <article data-name="article-full-bleed-background">
          <div className="cf tc">
            <div className=" pa3 pa4-ns  black-70 f3 times">
              <header className="bb b--black-70 pv4">
                <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">
                  User Location
                </h3>
              </header>
              <section className="pt5 pb4 w-100 h-50" id="map">
                <span id="demo" className="times lh-copy  f4 mt0">
                  <ReactMapGl
                    {...viewPort}
                    width="100%"
                    height="18rem"
                    mapboxApiAccessToken='pk.eyJ1Ijoic2F1cmF2bGFsLTIyMzMiLCJhIjoiY2tqdTQ1M2JiMDM3ZTJ5bXNiZG56dnR0OSJ9.FAPv7fR8ZCF4vEi1EdJXkg'
                    mapStyle="mapbox://styles/mapbox/dark-v10"
                    onViewportChange={(viewPort) => {
                      setviewPort(viewPort);
                    }}
                  ></ReactMapGl>
                </span>
                <button onClick={locationChange} className="">
                  Try it
                </button>
              </section>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
