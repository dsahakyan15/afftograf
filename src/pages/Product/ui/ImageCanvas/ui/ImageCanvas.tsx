// @ts-nocheck
import React, { useRef, useState, useEffect } from 'react';
import styles from './ImageCanvas.module.css'
                                                                                                                              
const ImageCanvas = (props:any) => {
    const [imageSize, setImageSize] = useState(100); // Default size is 100

    return (
        <div className={styles.imageCanvas}>
            <div className={styles.imageWrapper}>
                <img src={props.image} alt="" />
            </div>
        </div>
    );
};

export default ImageCanvas;