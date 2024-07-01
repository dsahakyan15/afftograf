import styles from './DataTable.module.css'

const DataTable = () => {
    return <div className={styles.table}>
        <div className={styles.tableHead}>

            <div className={styles.headItemS}>
                <p className={styles.headItemTitle}>Размер</p>
            </div>
            <div className={styles.headItemL}>
                <p className={styles.headItemTitle}>Назначение</p>
            </div>
            <div className={styles.headItemS}>
                <p className={styles.headItemTitle}>Количество</p>
            </div>
            <div className={styles.headItemS}>
                <p className={styles.headItemTitle}>Бумага</p>
            </div>
            <div className={styles.headItemS}>
                <p className={styles.headItemTitle}>Цена</p>
            </div>
        </div>
        <div className={styles.tableBar}>
            <div className={styles.barItemFirst}>
                <p>3x4</p>
            </div>
            <div className={styles.barItemL}>
                <p className={styles.barItemTitle}>Студ. документы, мед.справки, пропуска, гражданство, медкнижки, водительское удостоверение и т.д.</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>4</p>
                <p className={styles.barItemTab}>6</p>
                <p className={styles.barItemTab}>8</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>Матовый</p>
                <p className={styles.barItemTab}>Матовый</p>
                <p className={styles.barItemTab}>Матовый</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTabPrice}>250,00 ₽</p>
                <p className={styles.barItemTabPrice}>270,00 ₽</p>
                <p className={styles.barItemTabPrice}>300,00 ₽</p>
            </div>
        </div>
    </div>
}

export default DataTable
