import{createSlice} from '@reduxjs/toolkit'
// import { icecreamActions } from '../icecream/icecreamSlice'



const initialState = {
    numberOfCake: 10,
}


const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numberOfCake--
        },
        restocked:(state,action)=>{
            state.numberOfCake += action.payload
        },
        
    },
    //   extraReducers:{
    //     ['icecream/ordered']:(state ,action)=>{
    //      state.numberOfIcecream--
    //     }
    // }
  
})

export default cakeSlice.reducer
export const {ordered , restocked} = cakeSlice.actions