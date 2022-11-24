import React,{useState} from "react";
import useFormState from "./hooks/useFormState";
export default function SimpleFormInputHooks(){
    const[email,updateEmail,resetEmail] = useFormState("")
    const[password,updatepassword,resetPassword] = useFormState("")
    
    return(

        <div>
            <h1>value is {email}</h1>
            <input type="email" onChange={updateEmail} />
            <button onClick={resetEmail}>new email</button>
            <input type="password" onChange={updatepassword} />
            <button onClick={resetPassword}>new password</button>

        </div>
    )
}
