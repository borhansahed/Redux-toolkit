import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { ordered , restocked } from '../icecream/icecreamSlice';

const IcecreamShop = () => {
    const numberOfIcecream = useSelector((state)  => state.icecream.numberOfIcecream)
    const dispatch = useDispatch()
    // if(numberOfIcecream === 0){
    //    alert('Today Icecream is finished early')
    // }
    return (
        <div>
             <h1> Number of Icecreams : {numberOfIcecream}</h1>
            <button onClick={()=> dispatch(ordered())}>Ordered</button>
            <button onClick={()=> dispatch(restocked(2))}>restored</button>
        </div>
    );
};

export default IcecreamShop;