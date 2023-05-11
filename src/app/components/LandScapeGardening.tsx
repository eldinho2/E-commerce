import styles from "../styles/landScapeGardening.module.css";
import Image from "next/image";

const LandScapeGardening = () => {
  return (
    <section className={styles.section_containter}>
      <div className={styles.content_wrapper}>
      <div className={styles.text_container}>
        <h1 className={styles.tittle}>
         <span>Paisagismo</span><span> no seu Jardim</span>
        </h1>
        <p>
        Seja cultivando sua própria comida ou instalando um jardim em seu telhado, nós fornecemos serviços de paisagismo de alta qualidade, contribuindo para um mundo mais verde e para uma vida substancial!
        </p>
        <p>Agende seu serviço hoje mesmo!</p>
        <span className={styles.warning_text}>*Serviço disponível apenas nas redondezas</span>
        <button className={styles.button}>
          Agendar
        </button>
      </div>
      <div>
        <Image src={'/landscape.svg'} alt="landscape" width={500} height={400} />
      </div>
      </div>
    </section>
  );
};

export default LandScapeGardening;
