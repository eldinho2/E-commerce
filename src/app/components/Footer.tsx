import Image from "next/image";

import styles from "../styles/footer.module.css";

import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_infos}>
        <div className={styles.logo_wrapper}>
          <Image
            src={"/mainpage/footerLOGO.svg"}
            alt="footerLOGO"
            width={250}
            height={70}
          />
        </div>
        <div className={styles.links_wrapper}>
        <div>
          <h1 className={styles.list_tittle}>Links Uteis</h1>
          <ul className={styles.list}>
            <a href="">
              <li>Sobre</li>
            </a>
            <a href="">
              <li>Presentes</li>
            </a>
            <a href="">
              <li>Pedidos em Atacado</li>
            </a>
            <a href="">
              <li>Jardim Orgânico</li>
            </a>
          </ul>
        </div>
        <div>
          <h1 className={styles.list_tittle}>Legal</h1>
          <ul className={styles.list}>
            <a href="">
              <li>Termos e Condições</li>
            </a>
            <a href="">
              <li>Política de Privacidade</li>
            </a>
            <a href="">
              <li>Política de Cookies</li>
            </a>
            <a href="">
              <li>Política de Entrega</li>
            </a>
            <a href="">
              <li>Política de Cancelamento</li>
            </a>
          </ul>
        </div>
        <div>
          <h1 className={styles.list_tittle}>Suporte</h1>
          <ul className={styles.list}>
            <a href="">
              <li>Como Comprar</li>
            </a>
            <a href="">
              <li>FAQ</li>
            </a>
            <a href="">
              <li>Contato</li>
            </a>
          </ul>
        </div>
        </div>
        <div>
          <Image
            src={"/mainpage/FOOTERBadge.svg"}
            alt="FOOTERBadge"
            width={170}
            height={160}
          />
        </div>
        <div className={styles.socials}>
          <h1>© 2021 Plan A Plant All Rights Reserved</h1>
          <div>
            <a href="" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
            <a href="https://github.com/eldinho2" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/vinicius-saiao-goncalves/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
          </div>
        </div>
      </div>
      <div className={styles.mini_footer}>
        <h1>Facilitamos seus pagamentos através de gateways confiáveis</h1>
        <div>
          <Image src={"/mainpage/footerVisa.svg"} alt="visa" width={30} height={30} />
          <Image
            src={"/mainpage/footerMC.svg"}
            alt="mastercard"
            width={30}
            height={30}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
