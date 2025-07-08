import styles from './FoundItem.module.css'

type Props = {
    id: number
}

const FoundItem = (props: Props) => {

    const action = 1


    return (
        <div className={styles.Item}>
            <div className={styles.itemImage}>

            </div>
            <div className={styles.itemTitle}>
                <span className={styles.category}>Категория</span>
                <span className={styles.title}>Название товара</span>
                {
                    action ?
                        <div className={styles.action}>
                            <span className={styles.prevPrice}>
                                00,00 ₽
                            </span>
                            <span className={styles.presPrice}>
                                00,00 ₽
                            </span>
                        </div> :
                        <span className={styles.price}>00,00 ₽</span>
                }


            </div>
            <div className={styles.itemPretitle}>
                Деревянный Арангутанг - это фигурка знаменитой личности, который проводил свое прожывание в лесах с монгустами и так далее, (тут должны вписатся описания товаров, зачем используются и зачем нужны).
            </div>
        </div>
    )
}

export default FoundItem