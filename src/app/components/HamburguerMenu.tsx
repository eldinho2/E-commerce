import React from "react";
import { useState } from "react";
import styles from "../styles/hamburguerMenu.module.css";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function HamburguerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${isOpen ? styles.hamburguerIsOpen : styles.hamburguer}`}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      {isOpen && (
        <div className={styles.hamburguerNavOpen}>
          <ul>
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <p>Plantas</p>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <p>Vasos</p>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <p>Shop</p>
              </Link>
            </li>
          </ul>
          <div className={styles.socials}>
            <a href="https://github.com/eldinho2" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/vinicius-saiao-goncalves/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
          </div>
        </div>
      )}
    </div>
  );
}

export default HamburguerMenu;
