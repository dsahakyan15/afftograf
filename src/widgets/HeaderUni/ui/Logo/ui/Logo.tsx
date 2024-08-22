import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Logo.module.css';

const Logo = () => {
    const location = useLocation().pathname;
    const [category, setCategory] = useState('');

    useEffect(() => {
        const pathParts = location.split('/');

        if (pathParts.length > 2 && pathParts[1] === 'product') {
            const code = pathParts[2]?.[0];
            switch (Number(code)) {
                case 1:
                    setCategory('photo');
                    break;
                case 2:
                    setCategory('printing');
                    break;
                case 3:
                    setCategory('stamps');
                    break;
                case 4:
                    setCategory('woodArt');
                    break;
                default:
                    setCategory('');
            }
        } else {
            switch (location) {
                case '/photo':
                    setCategory('photo');
                    break;
                case '/printing':
                    setCategory('printing');
                    break;
                case '/stamps':
                    setCategory('stamps');
                    break;
                case '/woodArt':
                    setCategory('woodArt');
                    break;
                default:
                    setCategory('');
            }
        }
    }, [location]);

    return (
        <div className={styles.logo}>
            <Link to='/'>
                <img className={styles.afftograf} src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/AfftografBig.svg?alt=media&token=48a52a85-1071-4e1d-97fc-f24982b8d858" alt="Logo" />
            </Link>
            <div className={styles.divider}></div>

            {category === 'photo' && <span className={styles.logoPhoto}>Фото</span>}
            {category === 'printing' && <span className={styles.logoPhoto}>Полиграфия</span>}
            {category === 'stamps' && <span className={styles.logoPhoto}>Печати и штампы</span>}
            {category === 'woodArt' && (
                <img className={styles.logoWood} src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/WoodArt.svg?alt=media&token=68fde309-08d2-4e5d-8096-cf7f71a55304" alt="Wood Art" />
            )}
        </div>
    );
};

export default Logo;
