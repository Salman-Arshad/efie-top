import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { INCREMENT, DECREMENT } from "../../redux/actions/test_counter_actions"
function Test() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div className="container">
            <h1>COUNTER {counter}</h1>
            <button onClick={() => dispatch(INCREMENT(1))}>INCREMENT</button>
            <button onClick={() => dispatch(DECREMENT(1))}>DECREMENT</button>

        </div>
    )
}

export default Test