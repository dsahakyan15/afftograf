import {
    collection,
    getDocs,
    addDoc,
    getDoc,
    setDoc,
    deleteDoc,
    updateDoc
} from "@firebase/firestore";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsInitialStateProps } from "./interfaces";
import { database } from "shared/api/firebase";

export const fetchCategories = createAsyncThunk(
    'products/fetchCategories',
    async () => {
        const querySnapshot = await getDocs(collection(database, "categories"));

        return querySnapshot.docs.map((doc: any) => ({
            id: doc.id,
            ...doc.data()
        }));
    }
);
export const fetchCategory = createAsyncThunk(
    'products/fetchCategory',
    async (id: { categoryId: string }) => {
        const querySnapshot = await getDocs(collection(database, "categories"));

        const inSnapshot = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

        let categoryTemp

        for (let i in inSnapshot) {
            if (inSnapshot[i].id === id.categoryId) {
                categoryTemp = { ...inSnapshot[i] }
            }
        }

        return { ...categoryTemp }

    }
)

const initialState: productsInitialStateProps = {
    categories: [],
    loading: false,
    error: null
};

const productsSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending as any, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled as any, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected as any, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchCategory.pending as any, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategory.fulfilled as any, (state, action) => {
                state.loading = false;
                state.categories = action.payload.products;
            })
            .addCase(fetchCategory.rejected as any, (state, action) => {
                state.loading = false;
                const existsCategory = state.categories.find((category: any) => category?.id === action.payload?.id);
                
                if(!existsCategory){
                    state.categories.push(action.payload)
                }
            })
    }
});

export default productsSlice.reducer;
