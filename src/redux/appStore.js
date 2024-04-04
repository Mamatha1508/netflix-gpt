import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice'

console.log('userReducer',userReducer)

const appStore= configureStore({
    reducer :{
        user : userReducer,
        movie : movieReducer
    }
})

export default appStore;