
import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { INCREMENT,DECREMENT,INCREMENTBYVALUE } from './actionType';

import { useSelector } from 'react-redux';

function App() {

  const [data,setData]=useState(0);
  const dispatch=useDispatch();

 const counter= useSelector(state=>state.counter);


  function increment(){
     dispatch({type:INCREMENT})
    
  }

  function decrement(){
    dispatch({type:DECREMENT})
   
 }

 function updateValue (e){

  console.log(e.target.value);
  setData(e.target.value);
 }

 function incrementByValue(){

  dispatch({type:INCREMENTBYVALUE,
    payload:{
      value:data
    }
  })
 }



  return (
    <div >

    <h1>Counter App</h1>
    <p>the counter value is :{counter}</p>
    <button onClick={increment}>Increment</button><br/>
    <button onClick={decrement}>Decrement</button> <br/>
    <label> Eneter the value by which counter needs to update:
    <input type='text' name={data} onChange={updateValue}/>
    </label>
     <button onClick={incrementByValue}>Increment By Value</button> 
    
    </div>
  );
}

export default App;
