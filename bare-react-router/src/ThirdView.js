import React from 'react'
import {Route} from 'react-router-dom'

class ThirdView extends React.Component {
  componentWillMount() {
    console.log('mount Third View')
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps Third View')
  }
  render() {
    return (
      <Route path='/second' render={({location}) => {
        console.log('render Third View')
        return null
      }}/>
    )
  }
}

export default ThirdView
