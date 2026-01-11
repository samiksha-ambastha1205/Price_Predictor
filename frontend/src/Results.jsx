import { useEffect, useState } from "react"

const Results = ({price, buttonClicked})=>{
    
    
return (

<div>
    {buttonClicked&&(
    <div class = "font-medium text-center bg-white w-fit mx-auto p-2 h-16 content-center rounded-2xl border shadow-xl shadow-[#d5cfe1] min-h-fit">
    <h2>₹ {price} </h2>

    
    
    
    </div>)}
    

</div>
)
}

export default Results