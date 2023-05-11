import Image from "next/image";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import styles from "../styles/header.module.css"

const Header = () => {
  return (
    <>
    <div className={styles.mini_header}>
      <span>Use code FIRST50 for a 50% discount on your first order!</span>
    </div>
    <header className={styles.header_container}>
      <div>
        <Image
          src="/PAP Logo.svg"
          alt="logo"
          width={133}
          height={51}
          priority={true}
          quality={100}
        />
      </div>
      <nav>
        <ul className={styles.ul_container}>
          <li>
            <a href="/">Home</a>
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
          <AiOutlineShoppingCart />
          <CgProfile />
      </div>
    </header>
    </>
  );
};

export default Header;
