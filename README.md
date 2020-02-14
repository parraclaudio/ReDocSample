
## Redoc-App Sample
This project is a basic implementation of ReDoc component, that is OpenAPI/Swagger-generated API Reference Documentation <br />
For more details, visit: https://github.com/Redocly/redoc

## How to run

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


### How to create the project Step-By-Step 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), following the steps in 
https://code.visualstudio.com/docs/nodejs/reactjs-tutorial

In a terminal or command prompt type:
1. Install Create React App
```bash
 npm install -g create-react-app
 ```
 2. Create your application
 ```bash
create-react-app redoc-app
```
 3. Navigate to application folder
```bash
cd redoc-app
```
4. Open Visual Studio Code
```bash
code .
```
<b>5. Installing ReDoc component</b>
 ```bash 
 yarn add redoc
 ``` 
 OR
 ```bash
 npm install redoc --save
 ```
6. Install ReDoc dependencies
```bash
npm i react react-dom mobx@^4.2.0 styled-components core-js
```
7. Edit app.js file:
```javascript
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RedocStandalone } from 'redoc';

function App() {
  return (
    <div className="App">
    <RedocStandalone
  specUrl="http://rebilly.github.io/RebillyAPI/openapi.json"
  onLoaded={error => {
    if (!error) {
      console.log('Yay!');
    }
  }}
/>
    </div>
  );
}

export default App;
```

8. Run the project: 
```bash
yarn start
```
or 
```bash
npm start
```

if you get the error <b> 'mobx' does not contain an export named '$mobx' </b>
update all dependencies running the command: <b> npm update  </b>





