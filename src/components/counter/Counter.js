import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../redux/state/counter/CounterSlice";

const Counter = () => {

    const count= useSelector((state)=>
        state.counter.value
    )
    const dispatch = useDispatch()
    // const increaser=()=>{dispatch(increment)}
    //
    // const decreaser=()=>{dispatch(decrement)}

    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h4>My counter Page</h4>
            </div>
            <div className="card-body"></div>
            <h1>{count}</h1>
            <div className="my-4">
                <button onClick={()=>{dispatch(increment)}} className="btn btn-success">Increase</button>
                <button onClick={()=>{dispatch(decrement)}} className="btn mx-2 btn-danger">Decrease</button>
            </div>
        </div>
    );
};

export default Counter;