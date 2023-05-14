import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

import Profile from "./Profile";
import Cart from "./Cart";


import styles from "../styles/header.module.css"

const Header = () => {
  return (
    <div className={styles.header_wrapper}>
    <div className={styles.mini_header}>
      <span>Use o codigo FIRST50 para 50% de disconto na sua primeira compra!</span>
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
            <a href="">Plantas</a>
          </li>
          <li>
            <a href="">Vasos</a>
          </li>
          <li>
            <a href="">Essencial</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
        </ul>
      </nav>
      <div className={styles.search_wrapper}>
          <AiOutlineSearch />
        <input type="text" placeholder="Buscar" />
      </div>

      <div className={styles.infos}>
          <Profile />
          <Cart />
      </div>
    </header>
    </div>
  );
};

export default Header;
