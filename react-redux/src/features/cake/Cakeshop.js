import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { ordered , restocked } from './cakeSlice';
const Cakeshop = () => {
    const numberOfCake = useSelector((state)=> state.cake.numberOfCake)
    const dispatch = useDispatch()
    return (
        <div>
            <h1> Number of Cakes : {numberOfCake}</h1>
            <button onClick={()=> dispatch(ordered())}>Ordered</button>
            <button  onClick={()=> dispatch(restocked(4))}> restored</button>
        </div>
    );
};

export default Cakeshop;