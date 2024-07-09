import React from 'react'
import styles from './Printing.module.css'
import HeaderUni from 'widgets/HeaderUni'

const Printing = (props: any) => {
  return (
    <div className={styles.Printing}>
      <HeaderUni />
      <div className={styles.container}>
        <div className={styles.banner}>
          <span className={styles.bannerTitle}>Полиграфия</span>
          <span className={styles.bannerBio}>Ксерокс и производство печатной продукций:
            визитки, буклеты, листовки и так дале.</span>
        </div>
      </div>
    </div>
  )
}

export default Printing