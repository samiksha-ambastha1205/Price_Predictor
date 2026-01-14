import { useState } from "react";

import Results from "./Results";
const PredictHouse = () => {
  const url = "https://price-predictor-sabkuchbecho-9u1u.onrender.com"
  const [price, setPrice] = useState(0);
  const [buttonClicked, setbuttonClicked] = useState(false);
  var calculatedPrice;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const area = formData.get('area');
    const bedroom = formData.get('bedroom');
    const bathroom = formData.get('bathroom');
    const stories = formData.get('stories');
    const mainroad = formData.get('mainroad');
    const guestroom = formData.get('guestroom');
    const hotwater = formData.get('hotwater');
    const ac = formData.get('ac');
    const parking = formData.get('parking');
    const basement = formData.get('basement');
    const furnishing = formData.get('furnishing');
    const prefarea = formData.get('prefarea');
    let input = {
      area: Number(area),
      bedrooms: Number(bedroom),
      bathrooms: Number(bathroom),
      stories: Number(stories),
      mainroad: Number(mainroad),
      guestroom: Number(guestroom),
      basement: Number(basement),
      hotwaterheating: Number(hotwater),
      airconditioning: Number(ac),
      parking: Number(parking),
      prefarea: Number(prefarea),
      furnishingstatus: Number(furnishing)

    }
    
    let response = await fetch(`${url}/predictHouse`, {
      method: "POST", 
      body: JSON.stringify(input), 
      headers: {"Content-type": "application/json"}
    })
    let data = await response.json()
    console.log(data);
    setPrice(data)
    calculatedPrice=data
    


    


    if (calculatedPrice < 0) calculatedPrice = 0;
    setPrice(calculatedPrice);
    console.log(calculatedPrice);
    setbuttonClicked(true);


  }

  return (
    <div class="justify-center content-center flex">
      <div class="justify-center display-flex  shadow-2xl m-4 min-h-fit h-70 p-4 max-w-125  min-w-90 border-2 border-white rounded-3xl bg-black">

        <h3 class="text-[#e1dee9] text-2xl h-6 mx-auto flex-wrap  text-center font-medium" >Predict  <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#fefae0]">
          <span class="relative text-white dark:text-gray-950">House</span></span> price!</h3>

       

        <div class="display-flex mx-auto justify-center align-middle">

          <form onSubmit={handleSubmit} class="mt-3 p-2">

            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Enter area</h4>

            <input type="number" name="area" id="R" placeholder="Area" min={0} required class="flex justify-center mx-auto  rounded-md bg-[#d5cfe1] border-2 mb-2 "></input>


            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Enter number of bedrooms</h4>
            <input type="number" name="bedroom" id="R" placeholder="Area" min={0} required class="flex justify-center mx-auto  rounded-md bg-[#d5cfe1] border-2"></input>


            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Enter number of bathrooms</h4>
            <input type="number" name="bathroom" id="R" placeholder="bathrooms" min={0} required class="flex justify-center mx-auto  rounded-md bg-[#d5cfe1] border-2 mb-2 "></input>


            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Enter number of stories</h4>
            <input type="number" name="stories" id="R" placeholder="no. of stories" min={0} required class="flex justify-center mx-auto  rounded-md bg-[#d5cfe1] border-2  mb-2 "></input>

             <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Parking capacity</h4>
            <input type="number" name="parking" id="R" placeholder="Parking capacity" min={0} required class="flex justify-center mx-auto  rounded-md bg-[#d5cfe1] border-2 mb-2 "></input>

            <h4 class=" display-flex text-white font-medium cpt-4 text-center mx-auto">On the mainroad?</h4>
            <select className ="mb-2 w-40 bg-linear-180 rounded-md from-gray-400 to-gray-700  flex content-center justify-center text-white font-medium cpt-4 text-center mx-auto" name="mainroad" id="mainroad">
              <option className=" text-black bg-white" value={1}>Yes</option>
              <option className="text-black bg-white" value={0} >No</option>
              
            </select>

            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Has a guestroom?</h4>
            <select className ="mb-2 w-40 bg-linear-180 rounded-md from-gray-400 to-gray-700    flex content-center justify-center text-white font-medium cpt-4 text-center mx-auto" name="guestroom" id="guestroom">
              <option className=" text-black bg-white" value={1}>Yes</option>
              <option className="text-black bg-white" value={0} >No</option>
              
            </select>

            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Has a basement?</h4>
            <select className ="mb-2 w-40 bg-linear-180 rounded-md from-gray-400 to-gray-700  flex content-center justify-center text-white font-medium cpt-4 text-center mx-auto" name="basement" id="basement">
              <option className=" text-black bg-white" value={1}>Yes</option>
              <option className="text-black bg-white" value={0} >No</option>
              
            </select>

            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Has hot water heating?</h4>
            <select className ="mb-2 w-40 bg-linear-180 rounded-md from-gray-400 to-gray-700  flex content-center justify-center text-white font-medium cpt-4 text-center mx-auto" name="hotwater" id="hotwater">
              <option className=" text-black bg-white" value={1}>Yes</option>
              <option className="text-black bg-white" value={0} >No</option>
              
            </select>
            

            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Air conditioned?</h4>
            <select className ="mb-2 w-40 bg-linear-180 rounded-md from-gray-400 to-gray-700  flex content-center justify-center text-white font-medium cpt-4 text-center mx-auto" name="ac" id="ac">
              <option className=" text-black bg-white" value={1}>Yes</option>
              <option className="text-black bg-white" value={0} >No</option>
              
            </select>

            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Preferred area?</h4>
            <select className ="mb-2 w-40 bg-linear-180 rounded-md from-gray-400 to-gray-700  flex content-center justify-center text-white font-medium cpt-4 text-center mx-auto" name="prefarea" id="prefarea">
              <option className=" text-black bg-white" value={1}>Yes</option>
              <option className="text-black bg-white" value={0} >No</option>
            </select>
            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Furnishing status?</h4>
            <select className ="mb-2 w-40 bg-linear-180 rounded-md from-gray-400 to-gray-700  flex content-center justify-center text-white font-medium cpt-4 text-center mx-auto" name="furnishing" id="furnishing">
              <option className=" text-black bg-white" value={0}>Unfurnished</option>
              <option className="text-black bg-white" value={1} >Semi-furnished</option>
              <option className="text-black bg-white" value={2} >Full furnished</option>

              
            </select>
           
            




            <button class="flex justify-centers mx-auto bg-green-400 font-medium p-2 m-3 rounded-xl border-2 hover:bg-white hover:text-black hover:border-black hover:scale-110 ease-in-out duration-75" type="submit">Calculate price</button>
          </form>
        </div>
        <Results price={price} buttonClicked={buttonClicked}/>
        

      </div>

    </div>
  )
}

export default PredictHouse;