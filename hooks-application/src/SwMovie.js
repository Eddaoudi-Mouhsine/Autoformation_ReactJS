import React,{useState,useEffect} from 'react';
import axios from 'axios';
function SwMovie(){
    const[number,setNumber] = useState(1)
    const[movie,setMovie]= useState("")
    useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await axios.get(`https://swapi.dev/api/films/${number}`);
    setMovie(response.data);
    console.log(response);
    // ...
  }
  fetchData();
},[number]);
    
        

   
    return(
        <div>
            <h1>Pick A movie</h1>
            <h4>your movie is :{movie.title}</h4>
            <select value={number} onChange={evt => setNumber(evt.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>

            </select>

            </div>

    )
}
export default SwMovie