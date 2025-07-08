import { Link } from 'react-router-dom'
import styles from './Stamps.module.css'

const Stamps = () => {
  return (
    <div className={styles.Stamps}>
      <div className={styles.text}>
        <span className={styles.title}>Печати и штампы</span>
        <span className={styles.pretitle}>У нас вы можете найти разные виды печатей. Для того, чтобы оформить заказ вам нужно загрузить файл для изготовления печати, или фотографию печати, чтобы ее востановили. После этого вам останится только подойти в наш офис и забрать свой заказ.</span>
        <Link className={styles.link} to='/stamps'>
          <span>Ознакомится с услугой подробнее</span>
        </Link>
      </div>
      <img className={styles.stamp} src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/StampSection.png?alt=media&token=1b7ea7f0-df09-44ea-bb3f-da509af03f34" alt="Stamp of Afftograf" />
    </div>
  )
}

export default Stamps