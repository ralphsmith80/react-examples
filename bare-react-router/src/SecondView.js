import React from 'react'
import {Route} from 'react-router-dom'

const SecondView = () => {
  return (
    <div>
      I'm the Second View!
    </div>
  )
}

const SecondRoute = () => {
  return <Route path='/second' component={SecondView} />
}

export default SecondRoute