import React from 'react'

const Counter = props => (
  <div>
    <h2>Counter</h2>
    <div>
      <button onClick={props.decrement}>-</button>
      <span>{props.count}</span>
      <button onClick={props.increment}>+</button>
    </div>
  </div>
)

export default Counter