import React, { useState } from 'react';


const MyComponent=()=>{

const [isvisible, setvisible]=useState(true);


return(
    <div>
    { isvisible ? <MyComponent/> : <></>} 
<p>Visible</p>
<button onClick={()=>setvisible(!isvisible)}>toggle</button>
    </div>
);
}

export default MyComponent;
