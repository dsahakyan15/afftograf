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
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export default productsSlice.reducer;
