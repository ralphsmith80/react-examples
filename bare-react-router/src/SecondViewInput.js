import React from 'react'
import {withRouter} from 'react-router-dom'

const SecondViewInput = (props) => {
  const onKeyUp = (evt) => {
    const path = '/second'
    // route to second view on enter
    if (evt.which === 13) {
      props.history.push(path)
    }
  }
  return (
    <input type='text' onKeyUp={onKeyUp} />
  )
}

export default withRouter(SecondViewInput)