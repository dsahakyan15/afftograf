import {
    collection,
    getDocs,
    addDoc,
    getDoc,
    setDoc,
    deleteDoc,
    updateDoc
} from 'firebase/firestore'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { database } from 'shared/api/firebase'

export const fetchCategory = createAsyncThunk(
    '',()=>{}
)