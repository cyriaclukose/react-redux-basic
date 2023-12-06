# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Basic React-redux

Redux is a predictable state management library for java script applications

create a react app using npx create-react-app
Install redux and react-redux packages  by running following commands in terminal

 the following are steps 

 ### Store
 First step is to define the the structure of the Store
  Usually the createStore function from redux package is used. createStore take 
  a reducer as an argument

store.js
import {createStore} from 'redux';
import counterReducer from './counterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store=createStore(counterReducer,composeWithDevTools());

export default store;

 ### Reducer
 Create Reducer--> reducers are responsible for updating the state in the 
store. Reducer takes two paramers current state and actions. We cannnot mutate
the state. We have to make a copy of the current state and update it.

import { INCREMENT,INCREMENTBYVALUE,DECREMENT } from "./actionType"

function  counterReducer(state={counter:0},action){

    switch(action.type){

        case INCREMENT:
        return {counter:state.counter+1};

        case DECREMENT:
         return {counter:state.counter-1};
        case INCREMENTBYVALUE:

          console.log("value in reducer:"+action.payload.value);
        return {counter:state.counter +  Number(action.payload.value) };

        default:
            return state;
    }

   

}

export default counterReducer;

 ### Actions 
  Actions determines what kind of actions needs to be done. Action has mainly 
two properties type and payload which contains the data which needs to be updated. We can create function called actionCreators if we need to reuse
the actions. Action Types can also be exposed as components if we want to avoid hard coding
export const INCREMENT="increment";
export const DECREMENT="decrement";
export const INCREMENTBYVALUE="incrementByvalue"

 ### useSelector  
 To access the values from the store we need to use a hook called             {useSelector} from the 'react-redux'package

   const counter=useSelector((state)=>state.counter)

### Provider
For the entire application two have access to the store we can wrap the entireapplication with {provider} from 'react-redux' and pass store as 
 an attribute.

 ReactDOM.render(
<Provider  store={store}>
<React.StrictMode>
<App />
<React.StrictMode>
</Provider>

 )  

 ### useDispatch

  {useDispatch} hook from 'react-redux' is used to send action to the store

  const dispatch=useDispact();


  function increment (){
   dispactch({
   type:"increment",
 // payload is optional
   })

  }


### Installing Dependencies for Redux DevTools
We will install the Redux DevTools extension to our dev dependencies using the commands shown below.

Commands : npm install --save-dev redux-devtools-extension

After installing the dependencies we will import the compose functionality from redux dev tools extension using

import { composeWithDevTools } from ‘redux-devtools-extension’;

and we will create our store with Redux DevTools add-on as follows

const store = createStore(rootReducer, composeWithDevTools( ));    



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
