import React, { useEffect, useState } from 'react'
import styles from './Product.module.css'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from 'entitles/hooks/useAppDispatch';
import { fetchCategories } from 'entitles/redux/productsSlice';
import { RootState } from 'entitles/redux/store';
import { useSelector } from 'react-redux';
import HeaderUni from 'widgets/HeaderUni';
import ImageCanvas from './ImageCanvas';

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Product = () => {
    const { id } = useParams();
    const productId = Number(id)

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
    console.log(product?.images);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <div className={styles.Product}>
            <HeaderUni />
            <div className={styles.container}>
                <div className={styles.productInfo}>
                    <ImageCanvas image={product?.image} />
                    <div className={styles.productActions}>
                        <div className={styles.leftActions}>
                            <div className={styles.pricePanel}>
                                <span className={styles.productTitle}>{product?.name}</span>
                                <div className={styles.productCount}>
                                    <span>количество</span>
                                    <div
                                        className={styles.countBtns}>
                                        <IoIosArrowUp className={styles.upBtn} />
                                        <IoIosArrowDown className={styles.downBtn} />
                                        1
                                    </div>
                                    {/* //TODO */}
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
                            <div className={styles.imagesPanel}></div>
                            <div className={styles.subtitle}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.anotherProducts}>
                    <div className={styles.productStyles}>
                        <span className="imagesTitle">Виды</span>
                        <div className={styles.productImages}>j
                            <>{
                                
                                product?.images?.map((image) => {
                                    <div className={styles.image}>
                                        <img src={image} alt="" />
                                    </div>
                                })
                                

                            }</>
                        </div>
                    </div>

                </div>
                Product {productId}
            </div>
        </div>
    )
}

export default Product