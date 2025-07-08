import { Link } from 'react-router-dom'
import styles from './WoodArt.module.css'

const WoodArt = () => {
    return (
        <div className={styles.WoodArt}>
            <div className={styles.head}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/WoodArt.svg?alt=media&token=68fde309-08d2-4e5d-8096-cf7f71a55304"
                    alt="Wood Art logo"
                    className={styles.logo} />
                <span
                    className={styles.pretitle}>
                    Деревянные изделия, изготовленные методом лазерной резки. </span>
                <Link
                    className={styles.link} to='/woodArt'>
                    <span>Ознакомится с услугой подробнее</span>
                </Link>
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/WoodSection.png?alt=media&token=e473dbdd-e141-4f8f-b7c4-6b4d016ff9b0"
            className={styles.wood}
            alt="picture of wood" />
        </div>
    )
}

export default WoodArt