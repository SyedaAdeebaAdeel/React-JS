import React,{useEffect} from 'react';


const MyComponent=()=>{

    useEffect(()=>{
       console.log("Hello");
},[]);

return(<h1>UseEffect Component</h1>);

} 

export default MyComponent;