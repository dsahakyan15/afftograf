import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import styles from './Menu.module.css'
import WoodArt from 'shared/svg/WoodArt.svg'

const Menu = () => {
    const location = useLocation().pathname;


    return (
        <div className={styles.menu}>
            <div className={styles.mainLinks}>

                {
                    location === '/photo' ?
                        null
                        :
                        <>
                            <Link to="/photo">
                                <span className={styles.mainLink}>
                                    Фото
                                </span>
                            </Link>
                            <div className={styles.divider}></div>
                        </>

                }

                {
                    location === '/printing' ?
                        null
                        :
                        <>
                            <Link to="/printing">
                                <span className={styles.mainLink}>
                                    Полиграфия
                                </span>
                            </Link>
                            <div className={styles.divider}></div>
                        </>

                }

                {
                    location === '/stamps' ?
                        null
                        :
                        <>
                            <Link to="/stamps">
                                <span className={styles.mainLink}>
                                    Печати и штампы
                                </span>
                            </Link>
                           {
                            // if there is a woodart page
                            location === '/woodArt' ? null : <div className={styles.divider}></div>
                           }
                        </>

                }

                {
                    location === '/woodArt' ?
                        null
                        :
                        <>
                            <Link to="/woodArt">
                                <span className={styles.mainLink}>
                                    <img className={styles.wood} src={WoodArt} alt="Wood Art" />
                                    
                                </span>
                            </Link>
                        </>

                }
            </div>
        </div>
    )
}

export default Menu