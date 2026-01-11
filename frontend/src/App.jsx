import Home from "./Home"
import PredictionPage from "./PredictionPage"
import { Routes, Route } from 'react-router-dom'



const App = ()=>{
  return (
    <div>
      
      <Routes>
        <Route path="/home" element = {<Home/>}/>
        <Route path="/predictprice" element = {<PredictionPage/>}/>
        <Route path="/" element = {<Home/>}/>
      </Routes>

    </div>
  )
}
export default App