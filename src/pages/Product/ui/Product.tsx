import React, { useEffect, useState } from 'react'
import styles from './Product.module.css'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from 'entitles/hooks/useAppDispatch';
import { fetchCategories } from 'entitles/redux/productsSlice';
import { RootState } from 'entitles/redux/store';
import { useSelector } from 'react-redux';
import HeaderUni from 'widgets/HeaderUni';
import ImageBlock from './ImageBlock';

import { IoIosArrowDown, IoIosArrowUp, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from 'widgets/ProductCard';
import AnotherProductsCarousel from './AnotherProductsCarousel';


const Product = () => {
    const { id } = useParams();
    const productId = Number(id)
    const [prodCount, setProdCount] = useState(1)
    const [certainImage, setCertainImage] = useState('')

    if (isNaN(productId)) {
        console.log('Parameter error');
    }

    const dispatch = useAppDispatch();
    const categories = useSelector((state: RootState) => {
        return state.products.categories
    })
    const loading = useSelector((state: RootState) => {
        return state.products.loading
    })
    const error = useSelector((state: RootState) => {
        return state.products.error
    })


    const product = categories.flatMap(category => category.products ?? []).find(product => product?.id === productId);

    const anotherProducts = categories
        .flatMap(category => category.products ?? [])
        .filter(product => {
            return Number(product.id.toString().split('')[0]) === Number(productId.toString().split('')[0])
        })
        .filter(product => product?.id !== productId);

    console.log(anotherProducts, '-----')





    useEffect(() => {
        dispatch(fetchCategories())

    }, [dispatch])


    useEffect(() => {
        if (product) {
            setCertainImage(product?.image || '')
        }
    }, [product])


    return (
        <div className={styles.Product}>
            <HeaderUni />
            <div className={styles.container}>
                <div className={styles.productInfo}>
                    <ImageBlock image={certainImage} />
                    <div className={styles.productActions}>
                        <div className={styles.leftActions}>
                            <div className={styles.pricePanel}>
                                <span className={styles.productTitle}>{product?.name}</span>
                                <div className={styles.productCount}>
                                    <span>количество</span>
                                    <div
                                        className={styles.countBtns}>
                                        <IoIosArrowUp onClick={() => {
                                            if (prodCount < 999) {
                                                setProdCount(prodCount + 1)
                                            }
                                        }} className={styles.upBtn} />
                                        <IoIosArrowDown
                                            onClick={() => {
                                                if (prodCount > 1) {
                                                    setProdCount(prodCount - 1)
                                                }
                                            }}
                                            className={styles.downBtn} />
                                        {prodCount}
                                    </div>
                                </div>
                                <span className={styles.productPrice}>
                                    Цена <br /> <span>{product?.price}₽</span>
                                </span>
                            </div>
                            <div className={styles.buyBtns}>
                                <button className={styles.addCart}>В корзину</button>
                                <button title='Купить сейчас' className={styles.buyNow}><img src="https://firebasestorage.googleapis.com/v0/b/afftograf-4be9e.appspot.com/o/bag.svg?alt=media&token=b88b97f2-cc8f-484b-be8c-a62b4584b9d0" alt="buy" /></button>
                            </div>
                        </div>
                        <div className={styles.rightActions}>
                            <div className={styles.imagesPanel}>
                                <span className={styles.imagesTitle}>Виды</span>
                                <div className={styles.productImages}>
                                    <>{

                                        product?.images?.map((image) => {
                                            return <div key={image} className={styles.image}>
                                                <img src={image} alt="" />
                                            </div>
                                        })

                                    }</>

                                </div>
                            </div>
                            <div className={styles.subtitle}>
                                Краткое описание товара, пример:
                                деревянный Арангутанг - это фигурка знаменитой личности, который проводил свое прожывание в лесах с монгустами и так далее, (тут должны вписатся описания товаров, зачем используются и зачем нужны).
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.anotherProducts}>

                    <span className={styles.anotherTitle}>Другие товары из этой категории </span>
                    
                    <AnotherProductsCarousel products={anotherProducts} />
                </div>
                Product {productId}
            </div>
        </div>
    )
}

export default Product