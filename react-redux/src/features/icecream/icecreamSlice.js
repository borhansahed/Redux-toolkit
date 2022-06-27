import{createSlice} from '@reduxjs/toolkit'

const initialState = {
    numberOfIcecream: 20,
}


const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers: {
        ordered: (state)=>{
            state.numberOfIcecream--
        },
        restocked: (state, action) =>{
          state.numberOfIcecream += action.payload
        }
    },
    extraReducers:{
        ['cake/ordered']:(state,action)=>{
            state.numberOfCake--
        }
    }
}) 

export default icecreamSlice.reducer
export const {ordered , restocked} =icecreamSlice.actions