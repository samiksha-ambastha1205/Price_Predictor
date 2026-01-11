import { useState } from "react";
import Results from "./Results";


const PredictLaptop = () => {
  const url = "http://127.0.0.1:8000"
  const [price, setPrice] = useState(0);
  const [buttonClicked, setbuttonClicked] = useState(false);
  var calculatedPrice;

  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const ram = Number(formData.get('RAM'));
  const screensize = Number(formData.get('screensize'));
  const os = Number(formData.get('os'));
  const weight = Number(formData.get('weight'));
  const cpu = Number(formData.get('cpu'));
  const gpu = Number(formData.get('GPU'));
  const laptoptype = Number(formData.get('laptoptype'));
  const touchscreen = Number(formData.get('touchscreen'));
  const hdd = Number(formData.get('hdd'));
  const ssd = Number(formData.get('ssd'));
  const resx = Number(formData.get('xres'));
  const resy = Number(formData.get('yres'));

  const cat2in1 = (laptoptype === 5) ? 1 : 0;
  const Gaming = (laptoptype === 2) ? 1 : 0;
  const netbook = (laptoptype === 1) ? 1 : 0;
  const notebook = (laptoptype === 0) ? 1 : 0;
  const ultrabook = (laptoptype === 3) ? 1 : 0;
  const Workstation = (laptoptype === 4) ? 1 : 0;
  const isAppleFlag = (os === 11) ? 1 : 0;
  const hasdgpu = (gpu > 1) ? 1 : 0;


  const input = {
    ScreenSize: screensize,
    RAM: ram,
    OperatingSystemVersion: os,
    Weight: weight,
    Category2in1Convertible: cat2in1,
    Category_Gaming: Gaming,
    Category_Netbook: netbook,
    Category_Notebook: notebook,
    Category_Ultrabook: ultrabook,
    Category_Workstation: Workstation,
    x_res: resx,
    y_res: resy,
    isApple: isAppleFlag,
    isTouchScreen: touchscreen,
    cpu_tier: cpu,
    ssd_gb: ssd,
    hdd_gb: hdd,
    gpu_power: gpu,
    has_dgpu: hasdgpu,
    isMac: isAppleFlag
  };

  console.log("Sending payload:", input);

  try {
    const response = await fetch(`${url}/predictLaptop`, {
      method: "POST",
      body: JSON.stringify(input),
      headers: { "Content-type": "application/json" }
    });

    if (response.status === 422) {
      const errorDetail = await response.json();
      console.error("Validation Error details:", errorDetail);
      alert("FastAPI didn't like the data format. Check console.");
      return;
    }

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();
    
    let finalPrice = data;
    if (finalPrice < 0) finalPrice = 0;
    
    setPrice(finalPrice);
    setbuttonClicked(true);

  } catch (error) {
    console.error("Fetch error:", error);
    alert("Could not connect to the backend.");
  }
};

  return (
    <div class="justify-center content-center flex">
      <div class="justify-center display-flex  shadow-2xl m-4 min-h-fit h-70 p-4 max-w-125  min-w-90 border-2 border-white rounded-3xl bg-black">

        <h3 class="text-[#e1dee9] text-2xl h-6 mx-auto flex-wrap  text-center font-medium" >Predict  <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#fefae0]">
          <span class="relative text-white dark:text-gray-950">Laptop   </span></span> price!</h3>

      


        <div class="display-flex mx-auto justify-center align-middle">

          <form onSubmit={handleSubmit} class = "mt-3 p-2">

            <h4 class ="display-flex text-white font-medium text-center mx-auto">Enter RAM value in GB</h4>
          <input type="number" name="RAM" id="R" placeholder="RAM value" min={0} required class="flex justify-center mx-auto  rounded-md bg-[#d5cfe1] mb-4  border-2"></input>

          <h4 class ="display-flex text-white font-medium text-center mx-auto">Enter screen size in inches</h4>
          <input type="number" name="screensize" id="ss" placeholder="Screen size" step={0.01} min={0} required class="flex justify-center mx-auto mb-4   rounded-md bg-[#d5cfe1] border-2"></input>

          <h4 class ="display-flex text-white font-medium text-center mx-auto">Select OS type</h4>
         <select id="os" name="os" class = " mb-4 w-40 bg-linear-180 text-white from-gray-400 to-gray-700 flex justify-center mx-auto  rounded-md bg-black" >
            <option value={10}>Windows 10</option>
            <option value={8}>Windows 8</option>
            <option value={7}>Windows 7</option>
            <option value={11}>Mac OS </option>
            
          </select>

        <h4 class ="display-flex text-white font-medium cpt-4 text-center mx-auto">Select processor type</h4>
        <select id="cpu" name="cpu" className = "mb-4 w-40 bg-linear-180  from-gray-400 to-gray-700   text-white flex justify-center mx-auto max-w-70 rounded-md bg-black ">
            <option value={2}>i3,Ryzen-3 or similar chips</option>
            <option value={3}>i5,Ryzen-5 (U/H) or similar chips</option>
            <option value={4}>i7,Ryzen-7 or similar chips</option>
            <option value={5}>i9, Ryzen-9 or similar chips</option>
            <option value={1}>Pentium/Celeron or similar chips</option>
            <option value={0}>Others</option>
          </select>
        <h4 class ="display-flex text-white font-medium text-center mx-auto">Select GPU type</h4>
          <select id="G" name="GPU" class = " mb-4 w-40 bg-linear-180  from-gray-400 text-white to-gray-700 flex justify-center mx-auto  rounded-md bg-black">
            <option value={1}>Integrated GPU (Intel Iris / AMD Vega)</option>
            <option value={2}>Entry-level dGPU (MX series)</option>
            <option value={4.65}>Mid-range GPU (GTX 1650 / GTX 1660)</option>
            <option value={8.1}>Lower RTX-class (RTX 2050 / RTX 3050)</option>
            <option value={50}>Mid RTX-class (RTX 3060 / RTX 4050)</option>
            <option value={100}>High-end RTX (RTX 3070 / 3080 / 4070+)</option>
          </select>
      <h4 class ="display-flex text-white font-medium text-center mx-auto">Laptop type</h4>
         <select id="laptoptype" name="laptoptype" class = " mb-4 w-40 bg-linear-180  from-gray-400  text-white to-gray-700 flex justify-center mx-auto max-w-70 rounded-md bg-black" >
            <option value={0}>Notebook</option>
            <option value={1}>Netbook</option>
            <option value={2}>Gaming </option>
            <option value={3}>Ultrabook</option>
            <option value={4}>Workstation</option>
            <option value={5}>2 in 1 convertible</option>
            
          </select>
          
          <h4 class ="display-flex text-white font-medium text-center mx-auto">Is Touchscreen?</h4>
         <select id="touchscreen" name="touchscreen" class = " mb-4 w-40 bg-linear-180  from-gray-400 text-white to-gray-700 flex justify-center mx-auto  rounded-md bg-black " >
            <option value={1}>Yes</option>
            <option value={0}>No</option>
       
            
          </select>


          <h4 class ="display-flex text-white font-medium text-center mx-auto">Enter HDD value in GB(0 if no hard disk)</h4>
          <input type="number" name="hdd" id="hdd" placeholder="Storage value in GB" min={0} required class="flex justify-center mx-auto  rounded-md mb-4  bg-[#d5cfe1] border-2"></input>

          <h4 class ="display-flex text-white font-medium text-center mx-auto">Enter SSD value in GB(0 if no SSD)</h4>
          <input type="number" name="ssd" id="ssd" placeholder="Storage value in GB" min={0} required class="flex justify-center mx-auto  rounded-md mb-4  bg-[#d5cfe1] border-2"></input>


         

          <h4 class ="display-flex text-white not-[]: font-medium text-center mx-auto">Enter laptop's weight in kg</h4>
          <input type="number" name="weight" id="W" placeholder="Weight" min={0}  required step="any" class="flex justify-center mx-auto  rounded-md mb-4  bg-[#d5cfe1] border-2"></input>


           <h4 class ="display-flex text-white font-medium text-center mx-auto"> Resolution X</h4>
          <input type="number" min={0} required name="xres" id="xres" step="any" placeholder="x-resolution in pixels" class="flex justify-center mx-auto mb-4 rounded-md bg-[#d5cfe1] border-2"></input>

          <h4 class ="display-flex text-white font-medium text-center mx-auto"> Resolution Y</h4>
          <input type="number" min={0} required name="yres" id="yres" step="any" placeholder="Y-resolution in pixels" class="flex justify-center mx-auto mb-4   rounded-md bg-[#d5cfe1] border-2"></input>

    
          

   
         

      <button class = "flex justify-centers mx-auto bg-green-400 font-medium p-2 m-3 rounded-xl border-2 hover:bg-white hover:text-black hover:border-black hover:scale-110 ease-in-out duration-75" type="submit">Calculate price</button>
      </form>
        </div>
        <Results price={0.0054*price} buttonClicked={buttonClicked}/>
        

      </div>

    </div>
  )
}

export default PredictLaptop;