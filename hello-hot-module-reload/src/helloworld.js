// Import CSS
import './helloworld/helloworld.less';

class HelloWorld {
  constructor() {
  }
  render() {
    return `
      <section class='hello-world'>
        <h1>ES6 Hot Module Reload with Webpack!</h1>
        <section>
          <h1>base64 Encoded</h1>
          <img class='repeater'></img>
        </section>
        <section>
          <h1>URL Linked</h1>
          <img class='avatar'></img>
        </section>
      </section>
    `
  }
}

export default HelloWorld;