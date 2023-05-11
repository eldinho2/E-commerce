import Image from "next/image"

import styles from "../styles/blog.module.css"

const Blog = () => {
  return (
    <section className={styles.section_containter}>
      <h1 className={styles.section_title}>Blog</h1>
      <div className={styles.section_image_container}>
          <Image src="/Blog Card 1.svg" alt="Blog Card 1" width={600} height={280} className={styles.section_image} />
          <Image src="/Blog Card 2.svg" alt="Blog Card 1" width={600} height={280} className={styles.section_image} />
      </div>
    </section>
  )
}

export default Blog;