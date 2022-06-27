const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfIcecream: 20,
}


const icecreamSlice = createSlice({
    name:'icecream',
    initialState,
    reducers: {
        ordered: (state)=>{
            state.numberOfIcecream -1
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

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions