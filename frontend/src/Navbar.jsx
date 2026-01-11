import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import TextType from './TextType'

const Navbar = ()=>{
    return (

        <div>
            <div className=" z-10  md:w-full bg-black   justify-between min-h-fit flex md:h-20 h-40 ">
                
                <div className="flex z-10 sm:w-700  md:w-1080 w-150 bg-black/20 backdrop-blur-md     justify-between">
                    <ul className="text-white science-gothic z-10 sm:flex-row flex-col my-2 flex items-center w-full  justify-center text-center  md:justify-center gap-4">
                        <li><span className="bg-black  p-2 rounded-3xl text-2xl"><TextType/></span></li>
                        <li className="self-center items-center  bg-linear-120 from-gray-500 to-gray-800 px-3 hover:brightness-155  transition-all  duration-300 ease-in-out"><Link to="/home">  Home</Link></li>
                        <li className="self-center bg-linear-120 from-gray-500 to-gray-800 px-3 hover:brightness-155 transition-all  duration-300 ease-in-out"><Link to="/predictprice">  Predict Price</Link></li>
                        {/* <li className="self-center bg-linear-120 from-gray-500 to-gray-800 px-3 hover:brightness-155 rounded-full transition-all  duration-300 ease-in-out">Contact us</li> */}
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Navbar