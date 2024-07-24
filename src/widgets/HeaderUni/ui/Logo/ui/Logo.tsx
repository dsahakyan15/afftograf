import { Link, useLocation } from 'react-router-dom';

import styles from './Logo.module.css'

const Logo = () => {
    const location = useLocation().pathname;

    return (
        <div className={styles.logo}>
            <Link to='/'>
                <img className={styles.afftograf} src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/AfftografBig.svg?alt=media&token=48a52a85-1071-4e1d-97fc-f24982b8d858" alt="Logo" />
            </Link>
            <div className={styles.divider}></div>

            {
                location === '/photo' ? <span className={styles.logoPhoto}>Фото</span> :
                    location === '/printing' ? <span className={styles.logoPhoto}>Полиграфия</span> :
                        location === '/stamps' ? <span className={styles.logoPhoto}>Печати и штампы</span> :
                            location === '/woodArt' ? <img className={styles.logoWood} src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/WoodArt.svg?alt=media&token=68fde309-08d2-4e5d-8096-cf7f71a55304" alt="Wood Art" /> : null
            }
        </div>
    )
}

export default Logo