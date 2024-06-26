import styles from './Welcome.module.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import Main from 'widgets/Sections/Main'
import Photo from 'widgets/Sections/Photo'
import Printing from 'widgets/Sections/Printing'
import Stamps from 'widgets/Sections/Stamps'
import WoodArt from 'widgets/Sections/WoodArt'
import WelcomeAnimation from 'widgets/WelcomeAnimation'

const Welcome = () => {
    const [animActive, setAnimActive] = useState<Boolean>(false)


    let location = useLocation();
    console.log(location);
    return (
        <>
            {
                animActive ? <WelcomeAnimation setAnimActive={setAnimActive} />
                    :
                    <div className={styles.sections}>
                        <Main/>
                        <Photo/>
                        <Printing/>
                        <Stamps/>
                        <WoodArt/>
                    </div>
            }
        </>

    )
}

export default Welcome