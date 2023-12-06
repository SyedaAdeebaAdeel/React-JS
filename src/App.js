import './App.css';
import React, { useState } from 'react';
import Header from './components/Header'
import Todoitem from './components/Todoitem';
import Buttons from './components/Buttons';
import CounterComponent from './components/CounterComponent';
import UseEffect from './components/UseEffect';
import CounterUseEffect  from './components/CounterUseEffect';
 //import VisibleState from './components/VisibleState'

import './style.css';

const App=()=> {

  const [isvisible, setvisible]=useState(true);

  return(
      <div className='todo-container'>
      { isvisible ? <CounterUseEffect /> : <></>} 
  <button onClick={()=>setvisible(!isvisible)}>toggle</button>
      
  <UseEffect/>
    <CounterComponent/>
    {/* <VisibleState/> */}
    <Header header="TodoApp"/>
     <Todoitem text="Eat"/>
    <Todoitem text="University"/> 
    <Todoitem completed={true} text="Learn"/> 
    <Todoitem  text="Learn"/>
    <Todoitem text="Code"/>
    <Todoitem text="Sleep"/>
    <Buttons />
      </div>
  );
  }

export default App;
