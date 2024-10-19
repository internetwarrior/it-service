import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../settings/global";
const Description = () => {
  return (
    <div className="description">
      <div className="containerDescription container">
        <img src={IMG_URL} alt="" />
        <h2>Web Performance: Как ускорить загрузку веб-страниц</h2>
        <p>
          Сегодня в мире веб-разработки скорость загрузки сайта играет решающую
          роль в пользовательском опыте. Каждая лишняя секунда задержки приводит
          к потерям пользователей, ухудшению позиций в поиске. Многие компании
          сосредоточены на высокоуровневых аспектах оптимизации, таких как выбор
          CDN или компрессия изображений, но низкоуровневая оптимизация
          (low-level optimization) может стать настоящим ключом к значительному
          ускорению загрузки веб-страниц.
        </p>
        <Link to={"/"}>Назад</Link>
      </div>
    </div>
  );
};

export default Description;
