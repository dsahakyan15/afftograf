import styles from './Photo.module.css'
import { Table } from 'react-bootstrap';
import HeaderUni from 'widgets/HeaderUni'

type Props = {}

const Photo = (props: Props) => {
  return (
    <div className={styles.Photo}>
      <HeaderUni />
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.table}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                    </tr>
                  </td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className={styles.cardFisrt}>
            <span className={styles.cardTitle}>Узнать цену съемки фотографии для документов</span>
          </div>
          <div className={styles.cardSecond}>
            <span className={styles.cardTitle}>Отправить готовую фотографию сразу на печать</span>
          </div>
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