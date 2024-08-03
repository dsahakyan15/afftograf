import React, { useEffect } from 'react'
import styles from './Product.module.css'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from 'entitles/hooks/useAppDispatch';
import { fetchCategories } from 'entitles/redux/productsSlice';
import { RootState } from 'entitles/redux/store';
import { useSelector } from 'react-redux';

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
     console.log(product);


    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    return (
        <div>Product {productId}</div>
    )
}

export default Product