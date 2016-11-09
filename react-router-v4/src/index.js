// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// Quick Start ----------------------------------------------
// import React from 'react'
// import { render } from 'react-dom'

// // 1. import a few components
// import { BrowserRouter, Match, Miss, Link } from 'react-router'

// const App = () => (
//   // 2. render a `Router`, it will listen to the url changes
//   //    and make the location available to other components
//   //    automatically
//   <BrowserRouter>
//     <div>
//       <ul>
//         {/* 3. Link to some paths with `Link` */}
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//         <li><Link to="/no-match">No Match</Link></li>
//       </ul>

//       <hr/>

//       {/* 4. Render some `<Match/>` components.
//              When the current location matches the `pattern`
//              then the `component` will render.
//       */}
//       <Match exactly pattern="/" component={Home} />
//       <Match pattern="/about" component={About} />
//       <Match pattern="/topics" component={Topics} />

//       {/* If none of those match, then a sibling `Miss` will render. */}
//       <Miss component={NoMatch}/>
//     </div>
//   </BrowserRouter>
// )

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

// const NoMatch = ({ location }) => (
//   <div>
//     <h2>Whoops</h2>
//     <p>Sorry but {location.pathname} didn’t match any pages</p>
//   </div>
// )

// const Topics = ({ pathname, pattern }) => (
//   // 5. Components rendered by a `Match` get some routing-specific
//   //    props, like the portion of the parent `pattern` that was
//   //    matched against the current `location.pathname`, in this case
//   //    `/topics`
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       {/* 6. Use the parent's matched pathname to link relatively */}
//       <li><Link to={`${pathname}/rendering`}>Rendering with React</Link></li>
//       <li><Link to={`${pathname}/components`}>Components</Link></li>
//       <li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
//     </ul>

//     {/* 7. Render more `Match` components to get nesting naturally
//            within the render lifecycle. Use the parent's matched
//            pathname to nest the url.
//     */}
//     <Match pattern={`${pathname}/:topicId`} component={Topic}/>

//     {/* 8. use the `render` prop for convenient inline rendering */}
//     <Match pattern={pathname} exactly render={() => (
//       <h3>Please select a topic</h3>
//     )}/>
//   </div>
// )

// const Topic = ({ params }) => (
//   // 9. the dynamic segments of a `pattern` (in this case `:topicId`)
//   //    are parsed and sent to the component from `Match`.
//   <div>
//     <h3>{params.topicId}</h3>
//   </div>
// )

// render(<App/>, document.querySelector('#root'))

// Basic ----------------------------------------------
// import React from 'react'
// import { render } from 'react-dom'
// import App from './examples/Basic';
// render(<App/>, document.querySelector('#root'))


// Miss ----------------------------------------------
// import React from 'react'
// import { render } from 'react-dom'
// import App from './examples/Miss';
// render(<App/>, document.querySelector('#root'))

// URL Parameters ----------------------------------------------
// import React from 'react'
// import { render } from 'react-dom'
// import App from './examples/URLParameters';
// render(<App/>, document.querySelector('#root'))

// URL Parameters ----------------------------------------------
// import React from 'react'
// import { render } from 'react-dom'
// import App from './examples/Redirects';
// render(<App/>, document.querySelector('#root'))

// Query Parameters ----------------------------------------------
// import React from 'react'
// import { render } from 'react-dom'
// import App from './examples/QueryParams';
// render(<App/>, document.querySelector('#root'))

// Recursive Paths ----------------------------------------------
// import React from 'react'
// import { render } from 'react-dom'
// import App from './examples/RecursivePaths';
// render(<App/>, document.querySelector('#root'))

// Bare Bones Miss ----------------------------------------------
// import React from 'react'
// import { render } from 'react-dom'
// import MatchGroup from 'react-router/MatchGroup'
// import Match from 'react-router/Match'
// import Miss from 'react-router/Miss'
// import Link from 'react-router/Link'
// import Router from 'react-router/BrowserRouter'
// import {
//   BrowserRouter as Router,
//   Match,
//   Miss,
//   Link,
// } from 'react-router'
// import MatchGroup from 'react-router/MatchGroup'

// const App = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/foo">Home</Link></li>
//         <li><Link to="/Missed">Missed</Link></li>
//       </ul>
//       <MatchGroup>
//         <Match pattern="/foo" render={() => <h1>Home</h1>}/>
//         <Match pattern="/bar"/>
//         <Miss render={({ location }) => (
//           <div>Nothing matched {location.pathname}.</div>
//         )}/>
//       </MatchGroup>
//     </div>
//   </Router>
// )

// render(<App/>, document.querySelector('#root'))

// MatchGroup / Miss fix ----------------------------------------------
import React from 'react'
import { render } from 'react-dom'
import App from './examples/MatchGroup';
render(<App/>, document.querySelector('#root'))
