import { useState } from "react"
import PredictCar from "./PredictCar"
import PredictLaptop from "./PredictLaptop"
import PredictMobile from "./PredictMobile"
import PredictHouse from "./PredictHouse"
import Results from "./Results"
import Antigravity from './Antigravity'


// 0 -> house
// 1 -> Car
// 2 -> laptop
// 3 -> Mobile

const PredictionPage = () => {
    const [Page, setPage] = useState(0)
    return (
        <div className="bg-black">
            <div className="fixed h-screen inset-0 z-0"></div>
            <div className=" bg-gray-900 z-10-300  rounded-2xl p-2 justify-center flex-col  content-center flex">
                <div className="flex   flex-row gap-3 rounded-lg shadow-lg shadow-black/50 bg-white w-80 mx-auto justify-between p-1">
                    <button className = {`bg-linear-0 z-10 ${Page===0?'shadow-md shadow-[#faedcd]':'shadow-lg shadow-black/40'} from-gray-400 to-gray-700  text-white font-medium px-2 rounded-md`} onClick={() => setPage(0)}>House</button>
                    
                    <button className = {`bg-linear-0 z-10 ${Page===1?'shadow-lg shadow-[#faedcd]':'shadow-lg shadow-black/40'} from-gray-400 to-gray-700  text-white font-medium px-2 rounded-md`} onClick={() => setPage(1)}>Car</button>
                    <button className = {`bg-linear-0 z-10 ${Page===2?'shadow-lg shadow-[#faedcd]':'shadow-lg shadow-black/40'} from-gray-400 to-gray-700 z-10 text-white font-medium px-2 rounded-md`} onClick={() => setPage(2)}>Laptop</button>
                    <button  className = {`bg-linear-0  ${Page===3?'shadow-lg shadow-[#faedcd]':'shadow-lg shadow-black/40'} from-gray-400 to-gray-700 z-10  text-white font-medium px-2 rounded-md`} onClick={() => setPage(3)}>Mobile</button>

                </div>

                <div className="z-10">{Page === 1 && <PredictCar />}</div>
                <div className="z-10">{Page === 2 && <PredictLaptop />}</div>
                <div className="z-10">{Page === 3 && <PredictMobile />}</div>
                <div className="z-10">{Page === 0 && <PredictHouse />}</div>
                
            </div>
        </div>
    )
}
export default PredictionPage