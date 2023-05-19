"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

import Profile from "./Profile";
import Cart from "./Cart";

import { useSelector } from "react-redux";

import styles from "../styles/header.module.css";
import { RootState } from "../GlobalRedux/store";

const Header = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const localStorageCart = useSelector((state: RootState) => state.cart.items);  

  useEffect(() => {
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
    }, 90);
  }, [localStorageCart]);

  return (
    <div className={styles.header_wrapper}>
      <div className={styles.mini_header}>
        <span>
          Use o codigo FIRST50 para 50% de disconto na sua primeira compra!
        </span>
      </div>
      <header className={styles.header_container}>
        <Link href="/">
          <div className={styles.header_logo}>
            <Image
              src="/mainpage/PAP Logo.svg"
              alt="logo"
              width={133}
              height={51}
              priority={true}
              quality={100}
            />
          </div>
        </Link>
        <nav>
          <ul className={styles.ul_container}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="/shop">Plantas</Link>
            </li>
            <li>
            <Link href="/shop/planters">Vasos</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.search_wrapper}>
          <AiOutlineSearch />
          <input type="text" placeholder="Buscar" />
        </div>

        <div className={styles.infos}>
          <Profile />
          <div className={styles.cart_notification_wrapper}>
            <div
              className={`${
                isAnimated
                  ? styles.cart_notification_animated
                  : styles.cart_notification
              }`}
            >
              <p className={styles.cart_total}>{localStorageCart.length}</p>
            </div>
            <Cart />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
