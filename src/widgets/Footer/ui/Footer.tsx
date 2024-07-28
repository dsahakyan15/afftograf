import { Link } from 'react-router-dom';
import styles from './Footer.module.css'
import { FaVk, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.text}>
                <span className={styles.info}>
                    Для оформления заказа не нужно создать аккаунт, достаточно просто ввести свои данные(номер или почта), <br />
                    куда будет отправлятся код для получения товара. Ваши данные будут сохранятся только у вас если вы этого пожелаете.<br />
                    Оплатить покупку вы будете только после получение товара. <br />
                    Заказы можно забрать по адресу: <span className={styles.strong}>Воронеж, ул. Переверткина, д26 </span> г. <br />
                    По вопросам обращаться по номеру: <span className={styles.strong}> +7 961 185-24-34</span>
                </span>
            </div>
            <div className={styles.contact}>
                <div className={styles.socials}>
                    <a href="https://vk.com/afftograff" className={styles.vkIcon}>
                        <FaVk />
                    </a>
                    <a href="https://web.whatsapp.com/send/?phone=79611852434&amp;text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C+%D1%8F+%D1%85%D0%BE%D1%82%D0%B5%D0%BB+%D0%B1%D1%8B+%D0%BF%D0%BE%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%BC+" className={styles.waIcon}>
                        <FaWhatsapp />
                    </a>
                </div>
                <Link to='/#main'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/AfftografSmallWhite.svg?alt=media&token=2585109e-5697-4dae-a05b-0b1f0754c7a2" alt="Logo Afftograf" />
                </Link>

            </div>
        </div>
    )
}

export default Footer