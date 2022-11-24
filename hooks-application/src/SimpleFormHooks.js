import React,{useState} from "react";
export default function SimpleFormHooks(){
    const[email,setEmail] = useState("zobir")
    const handleChange = (e)=>{
        setEmail(e.target.value)

    }
    return(

        <div>
            <h1>value is:{email}</h1>
            <input type="email" onChange={handleChange} value={email}/>
            <button onClick={()=>{
                            setEmail("")}}>new email</button>

        </div>
    )
}