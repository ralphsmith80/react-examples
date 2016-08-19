## Not React

I was surprised at the size of a minified Hello World React app so I made this
as a comparison. I use ES6 class structures to build a similiar Hello World ES6
app.

While the size is significant it's important to keep in mind that React encapsulates
a UI framework; while my rudimentary ES6 example is bare bones.

## Results

* Hello World React - `148k`
* Hello World ES6 - `8k`

## Running the app

1. Ensure you have `npm` installed.

Follow the instructions for your platform [here](https://github.com/npm/npm).

2. Install

````
npm install
````

3. Boot the HTTP server

````
npm run start
````

The server is now running at [localhost:8080](localhost:8080)

4. Hot Module Reload

Make a change to `src/helloworld/helloworld.less` and watch the automatic updates!
The module implementation is rudimentary so HMR doesn't work when you change the `src/helloworld.js`
`render` method.
