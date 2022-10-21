import React from 'react'
import  Example from './store/counter.js'

import {observer} from 'mobx-react-lite'

const Counter = observer(() => {
  return (
    <div className="counter">
      <div className="btns">
        {"Total counts = " + Example.total}
        <button className="btn" onClick={() => Example.increment()}>+</button>
        <button className="btn" onClick={() => Example.decrement()}>-</button>
      </div>
    </div>
  )
})

export default Counter