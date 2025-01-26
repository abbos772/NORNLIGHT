import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "./img/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { TbAntennaBars5 } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../context/api/ProductApi";
import { useLocation } from "react-router-dom";
import Search from "../Search/Search";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const carts = useSelector((state) => state.cart.value);
  const Wishes = useSelector((state) => state.heart.value);
  const { data } = useGetProductsQuery();
  const [searchValue, setSearchValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  let { pathname } = useLocation();
  if(pathname.includes('/login') || pathname.includes('/admin')){
    return <></>
  } 

  useEffect(() => {
    if (data) {
      setFilterData(
        data.filter((product) =>
          product.title.toLowerCase().includes(searchValue.trim().toLowerCase())
        )
      );
    }
  }, [searchValue, data]);

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="nav__top">
            <div className="top__list">
              <ul className={burger ? "show" : ""}>
                <div className="links">
                  <Link onClick={() => setBurger(false)} to="/kompaniya">
                    О компании
                  </Link>
                  <Link onClick={() => setBurger(false)} to="/about">
                    Доставка и оплата
                  </Link>
                  <Link onClick={() => setBurger(false)} to="/return">
                    Возврат
                  </Link>
                  <Link onClick={() => setBurger(false)} to="/garant">
                    Гарантии
                  </Link>
                  <Link onClick={() => setBurger(false)} to="/contacts">
                    Контакты
                  </Link>
                  <Link onClick={() => setBurger(false)} to="/blog">
                    Блог
                  </Link>
                </div>
                <div className="media-btn">
                  <Link to="/katalogPage">
                    <button>
                      <RxHamburgerMenu />
                      Каталог
                    </button>
                  </Link>
                </div>
                <div className="top__tel">
                  <p>8 (800) 890-46-56</p>
                  <Link onClick={() => setBurger(false)}>Заказать звонок</Link>
                </div>
              </ul>
            </div>
          </div>
          <div className="nav__bottom">
            <div className="nav__logo">
              <button
                onClick={() => setBurger(!burger)}
                className="burger"
                aria-label="Toggle navigation menu"
              >
                <RxHamburgerMenu />
              </button>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="nav__inp">
              <Link to="/katalogPage">
                <button>
                  <RxHamburgerMenu />
                  Каталог
                </button>
              </Link>
              <div className="inp">
               
              <input
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
  type="search"
  placeholder="Поиск по товарам"
  aria-label="Search products"
  onFocus={() => setIsSearchFocused(true)}
  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
/>
{isSearchFocused && searchValue && (
  <div
    className="ser active"
    onMouseDown={(e) => e.preventDefault()} // onBlur'dan oldin ishlaydi
  >
    <Search filterData={filterData} />
  </div>
)}


              </div>
            </div>
            <div className="nav__icons">
              <span>
                <Link to="/wishes">
                  <CiHeart />
                  <sub className="sub">{Wishes.length}</sub>
                  <p>Избранное</p>
                </Link>
              </span>
              <span>
                <Link to="/">
                  <TbAntennaBars5 />
                  <p>Сравнение</p>
                </Link>
              </span>
              <span>
                <Link to="/cart">
                  <CiShoppingCart />
                  <sub className="sub">{carts.length}</sub>
                  <p>Корзина</p>
                </Link>
              </span>
            </div>
          </div>
          <div className="media__inp">
            <input
              type="text"
              placeholder="Поиск по товарам"
              aria-label="Search products"
            />
            <CiSearch />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
