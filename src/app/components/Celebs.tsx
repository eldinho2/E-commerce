import Image from "next/image";

import styles from "../styles/celebs.module.css";

const Celebs = () => {
  return (
    <section className={styles.section_containter}>
      <h1 className={styles.section_title}>
        Celebridades <span className={styles.title_border}>que você ama</span>,
        amam a gente
      </h1>
      <div className={styles.celebs_wrapper}>
        <div className={styles.celebs1row}>
          <div className={styles.celeb1_container}>
            <Image
              src={"/celebs/celeb1.svg"}
              alt="celeb1"
              width={300}
              height={300}
              className={styles.celeb_image}
            />
          </div>
          <div className={styles.celeb1_container}>
            <Image
              src={"/celebs/celeb2.svg"}
              alt="celeb2"
              width={300}
              height={300}
              className={styles.celeb_image}
            />
          </div>

          <div className={styles.celeb1_container}>
            <Image
              src={"/celebs/celeb3.svg"}
              alt="celeb3"
              width={300}
              height={300}
              className={styles.celeb_image}
            />
          </div>

          <div className={styles.celeb1_container}>
            <Image
              src={"/celebs/celeb4.svg"}
              alt="celeb4"
              width={300}
              height={300}
              className={styles.celeb_image}
            />
          </div>
        </div>
        <div className={styles.celebs2row}>
          <div className={styles.celeb2_container}>
            <Image
              src={"/celebs/celeb5.svg"}
              alt="celeb5"
              width={400}
              height={300}
              className={styles.celeb_image}
            />
          </div>
          <div className={styles.celeb2_container}>
            <Image
              src={"/celebs/celeb6.svg"}
              alt="celeb6"
              width={400}
              height={300}
              className={styles.celeb_image}
            />
          </div>
          <div className={styles.celeb2_container}>
            <Image
              src={"/celebs/celeb7.svg"}
              alt="celeb7"
              width={400}
              height={300}
              className={styles.celeb_image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Celebs;
