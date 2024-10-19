import React from "react";
import { IMG_URL } from "../settings/global";
import eye from "../icons/visibility_20dp_BLACK_FILL0_wght400_GRAD0_opsz20.png";
import watch from "../icons/pace_16dp_BLACK_FILL0_wght400_GRAD0_opsz20.png";

const Cards = () => {
  const CARD_IMG = 'https://images.unsplash.com/photo-1508780709619-79562169bc64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2h8ZW58MHx8MHx8fDA%3D'

  return (
    
    <div className="card">
      <img className="banner_img" src={CARD_IMG} alt="" />
      <div className="box">
        <h2>Название услуги</h2>
        <p>
          Описание услуги тд тп текс потом
        </p>
        <div className="views">
          <img src={eye} alt="" />
          <h6>1234</h6>
        </div>
        <div className="date">
          <img src={watch} alt="" />
          <h6>16 октября 2024 в 14:20</h6>
        </div>
      </div>
    </div>
  );
};

export default Cards;
