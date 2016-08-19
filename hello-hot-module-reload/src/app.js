import HelloWorld from './helloworld';

class App {
  constructor(template, el) {
    this.template = template;
    this.el = el;
  }
  init() {
    this.el.innerHTML = this.template;
  }
}

const helloWorld = new HelloWorld();
const app = new App(helloWorld.render(), document.querySelector('main'));
app.init();