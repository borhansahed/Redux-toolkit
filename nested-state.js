const redux = require('redux');
const createStore = redux.createStore;
const produce = require('immer').produce;
const bindActionCreators = redux.bindActionCreators;


const initialState = {
    name: 'Mohammad',
    address:{
       street: 'Halishahar', 
       city: 'Chittagong',
       state: 'BD'
    }
    
}


const UPDATED_CITY = 'UPDATED_CITY';
const UPDATED_STREET = 'UPDATED_STREET'
const UPDATED_NAME = 'UPDATED_NAME'

const cityUpdate = (city) =>{
    return {
        type: UPDATED_CITY,
        payload:city,
    }
}
const streetUpdate = (street) =>{
    return {
        type: UPDATED_STREET,
        payload:street,
    }
}
const nameUpdate = (name) =>{
    return {
        type: UPDATED_NAME,
        payload:name,
    }
}


const reducer = (state= initialState ,  action ) =>{

    switch (action.type) {
        case UPDATED_CITY:
           return produce(state , (draft)=> {
            draft.address.city = action.payload
           }
           )

        case UPDATED_STREET:
           return produce(state , (draft)=>{
            draft.address.street = action.payload
           })
        case UPDATED_NAME:
            return produce (state , (draft) =>{
                draft.name = action.payload
            })
            default:
            return state;
    }
}

const store = createStore(reducer)
console.log('initial value' , store.getState())

store.subscribe(()=>console.log('update city' , store.getState()) )
const actions = bindActionCreators({cityUpdate , streetUpdate , nameUpdate} , store.dispatch)

actions.cityUpdate('Chattrogram')
actions.streetUpdate('Maizpara')
actions.nameUpdate('Mohammad Sahed')

