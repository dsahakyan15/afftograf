import { Link, useLocation } from 'react-router-dom';

import styles from './Logo.module.css'

const Logo = () => {
    const location = useLocation().pathname;

    return (
        <div className={styles.logo}>
            <Link to='/'>
                <img className={styles.afftograf} src="https://firebasestorage.googleapis.com/v0/b/afftograf-e496c.appspot.com/o/images%2FAfftografBig.svg?alt=media&token=aa9ecafc-0415-4ae1-a538-a948788b125e" alt="Logo" />
            </Link>
            <div className={styles.divider}></div>

            {
                location === '/photo' ? <span className={styles.logoPhoto}>Фото</span> :
                    location === '/printing' ? <span className={styles.logoPhoto}>Полиграфия</span> :
                        location === '/stamps' ? <span className={styles.logoPhoto}>Печати и штампы</span> :
                            location === '/woodArt' ? <img className={styles.logoWood} src="https://firebasestorage.googleapis.com/v0/b/afftograf-e496c.appspot.com/o/images%2FWoodArt.svg?alt=media&token=6fafb519-ade0-4c8e-a1b8-876b14caedd8" alt="Wood Art" /> : null
            }
        </div>
    )
}

export default Logo