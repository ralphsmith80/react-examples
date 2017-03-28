import React from 'react'
import {Route} from 'react-router-dom'

const FirstView = () => {
  return (
    <Route path='/first' render={() => {
      return (
        <div>
          I'm the First View!
        </div>
      )
    }} />
  )
}

export default FirstView