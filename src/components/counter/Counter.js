import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, setCustom} from "../../redux/state/counter/CounterSlice";


const Counter = () => {

    const myNumber=useRef()

    const count= useSelector((state)=>
        state.counter.value
    )
    const dispatch = useDispatch();
    // const increaser=()=>{dispatch(increment()}
    //
    // const decreaser=()=>{dispatch(decrement()}

    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h4>My counter Page</h4>
            </div>
            <div className="card-body"></div>
            <h1>{count}</h1>
            <div className="my-4">
                <button onClick={() => dispatch(increment())} className="btn btn-success">Increase</button>
                <button onClick={()=>{dispatch(decrement())}} className="btn mx-2 btn-danger">Decrease</button>
            </div>
            <div className="my-4">
                <input ref={myNumber} className="form-control w-50 my-2" type="number" />
                    <button onClick={()=>dispatch(setCustom(myNumber.current.value))} className="btn btn-success">Set Custom</button>
            </div>
        </div>
    );
};

export default Counter;