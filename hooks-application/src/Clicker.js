import React,{useState,useEffect} from 'react';
function Clicker(){

    const[count,setCount] =useState(0);
    useEffect(()=> {document.title = `you clicked ${count} times`});
    
    return(
        <button onClick={()=>setCount(count+1)}>click me hehe:{count}</button>
    )
}
export default Clicker;