import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const contacts = [
    "Контакты: 0706 72 00 10 / 0502 43 44 43",
    "Адрес: г. Талас, ул. Манаса 124",
  ];

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard: " + text);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <>
      <header>
        <div className="header__container container">
          <a className="logo" href="/">
            it-SERVICE
          </a>
          <ul>
            <li>Справочники</li>
            <li>Контакты</li>
          </ul>
          <div className="btns">
            <button className="btn-white">Войти</button>
            <button className="btn-red">Регистрация</button>
          </div>
        </div>
        {/* <a className="logo" href="/">
            it-SERVICE
          </a>
          <div className="contacts">
            <div></div>
            <nav>
              <nav className="contacts">
                {contacts.map((contact, index) => (
                  <div
                    onClick={() => handleCopy(contact)}
                    style={{ cursor: "pointer" }}
                    className="nav-links"
                    key={index}
                  >
                    {contact}
                  </div>
                ))}
              </nav>
            </nav>
          </div> */}
      </header>

      <nav className="navigator">
        <ul>
          <li>
            <Link to="/">Услуги</Link>
          </li>
          <li>
            <Link to="/site-development">Разработка сайта</Link>
          </li>
          <li>
            <Link to="/repair">Ремонт</Link>
          </li>
          <li>
            <Link to="/camera">Видео-наблюдение</Link>
          </li>
          {/* <li><Link to="/products">Товары</Link></li> */}
        </ul>
      </nav>
    </>
  );
}

export default Header;
