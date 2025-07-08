import { useState } from 'react';

import { FaSistrix } from "react-icons/fa6";
import styles from './HeaderUni.module.css'

import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import UserInfo from './UserInfo';

type Props = {}

const HeaderUni = (props: Props) => {
  const [searchOn, setSearchOn] = useState<boolean>(false)


  return (
    <div className={styles.header}>

      <Logo />
      {
        searchOn ?
          <Search setSearchOn={setSearchOn} />
          :
          <Menu />
      }
      <div className={styles.personal}>

        <div
          onClick={() => setSearchOn(true)}
          className={styles.searchBtn}>
          <FaSistrix />
        </div>
        <UserInfo />
      </div>

    </div>
  )
}

export default HeaderUni