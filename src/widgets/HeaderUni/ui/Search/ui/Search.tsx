import React, { useRef, useEffect } from 'react';
import { FaSistrix } from 'react-icons/fa6';
import styles from './Search.module.css';
import FoundItem from './FoundItem';

type Props = {
    setSearchOn: any;
};

const Search = (props: Props) => {
    const searchBlock = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const hideSearchBlock = (event: MouseEvent) => {
            if (searchBlock.current && event.target instanceof Node && !searchBlock.current.contains(event.target)) {
                props.setSearchOn(false);
                
            }
        };

        document.addEventListener('mousedown', hideSearchBlock);

        return () => {
            document.removeEventListener('mousedown', hideSearchBlock);
        };
    }, [props.setSearchOn]);

    return (
        <div className={styles.Search}>
            <div ref={searchBlock} className={styles.searchBar}>
                <div className={styles.searchHead}>
                    <label htmlFor="search" className={styles.searchIcon}>
                        <FaSistrix />
                    </label>
                    <input type="text" id="search" placeholder="Поиск" className={styles.input} />
                </div>
                <div className={styles.searchBody}>
                    <FoundItem id={1} />
                    <div className={styles.dividerLine}></div>
                    <FoundItem id={1} />
                </div>
            </div>
        </div>
    );
};

export default Search;
