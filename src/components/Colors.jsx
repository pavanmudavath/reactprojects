import { useState } from "react"
const Colors = () => {

    const [color,setColor]=useState("");

    function changeColor(newColor){
        setColor(newColor);
    }

  return (
    <div className={`bg-${color} h-screen flex  justify-center items-center`}>

        <div className="bg-slate-500 text-white p-4   " >
            <button className="bg-red-500 p-4 rounded-lg mr-8 " onClick={()=>changeColor("red-500")}>Red</button>
            <button className="bg-white p-4 rounded-lg mr-8 text-black" onClick={()=>changeColor("white")}>white</button>
            <button className="bg-green-500 p-4 rounded-lg mr-8 "onClick={()=>changeColor("green-500")}>Green</button>
            

        </div> 

    </div>
  )
}

export default Colors