import io from 'socket.io-client';

class Socket {

  constructor(url, options) {
    // io.connect(window.location.hostname);
    this.url = url || 'http://localhost:9092'
    this.options = options || null
    this.socket = io(this.url, this.options)

    this.socket.on('connect', () => {
      console.info('connected')
    })

    this.socket.on('chatevent', (msg) => {
      let $app = document.querySelector('.App'),
          $p = document.createElement('p');
      $p.innerText = msg.message
      $app.appendChild($p)
      console.info('chatevent message', msg.message)
    })
  }
}

export default Socket
