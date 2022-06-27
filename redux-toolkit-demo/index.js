const store = require('./app/store.js')
const icecreamActions = require('./features/icecream/icecreamSlice.js').icecreamActions
const cakeActions = require('./features/cake/cakeSlice').cakeActions


console.log('initial state' , store.getState())

store.subscribe(()=> console.log('updated state' , store.getState()))


store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(5))

//cake 
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(7))