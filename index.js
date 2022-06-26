const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// action
const CAKE_ORDER= 'CAKE_ORDER';
const RESTORE_CAKE='RESTORE_CAKE';
const ICECREAM_ORDER='ICECREAM_ORDER';
const RESTORE_ICECREAM='RESTORE_ICECREAM';


function orderCake() {

   return {
    type: CAKE_ORDER,
    quantity: 1,
   }  
};

function restoreCake(quantity=1) {

    return{
        type: RESTORE_CAKE,
        payload:quantity
    }
};

function orderIcecream(qty=1){
    return{
        type: ICECREAM_ORDER,
        payload:qty
    }
}
function restoreIcecream(qty=1){
    return{
        type: RESTORE_ICECREAM,
        payload:qty
    }
}




// initial value
// const initialState = {

//     numberOfCake: 10,
//     numberOfIcecream:30,
    
// }
const initialCakeState = {
    numberOfCake : 10,
    
}
const initialIcecreamState = {
    numberOfIcecream : 20,

}




// cake order reducer
const cakeReducer = (state = initialCakeState , action) =>{
  
    switch (action.type) {
        case CAKE_ORDER:
            return{
                ...state,
               numberOfCake : state.numberOfCake - 1 , 
            }
        case RESTORE_CAKE:
            return{
                ...state,
               numberOfCake: state.numberOfCake + action.payload , 
            }
    
        default:
           return state;
    }

}
const icecreamReducer = (state = initialIcecreamState , action) =>{
  
    switch (action.type) {
        case ICECREAM_ORDER:
            return{
                ...state,
               numberOfIcecream : state.numberOfIcecream - action.payload , 
            }
        case RESTORE_ICECREAM:
            return{
                ...state,
               numberOfIcecream: state.numberOfIcecream + action.payload , 
            }
    
        default:
           return state;
    }

}

//store
const rootReducers = combineReducers({

        cake: cakeReducer,
        icecream: icecreamReducer

})

const store = createStore(rootReducers, applyMiddleWare(logger));
console.log('initialState' , store.getState());

store.subscribe(()=> {})




//bindActionCreators
const actions = bindActionCreators(
    {orderCake,restoreCake,orderIcecream,restoreIcecream} , store.dispatch)

actions.orderCake()
actions.restoreCake(5)
actions.orderIcecream(3)
actions.restoreIcecream(6)


// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restoreCake(10))