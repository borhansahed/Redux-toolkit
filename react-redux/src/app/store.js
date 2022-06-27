import { configureStore } from '@reduxjs/toolkit'
import icecreamReducer from '../features/icecream/icecreamSlice'
import cakeReducer from '../features/cake/cakeSlice'


const store = configureStore({
    reducer:{
       icecream: icecreamReducer,
       cake: cakeReducer,
       
    }
})

export default store;