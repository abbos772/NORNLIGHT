import React, { useState, useEffect } from "react";
import { useGetProductByIdQuery } from "../context/api/ProductApi";
import { useParams } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ok from "./img/ok.png";
import "./SinglePage.scss";
import Footer from "../Footer/Footer";

const SinglePage = () => {
  let { id } = useParams();
  const { data: product, isLoading: isLoadingProduct } = useGetProductByIdQuery(id);
  const [count, setCount] = useState(1);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="container">
        <div className="text_global">
          <p>{`Главная >`}</p>
        </div>
        <div className="single">
          <div className="singe_img_flex">
            <div className="single_img">
              {isLoadingProduct ? (
                <Skeleton height={400} width={400} />
              ) : (
                <img src={product.img} alt="" />
              )}
            </div>
            <div className="single_minis">
              {[...Array(4)].map((_, index) => (
                <div className="single_mini" key={index}>
                  {isLoadingProduct ? (
                    <Skeleton height={80} width={80} />
                  ) : (
                    <img src={product.img} alt="" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="single_text">
            <h1>{isLoadingProduct ? <Skeleton /> : product.title}</h1>
            <div className="scot_flex">
              <div className="scot">
                <p>Scott</p>
                <p>Артикул : 7655-188</p>
                <p style={{ color: "rgb(77, 147, 44)" }}>
                  {isLoadingProduct ? <Skeleton width={80} /> : "В наличии"}
                </p>
              </div>
              <div className="scot_ok">
                <img src={ok} alt="" />
              </div>
            </div>
            <div className="sinle_price">
              <h1>
                {isLoadingProduct ? (
                  <Skeleton width={80} />
                ) : (
                  `${product.price * count}₽`
                )}
              </h1>
              <p>
                {isLoadingProduct ? (
                  <Skeleton width={80} />
                ) : (
                  `${product.price * 1.5}₽`
                )}
              </p>
            </div>
            <p className="p_text">
              {isLoadingProduct ? (
                <Skeleton count={3} />
              ) : (
                "Профессиональный гоночный хардтейл для кросс-кантри уровня Чемпионата и Кубка Мира. Одна из самых легких рам среди гоночных хардтейлов для кросс-кантри."
              )}
            </p>
            <div className="count_flex">
              <div className="count">
                <button onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
              </div>
              <button className="btn_trash">В корзину</button>
              <div className="single_like">
                <button
                  className="btn_like"
                  onClick={toggleLike}
                  style={{ color: liked ? "red" : "black" }}
                >
                  <IoMdHeartEmpty />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="optimos">
          <h1>Характеристика</h1>
          <div className="opt_boxes">
            {[
              { title: "Цвет", value: "Жёлтый" },
              { title: "Год", value: "2016" },
              { title: "Диаметр колеса", value: "27.5" },
              { title: "Материал рамы", value: "Карбон" },
              { title: "Размер", value: "L" },
              { title: "Страна", value: "Швейцария" },
              { title: "Производитель", value: "Scott" },
              {
                title: "Покрышки",
                value:
                  "Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound",
              },
              {
                title: "Рама",
                value:
                  "Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL",
              },
              {
                title: "Подседельный Штырь",
                value:
                  "Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm",
              },
              { title: "Седло", value: "Ritchey WCS Streem V3 Titanium rails" },
              {
                title: "Вилка",
                value:
                  "Rock Shox SID RL3 Air / демпфер DNA3 3-режима / 15mm QR axle / коническая рулевая труба / Удалённая блокировка, регулировка отскока / ход 100mm",
              },
            ].map((item, index) => (
              <div className="opt_box" key={index}>
                <h4>{item.title}</h4>
                <p>{isLoadingProduct ? <Skeleton width={100} /> : item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePage;
