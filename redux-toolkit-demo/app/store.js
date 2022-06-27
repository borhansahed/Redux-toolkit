const configureStore = require('@reduxjs/toolkit').configureStore
const icecreamReducer = require('../features/icecream/icecreamSlice.js')
const cakeReducer = require('../features/cake/cakeSlice')

const store = configureStore({
    reducer:{
       icecream: icecreamReducer,
       cake: cakeReducer,
       
    }
})

module.exports = store