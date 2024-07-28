import styles from './Photo.module.css'
import HeaderUni from 'widgets/HeaderUni'
import DataTable from './DataTable';
import { useState } from 'react';
import { Link } from 'react-router-dom';
type Props = {}

const Photo = (props: Props) => {

  const [tableHide, setTableHide] = useState(false)


  return (
    <div className={styles.Photo}>
      <HeaderUni />
      <div className={styles.container}>
        <div className={styles.cards}>
          <div onClick={() => { setTableHide(!tableHide) }} className={styles.cardFirst}>
            <span className={styles.cardTitle}>Узнать цену съемки фотографии для документов</span>
          </div>
          {tableHide ? <DataTable /> : null}
          <Link to='/printing#photo'>
            <div className={styles.cardSecond}>
              <span className={styles.cardTitle}>Отправить готовую фотографию сразу на печать</span>
            </div>
          </Link>
          <div className={styles.infoDesk}>
            <span>
              После того, как вас сфотографировали ваша фотография останется в нашем архиве или при желании вы получите электронную версию своей фотографии, который вы потом сможете просто отправить на печать и не потратить время.<br />
              После того, как вы отправили фотографию на печать, вам только останется прийти и забрать фотографию.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photo