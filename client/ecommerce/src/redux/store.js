import {configureStore} from '@reduxjs/toolkit'
import authSlicerReducer from './slices/AuthSlice'

const store = configureStore({
    reducer:{
        auth:authSlicerReducer
    },
    devTools:true
})



export default store;