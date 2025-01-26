import React from "react";
import "./Kon.scss";
import Footer from '../Footer/Footer'
import Bot from '../Bot/Bot'
const Kon = () => {
  return (
    <div>
      <p
        style={{
          color: "rgb(215, 215, 215)",
          position: "relative",
          bottom: "-50px",
        }}
        className="container"
      >{`Главная > Контакты`}</p>
      <div className="kon container">
        <h1>Контакты</h1>
        <div className="kon2">
          <h3>(998) 93-772-09-30</h3>
          <p>
            Пн-Пт: 10:00 до 19:00
            <br />
            Сб-Вс: заказ через корзину
          </p>
          <p>Телефоны:</p>
        </div>
      </div>
      <div className="container2">
        <div className="karta">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1535688.8301097043!2d69.24165026074219!3d41.25679469093319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1720171585590!5m2!1suz!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            aria-label="Google Map showing contact location"
          ></iframe>
          <div className="karta2">
            <div className="karkar">
              <h3>Адрес магазина</h3>
              <p>г. Москва, Дмитровское шоссе д.100с2</p>
            </div>
            <div className="karkar">
              <h3>Почта</h3>
              <p>NORNLIGHT@mail.ru</p>
            </div>
            <div className="karkar">
              <h3>Телефон</h3>
              <p>(998)93-772-09-30</p>
            </div>
            <button>Оставить заявку</button>
          </div>
        </div>
        <Bot/>
      </div>
      <Footer/>
    </div>
  );
};

export default Kon;
