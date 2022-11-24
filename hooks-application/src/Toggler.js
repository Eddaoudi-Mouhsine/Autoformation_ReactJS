import React,{useState} from 'react';
import useToggle from './hooks/useToggle';
function Toggler(){
    // const[isHappy,setIsHappy] = useState(true)
    // const[isheartbroken,setIsHeartbroken] = useState(false)

    const[isHappy,ToggleIsHappy] = useToggle(false);
    const[isHeartbroken,ToggleIsHeartbroken] = useToggle(false);


    // const toggleIsHappy = () => {
    //     setIsHappy(!isHappy)

    // }
    
    // const toggleIsHeartbroken = () => {
    //     setIsHeartbroken(!isheartbroken)

    // }
    return(
        <div>
        <h1 onClick={ToggleIsHappy}>{isHappy ? 'Horray':"WeeeeeeeeeeeCry"}</h1>
        <h1 onClick={ToggleIsHeartbroken}>{isHeartbroken ? 'happy':"Numb"}</h1>
        </div>
    )
}
export default Toggler