import styles from "./Photo.module.css"


import { Link } from 'react-router-dom'


const Photo = () => {
    return (
        <div className={styles.Photo}>
            <img className={styles.background} src="https://firebasestorage.googleapis.com/v0/b/afftograf-e496c.appspot.com/o/images%2FPhotoSection.png?alt=media&token=ccb7ef24-3ad3-4c77-b197-7e2680e90ca4" alt="background" />
            <div className={styles.content}>
                <span className={styles.title}>Фото</span>
                <span className={styles.about}>Это услуга фотосъемки для документов. При нужды вы можете прийти на фотосьемку. После того, как вас сфотографируют, фотографию обработают и вы получите электронную копию своей фотографии, после чего сможете просто печатать ее, не потратить время на съемку еще раз и не переплачивать. </span>
                <Link to='/photo'>
                    <span className={styles.link}>Ознакомится с услугой подробнее</span>
                </Link>

            </div>
        </div>
    )
}

export default Photo