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
        <div className={styles.tableBar}>
            <div className={styles.barItemFirst}>
                <p>3,5x4,5</p>
            </div>
            <div className={styles.barItemL}>
                <p className={styles.barItemTitle}>Российский паспорт</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>4</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>Глянец</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTabPrice}>300,00 ₽</p>
            </div>
        </div>
        <div className={styles.tableBar}>
            <div className={styles.barItemFirst}>
                <p>3,5x4,5 <br /> 4x4 <br /> 4x4,5</p>
            </div>
            <div className={styles.barItemL}>
                <p className={styles.barItemTitle}>Удостоверения</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>4</p>
                <p className={styles.barItemTab}>6</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>Матовый</p>
                <p className={styles.barItemTab}>Матовый</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTabPrice}>300,00 ₽</p>
                <p className={styles.barItemTabPrice}>350,00 ₽</p>
            </div>
        </div>
        <div className={styles.tableBar}>
            <div className={styles.barItemFirst}>
                <p>4,5x6 <br /> 4x6 <br /> 5x6 <br /> 6x7</p>
            </div>
            <div className={styles.barItemL}>
                <p className={styles.barItemTitle}>
                    Удостоверения <br />
                    Справки <br />
                    Другие документы 
                </p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>3</p>
                <p className={styles.barItemTab}>4</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>Матовый</p>
                <p className={styles.barItemTab}>Матовый</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTabPrice}>280,00 ₽</p>
                <p className={styles.barItemTabPrice}>300,00 ₽</p>
            </div>
        </div>
        <div className={styles.tableBar}>
            <div className={styles.barItemFirst}>
                <p>9x12</p>
            </div>
            <div className={styles.barItemL}>
                <p className={styles.barItemTitle}>
                    Личное дело
                </p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>1</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>Матовый</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTabPrice}>300,00 ₽</p>
            </div>
        </div>
        <div className={styles.tableBar}>
            <div className={styles.barItemFirst}>
                <p>10x15</p>
            </div>
            <div className={styles.barItemL}>
                <p className={styles.barItemTitle}>
                    Анкеты и др.
                </p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>1</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTab}>Мат/Глянец</p>
            </div>
            <div className={styles.barItemS}>
                <p className={styles.barItemTabPrice}>330,00 ₽</p>
            </div>
        </div>
    </div>
}

export default DataTable
