const { icecreamActions } = require('../icecream/icecreamSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

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

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions