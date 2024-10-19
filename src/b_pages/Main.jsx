import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IMG_URL } from "../settings/global";
import Cards from "../a_components/Cards";

function Main() {
  return (
    <main>
      
      <div className="box-wrap">
        <Cards />
        <Cards />
       
        <Cards /><Carousel>
        <div>
          <img src={IMG_URL} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={IMG_URL} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={IMG_URL} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </main>
  );
}

export default Main;
