
const redux = require('redux');
const axios = require('axios');
const reduxThunk = require('redux-thunk').default
const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;






const initialState = {
    loading: false ,
    user:[],
    error:''
}

const FETCH_USER_REQUESTED = 'FETCH_USER_REQUESTED' 
const FETCH_USER_SUCCEEDED = 'FETCH_USER_SUCCEEDED' 
const FETCH_USER_FAILED = 'FETCH_USER_FAILED' 


const fetchUsersRequest = () =>{
      return {
        type:FETCH_USER_REQUESTED
      }
}

const fetchUserSucceed = (user) =>{
        return {
            type: FETCH_USER_SUCCEEDED,
            payload: user
        }
}

const fetchUserFail = (error) =>{
    return {
        type:FETCH_USER_FAILED,
        payload:error
    }
}


const reducer = (state = initialState , action) =>{
    switch(action.type){
        case FETCH_USER_REQUESTED:
            return {
                ...state,
                loading:true,
            }
        case FETCH_USER_SUCCEEDED:
            return {
                ...state,
                loading:false,
                user:action.payload,
                error:''
            }
        case FETCH_USER_REQUESTED:
            return {
                ...state,
                loading:false,
                user:[],
                error:action.payload
            }
            default:
                return state;
    }
}

const fetchUsers = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            const user = res.data.map(user => user.id)
            
            dispatch(fetchUserSucceed(user))
        
        }).catch((error)=>{
          dispatch(fetchUserFail(error.message))
        })
    }
}


const store = createStore(reducer , applyMiddleWare(reduxThunk));
console.log('initial state', store.getState())
store.subscribe(()=>{console.log('updated state' , store.getState())})
store.dispatch(fetchUsers())
// console.log('initial state' , store.getState())

// store.subscribe(()=> console.log('updated state' , store.getState()))
// store.dispatch(fetchUsersRequest())
