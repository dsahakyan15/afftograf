import React from 'react'
import styles from './AnotherProductsCarousel.module.css'
import ProductCard from 'widgets/ProductCard'

const AnotherProductsCarousel = (props: any) => {
    return (
        <div className={styles.productsSliderContainer}>
            <div
                className={styles.leftArrowSlider}>
                <img
                    className={styles.leftArrowSliderIcon}
                    alt=''
                    src='https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/leftArrow.svg?alt=media&token=1b838219-ffde-431a-9b87-7903904aceb2' />
            </div>
            <div className={styles.wrappeerSlider}>
                <div
                    className={styles.productsSlider}>
                    <ProductCard image={''} images={null} id={0} name={'Название товара'} price={0} subtitle={null} />
                    <ProductCard image={''} images={null} id={0} name={'Название товара'} price={0} subtitle={null} />
                    <ProductCard image={''} images={null} id={0} name={'Название товара'} price={0} subtitle={null} />
                    <ProductCard image={''} images={null} id={0} name={'Название товара'} price={0} subtitle={null} />
                    <ProductCard image={''} images={null} id={0} name={'Название товара'} price={0} subtitle={null} />
                    <ProductCard image={''} images={null} id={0} name={'Название товара'} price={0} subtitle={null} />
                    <ProductCard image={''} images={null} id={0} name={'Название товара'} price={0} subtitle={null} />
                    <ProductCard image={''} images={null} id={0} name={'Название товара'} price={0} subtitle={null} />
                    <ProductCard image={''} images={null} id={0} name={'Название товара'} price={0} subtitle={null} />
                    <ProductCard image={''} images={null} id={0} name={'Название товара'} price={0} subtitle={null} />
                </div>
            </div>

            <div
                className={styles.rightArrowSlider}>
                <img
                    className={styles.rightArrowSliderIcon}
                    alt=''
                    src='https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/rightArrow.svg?alt=media&token=2113f142-7321-4f5f-9fe0-1c151b471637' />
            </div>
        </div>
    )
}

export default AnotherProductsCarousel