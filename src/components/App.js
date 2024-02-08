
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
    let [name,setName]=useState("");

    function updateName(event)
    {
        setName(event.target.value);
    }
  return (
    <div>
        {/* Do not remove the main div */}
        <div>Enter your name:</div><br>
        <input type="text" id="abc" onChange={updateName} />
        <p id="abc">{name}</p>
    </div>
  )
}

export default App
