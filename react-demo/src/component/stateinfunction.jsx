import React, { useState } from 'react'

const StateInFunction = () => {
    const SateInFunction = (props) => {
        const [data, setData] = useState({
            id:props.id,
            name:props.name,
            counter:0
        })
        const pluseFunction = () => {
            setData({...data,counter:data.counter+1});
        };
        const minusFunction = () => {
            setData({...data,counter:data.counter - 1});
        };
    }
  return (
     <div>
                <h1>State In class Component</h1>
                <p>
                    <b>Name:</b> {this.state.name}
                </p>
                <p>
                    <b>Counter:</b> {this.state.counter}
                </p>
                <button onClick={this.pluseFunction}>+</button>
                <button onClick={this.minusFunction}>-</button>
            </div>
  )
}

export default StateInFunction