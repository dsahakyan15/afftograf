import { Link } from 'react-router-dom'
import styles from './Printing.module.css'

const Printing = () => {
  return (
    <div className={styles.Printing}>
      <div className={styles.text}>
        <span className={styles.title}>Полиграфия</span>
        <span className={styles.pretitle}>Ксерокс и производство печатной продукций таких как визиток, буклетов, листовок и так далее.</span>

        <Link className={styles.link} to='/printing'>
          <span>Ознакомится с услугой подробнее</span>
        </Link>
      </div>

    </div>
  )
}

export default Printing