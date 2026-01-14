import { useState } from "react";
import Results from "./Results";


const PredictMobile = () => {

  const url = "https://price-predictor-sabkuchbecho-9u1u.onrender.com/predict"
  const [price, setPrice] = useState(0);
  const [buttonClicked, setbuttonClicked] = useState(false);
  var calculatedPrice;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const brand = formData.get('brand');
    const storage = formData.get('Storage');
    const ram = formData.get('RAM');
    const rating = formData.get('rating');
    
    let input = {
      Brand: Number(brand),
      Memory: Number(ram),
      Storage: Number(storage),
      Rating: Number(rating)
      

    }

    let response = await fetch(`${url}/predictmobile`, {
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
    <div class="justify-center bg-black h-screen  content-center flex">
      <div class="justify-center display-flex  shadow-2xl m-4 min-h-fit h-70  p-4 max-w-125  min-w-90 border-2 border-white rounded-3xl bg-black">

        <h3 class="text-[#e1dee9] text-2xl h-6 mx-auto flex-wrap  text-center font-medium" >Predict  <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#fefae0]">
          <span class="relative text-white dark:text-gray-950">Mobile</span></span> price!</h3>




        <div class="display-flex mx-auto justify-center align-middle">

          <form onSubmit={handleSubmit} class="mt-3 p-2">
                        <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Select brand</h4>

            <select className="  flex content-center justify-center text-white font-medium cpt-4 text-center mx-auto" name="brand" id="brand">
              <option className=" text-black bg-white" value={2}>OPPO</option>
              <option className="text-black bg-white" value={3} >HTC</option>
              <option className="text-black bg-white" value={2} >IQOO</option>
              <option className=" text-black bg-white" value={4}>Google Pixel</option>
              <option className="text-black bg-white" value={2} >L.G</option>
              <option className="text-black bg-white" value={3} >ASUS</option>
              <option className=" text-black bg-white" value={0}>Realme</option>
              <option className="text-black bg-white" value={0} >GIONEE</option>
              <option className="text-black bg-white" value={4} >Apple</option>
              <option className=" text-black bg-white" value={1}>Nokia</option>
              <option className="text-black bg-white" value={3} >Samsung</option>
              <option className="text-black bg-white" value={1} >Lenovo</option>
              <option className=" text-black bg-white" value={1}>Motorola</option>
              <option className="text-black bg-white" value={1} >POCO</option>
              <option className="text-black bg-white" value={0} >Infinix</option>

              <option className="text-black bg-white" value={2} >Vivo</option>

              <option className="text-black bg-white" value={1} >Xiaomi</option>



            </select>
            



            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Storage Capacity</h4>
            <input type="number" name="Storage" id="storage" placeholder="Storage in GB" min={0} required class="flex justify-center mx-auto  rounded-md bg-[#d5cfe1] border-2"></input>

            <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">RAM capacity</h4>
            <input type="number" name="RAM" id="RAM" placeholder="RAM capacity" min={0} required class="flex justify-center mx-auto  rounded-md bg-[#d5cfe1] border-2"></input>

           
            




          <h4 class="display-flex text-white font-medium cpt-4 text-center mx-auto">Enter rating out of 5</h4>
            <input type="number" name="rating" id="rating" placeholder="Rating" step={0.01} min={0} required class="flex justify-center mx-auto  rounded-md bg-[#d5cfe1] border-2"></input>

            <button class="flex justify-centers mx-auto bg-green-400 font-medium p-2 m-3 rounded-xl border-2 hover:bg-white hover:text-black hover:border-black hover:scale-110 ease-in-out duration-75" type="submit">Calculate price</button>
          </form>
        </div>
        <Results price={price} buttonClicked={buttonClicked}/>


      </div>

    </div>
  )
}
export default PredictMobile