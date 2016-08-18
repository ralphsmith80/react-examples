// Import CSS
import './helloworld/helloworld.less';
import React from 'react';

const HelloWorld = React.createClass({
  render: function () {
    return (
      <section className='hello-world'>
        <h1>React Hot Module Reload with Webpack!</h1>
        <section>
          <h1>base64 Encoded</h1>
          <img className='repeater'></img>
        </section>
        <section>
          <h1>URL Linked</h1>
          <img className='avatar'></img>
        </section>
      </section>
    );
  },
});

export default HelloWorld;