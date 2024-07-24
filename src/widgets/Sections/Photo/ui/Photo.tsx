import styles from "./Photo.module.css"


import { Link } from 'react-router-dom'


const Photo = () => {
    return (
        <div className={styles.Photo}>
            <img className={styles.background} src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/PhotoSection.png?alt=media&token=ae551ed3-1c0b-4ebf-90ff-c969ebf18bf3" alt="background" />
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