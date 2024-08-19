// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react';
import styles from './ImageBlock.module.css'

const ImageBlock = (props: any) => {
    const [imageSize, setImageSize] = useState(100); // Default size is 100

    return (
        <div className={styles.ImageBlock}>
            <div className={styles.imageWrapper}>
                <img src={props.image} alt="" />
            </div>
        </div>
    );
};

export default ImageBlock;