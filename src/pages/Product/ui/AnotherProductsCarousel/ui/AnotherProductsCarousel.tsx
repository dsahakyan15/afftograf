import React, { useEffect, useRef, useState } from 'react'
import styles from './AnotherProductsCarousel.module.css'
import ProductCard from 'widgets/ProductCard'
import { product } from 'entitles/redux/interfaces'

const AnotherProductsCarousel = (props: any) => {

    const { products } = props
    const carouselRef = useRef<HTMLDivElement>(null)

    const [leftSide, setLeftSide] = useState(0)
    const [flagRotates, setFlagRotates] = useState(0)
    const [widthCarousel, setWidthCarousel] = useState(0)
    const maxRotate = Math.ceil(widthCarousel / 1434)

    const handleToRight = (event: any) => {
        if (flagRotates + 1 <= maxRotate) {
            setFlagRotates(flagRotates + 1)
        }
    }
    const handleToLeft = (event: any) => {
        if (flagRotates > 0) {
            setFlagRotates(flagRotates - 1)
        }
    }
    useEffect(() => {
        setLeftSide(flagRotates * 1434)

    }, [flagRotates])

    useEffect(() => {
        if (carouselRef.current) {
            setWidthCarousel(carouselRef.current.offsetWidth)
        }
    }, [])
    console.log('width', widthCarousel, 'right', leftSide, 'flag', flagRotates)
    return (
        <div className={styles.productsSliderContainer}>
            <>{flagRotates > 0 ?
                <div
                    className={styles.leftArrowSlider}
                    onClick={handleToLeft}>
                    <img
                        className={styles.leftArrowSliderIcon}
                        alt=''
                        src='https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/leftArrow.svg?alt=media&token=1b838219-ffde-431a-9b87-7903904aceb2' />
                </div> : null

            }</>
            <div className={styles.wrappeerSlider}>
                <div
                    ref={carouselRef} style={{ right: leftSide + 'px' }}
                    className={styles.productsSlider}>
                    <>{
                        products.map((product: product) => {
                            return <ProductCard image={product?.image} images={product?.images} id={product?.id} name={product?.name} price={product?.price} subtitle={product?.subtitle} />
                        })
                    }
                    </>
                </div>
            </div>
            <>{maxRotate>1 ? 
            <div
                className={styles.rightArrowSlider}
                onClick={handleToRight}>
                <img
                    className={styles.rightArrowSliderIcon}
                    alt=''
                    src='https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/rightArrow.svg?alt=media&token=2113f142-7321-4f5f-9fe0-1c151b471637' />
            </div> : null

            }</>
        </div>
    )
}

export default AnotherProductsCarousel