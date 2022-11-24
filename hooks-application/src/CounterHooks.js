import React,{useState} from 'react';
function CounterHooks(){
    const [count, setCount] = useState(0);


    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>setCount(count + 1)}>click me</button>
            </div>
    )
    
}
export default CounterHooks