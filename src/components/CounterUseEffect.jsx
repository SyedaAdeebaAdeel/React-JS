import React, { useEffect, useState } from 'react';

const MyComponent=()=>{

    const [count,setCount]=useState(0);

useEffect( ()=>{
console.log("Count is mounting");

return function(){
    console.log("unmounting....");
   
};

},[]);

useEffect( ()=>{
    console.log("Count got updated",count);
    
    return function(){
        console.log("Returning Count ",count);
       
    };
    
    },[count]);
return(
    <div>
    <h6>Count is - {count}</h6>
    <button onClick={()=>setCount(count + 1)}>Update Count</button>
    </div>
)

}

export default MyComponent;