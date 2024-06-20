import { Link } from 'react-router-dom'
import styles from './WoodArt.module.css'

const WoodArt = () => {
    return (
        <div className={styles.WoodArt}>
            <div className={styles.head}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/afftograf-e496c.appspot.com/o/images%2FWoodArt.svg?alt=media&token=6fafb519-ade0-4c8e-a1b8-876b14caedd8"
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
            <img src="https://firebasestorage.googleapis.com/v0/b/afftograf-e496c.appspot.com/o/images%2FWoodSection.png?alt=media&token=b79add3d-156a-4b21-8186-2baaf992c75a"
            className={styles.wood}
            alt="picture of wood" />
        </div>
    )
}

export default WoodArt