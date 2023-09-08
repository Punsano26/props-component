import React, { useState } from 'react';

const StateInFunction = (props) => {
    const [data, setData] = useState({
        id: props.id,
        name: props.name,
        counter: 0
    });

    const pluseFunction = () => {
        setData({ ...data, counter: data.counter + 1 });
    };

    const minusFunction = () => {
        setData({ ...data, counter: data.counter - 1 });
    };

    return (
        <div>
            <h1>State In Functional Component</h1>
            <p>
                <b>Name:</b> {data.name}
            </p>
            <p>
                <b>Counter:</b> {data.counter}
            </p>
            <button onClick={pluseFunction}>+</button>
            <button onClick={minusFunction}>-</button>
        </div>
    );
};

export default StateInFunction;
