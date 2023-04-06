import React from "react";

function PhotoTrackingRecipte () {
    return(
<div className="p-8 bg-gray-100">
    <div className="p-8 bg-white border rounded">
        
      <div className="inline-block w-4 h-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
          />
        </svg>
      </div>

      <div className="inline-block mb-4 ml-1 text-lg font-bold uppercase ">back to photo tracking</div>
      <div>Edit Recipe</div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="col-span-2 md:col-span-1">
          <label for="ingred" className="block mb-2">Ingredients</label>
          <textarea className="w-full border rounded" id="ingred" cols="30" rows="5"></textarea>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <label for="prep" className="block mb-2">Preparation</label>
            <textarea className="w-full border rounded" id="prep" cols="30" rows="5"></textarea>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Preparation</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Preparation</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Preparation</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Preparation</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Preparation</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Preparation</label>
            <input type="text" className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Preparation</label>
            <select className="w-full p-2 border rounded">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
            </select>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Preparation</label>
            <select className="w-full p-2 border rounded">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
            </select>
          </div>
        </div>


        <div className="col-span-2 md:col-span-1">
          <div className="col-span-2 md:col-span-1">
            <label className="block mb-2">Image</label>
            <img
              src="https://i0.wp.com/bane-tech.com/wp-content/uploads/2015/10/V.png?fit=1200%2C1200&ssl=1"
              alt="image"
              width="150px"
            />
          </div>
        </div>
      </div>
      
      <button className="px-4 py-2 mt-8 font-semibold text-white uppercase bg-orange-500 rounded-full">
        update recipe
      </button>


</div>
</div>
    );
}

export default PhotoTrackingRecipte;