import IndoorPlantsFilter from "./IndoorPlantsFilter"
import OutdoorPlantsFilter from "./OutdoorPlantsFilter"

import Link from "next/link"

import styles from '@/app/styles/filter.module.css'

const Filter = () => {
  return (
    <aside className={styles.filter_container}>
      <div className={styles.filter_options}>
        <Link href={'/shop'}>
        <h1>Todas as Categorias</h1>
        </Link>
        <IndoorPlantsFilter />
        <OutdoorPlantsFilter />
      </div>
    </aside>
  )
}

export default Filter;