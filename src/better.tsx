import { useState } from "react"

export default function Better (){

    const [runs , setRuns ]=useState(0)

    const handleAddOne = () =>{
        setRuns(runs + 1);}
    const handleAddFour = () =>{
        setRuns(runs + 4);
    }

    return(
        <div>
            <h2>Score : {runs}</h2>
            <button onClick={handleAddOne}>add 1</button>
            <button onClick={handleAddFour}>add 4</button>
        </div>
    )
}