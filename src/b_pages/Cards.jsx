import React from "react";
import { IMG_URL } from "../settings/global";
import eye from "../icons/visibility_20dp_BLACK_FILL0_wght400_GRAD0_opsz20.png";
import watch from "../icons/pace_16dp_BLACK_FILL0_wght400_GRAD0_opsz20.png";

const Cards = () => {
  return (
    <div className="card">
      <img className="banner_img" src={IMG_URL} alt="" />
      <div className="box">
        <h2>Web Performance: Как ускорить загрузку веб-страниц</h2>
        <p>
          Сегодня в мире веб-разработки скорость загрузки сайта играет решающую
          роль в пользовательском опыте. Каждая лишняя секунда задержки приводит
          к потерям пользователей, ухудшению позиций в поиске.
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
