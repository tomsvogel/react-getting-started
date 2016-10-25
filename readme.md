# React.js getting started

## what is react.js

React is a UI library developed at Facebook to facilitate the creation of interactive, stateful & reusable UI components.
React is using a virtual DOM to provide performance.

What is a Virtual DOM? You can think about a local simplified copy of the HTML DOM. 
React uses the Virtual DOM to detect Changes and afterwards render only changes to the HTML DOM.


## What is Yarn
Yarn is a Node package manager created by Facebook.  
It was designed with the goal of simplifying and optimizing Node package installation and maintenance.
Yarn uses a cache, allows to install packages from bower or npm registry and siplifies the console output.

to install yarn use `npm install -g yarn`


## setup for this getting started

The setup with webpack would take so much time, we can skip that and use the facebook project 'create-react-app'.


'create-react-app' uses webpack, Babel with ES6, Autoprefixer, ESLint ... 


```
yarn: yarn add create-react-app -g
npm: npm install -g create-react-app
```

to create the project enter

```
//note on windows older than windows 10, no deep folders working`
create-react-app agent-demo
```

enter the new directory and type `npm start` to start the server


## simple Component
The default App.js is a simple component. A component only requires a render method.
We will create now our own component, with an search input field for quering giphy images. 

## the state
To define a state we need a constructor. In the state we are able to store information/data for the component.
The constructor requires the props var to define the components properties. 
We add the fields searchString, result.

```
constructor(props) {
    super(props);
    this.state = {searchString: '', searchResult: []};
}
```

## events
We just added `this.state.searchString` to the input field, but on typing nothin happens.
We have to create a event to update the state. There is nothing new rendered now.

```
_handleInput = (event) => {
        this.setState({searchString: event.target.value});
    };
```


## ES6 syntax


## ajax with fetch

I use fetch for my request. Fetch is included in modern browsers and for older we need to install som polyfills.

```
yarn add isomorphic-fetch es6-promise
```

After setup we have to import the library. 

```
import fetch from 'isomorphic-fetch'
``` 

adding the request to the eventhandler

```
 fetch('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + this.state.searchString)
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(response) {
                console.log(response);
                this.setState({searchResult: response.data});
            }.bind(this));
```


## Properties

We add now the properties resultsize(number), apiKey(string)

```
Giphy.propTypes = {
    maxResults: PropTypes.number.isRequired,
    apiKey: PropTypes.string.isRequired
}
```

## livecylce






## inline styles


























## create our own component
