import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{
        auth:authSlicerReducer
    },
    devTools:true
})



export default store;