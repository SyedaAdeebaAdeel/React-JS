import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Add(x,y){
  return x+y;
}

function MyComponent(){
  const name="Adeeba Adeel";
  const link="https://google.com"
 return <h1>Hello,{name}  {Add(10,5)} <a href={link}>google</a></h1>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <MyComponent />
  // </React.StrictMode>

<React.StrictMode>
<App />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
