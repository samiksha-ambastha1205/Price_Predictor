import { Link } from "react-router-dom"
import Antigravity from "./Antigravity"
import GradientText from "./GradientText"


const Home = ()=>{
    return (

        <div className="h-full w-full  bg-black">
            <div className="fixed inset-0 z-0"></div>
            <div className="mx-auto flex flex-col justify-center content-center h-screen  p-2 rounded-3xl mr-2 ml-2">
                <h1 className="text-4xl top-1 my-8 align-middle font-extrabold text-[#fefae0] z-10 text-center science-gothic"><GradientText
                /></h1>
                <p className=" z-10 science-gothic text-gray-400 text-center">Predict the right selling price for your assets using our ML-powered platform</p>
                <Link to="/predictprice" className="bg-indigo-600 text-2xl z-10 mx-auto p-2 text-white my-2  hover:bg-indigo-400 transition-all ease-in-out  duration-75">Predict Price</Link>
            </div>
        </div>
    )
}
export default Home