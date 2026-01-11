import { useState } from "react";
import Results from "./Results";


const PredictCar = () => {

  const url = "http://127.0.0.1:8000"
  const [price, setPrice] = useState(0);
  const [buttonClicked, setbuttonClicked] = useState(false);
  var calculatedPrice;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fuel = formData.get('fuel');
    const seller = formData.get('seller');
    const transmission = formData.get('transmission');
    const owner = formData.get('owner');
    let km = formData.get('km');
    let age = formData.get('age');
    km = (km-1)/(218000)
    age = (age-5)/(33-5)
   
    let input = {
      km_driven: Number(km),
    fuel: Number(fuel),
    seller_type: Number(seller),
    transmission: Number(transmission),
    owner: Number(owner),
    age: Number(age)
  
    }

    let response = await fetch(`${url}/predictCar`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: { "Content-type": "application/json" }
    })
    let data = await response.json()
    console.log(data);
    setPrice(data)
    calculatedPrice = data






    if (calculatedPrice < 0) calculatedPrice = 0;
    setPrice(calculatedPrice);
    console.log(calculatedPrice);
    setbuttonClicked(true);


  }

  return (
    <div class="justify-center bg-black h-screen content-center flex">
      <div class="justify-center display-flex  shadow-2xl m-4 min-h-fit h-70 p-4 max-w-125  min-w-90 border-2 border-white rounded-3xl bg-black">

        <h3 class="text-[#e1dee9] text-2xl h-6 mx-auto flex-wrap  text-center font-medium" >Predict  <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#fefae0]">
          <span class="relative text-white dark:text-gray-950">Car</span></span> price!</h3>




        <div class="display-flex mx-auto justify-center align-middle">

          <form onSubmit={handleSubmit} class="mt-3 p-2">

            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Fuel type</h4>
            <select className=" mb-2 flex bg-linear-180 rounded-md from-gray-400 to-gray-700 content-center justify-center text-white font-medium w-40 cpt-4 text-center mx-auto" name="fuel" id="fuel">
              <option className=" text-black bg-white" value={0}>Petrol</option>
              <option className="text-black bg-white" value={1} >Diesel</option>
              <option className="text-black bg-white" value={3} >LPG</option>
              <option className=" text-black bg-white" value={2}>CNG</option>
              <option className=" text-black  bg-white" value={4}>Electric</option>
            </select>
    
            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Seller type</h4>
            <select className="flex content-center mb-2 w-40 bg-linear-180 rounded-md from-gray-400 to-gray-700 justify-center text-white font-medium cpt-4 text-center mx-auto" name="seller" id="seller">
              <option className=" text-black bg-white" value={0}>Individual</option>
              <option className="text-black bg-white" value={1} >Dealer</option>
              <option className="text-black bg-white" value={2} >Trustmark dealer</option>
            
            </select>

            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Transmission type</h4>
            <select className="mb-2 w-40  flex content-center bg-linear-180 rounded-md from-gray-400 to-gray-700 justify-center text-white font-medium cpt-4 text-center mx-auto" name="transmission" id="transmission">
              <option className=" text-black bg-white" value={0}>Manual</option>
              <option className="text-black bg-white" value={1} >Automatic</option>
            
            </select>


            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Owner type</h4>
            <select className="w-40  flex content-center bg-linear-180 rounded-md from-gray-400 to-gray-700 mb-2 justify-center text-white font-medium cpt-4 text-center mx-auto" name="owner" id="owner">
              <option className=" text-black bg-white" value={1}>First owner</option>
              <option className="text-black bg-white" value={2} >Second owner</option>
              <option className="text-black bg-white" value={3} >Third owner</option>
              <option className="text-black bg-white" value={4} >Fourth and above owner</option>
              <option className="text-black bg-white" value={0} >Test drive car</option>
            
            </select>



            



            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Kilometer driven</h4>
            <input type="number" name="km" id="km" placeholder="Kilometers driven" min={0} required class="flex justify-center mx-auto  rounded-md mb-2 bg-[#d5cfe1] border-2"></input>

            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Age of car</h4>
            <input type="number" name="age" id="age" placeholder="Car age" min={0} required class="flex justify-center mx-auto  rounded-md bg-[#d5cfe1] border-2"></input>

           
            




         
            <button class="flex justify-centers mx-auto bg-green-400 font-medium p-2 m-3 rounded-xl border-2 hover:bg-white hover:text-black hover:border-black hover:scale-110 ease-in-out duration-75" type="submit">Calculate price</button>
          </form>
        </div>
        <Results price={price} buttonClicked={buttonClicked}/>


      </div>

    </div>
  )
}
export default PredictCar