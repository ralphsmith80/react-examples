import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Match,
  Miss,
  Link,
} from 'react-router'
// Not sure why this isn't working with destructuring
import MatchGroup from 'react-router/MatchGroup'


const NoMatch = ({ location }) => (
  <div>Nothing matched {location.pathname}.</div>
)

const MatchGroupExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/foo">Foo</Link></li>
        <li><Link to="/Missed">Missed</Link></li>
      </ul>
      <MatchGroup>
        <Match pattern="/" exactly render={() => <h1>Home</h1>}/>
        <Match pattern="/foo" render={() => <h1>Foo</h1>}/>
        <Match pattern="/bar" render={() => <h1>Bar</h1>}/>
        <Miss component={NoMatch}/>
      </MatchGroup>
    </div>
  </Router>
)

export default MatchGroupExample