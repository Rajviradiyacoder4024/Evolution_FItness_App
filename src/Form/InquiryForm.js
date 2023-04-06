import React from "react";

function InquiryForm () {
    return(

<div class="bg-new">
    <div class="bg-white p-4 px-4 mt-10 mr-20 ml-20">

      <button class="flex text-neutral-700 items-center px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="1rem"
          fill="currentColor"
        >
          <path
            d="M448 256C448 264.8 440.6 272 431.4 272H54.11l140.7 149.3c6.157 6.531 5.655 16.66-1.118 22.59C190.5 446.6 186.5 448 182.5 448c-4.505 0-9.009-1.75-12.28-5.25l-165.9-176c-5.752-6.094-5.752-15.41 0-21.5l165.9-176c6.19-6.562 16.69-7 23.45-1.094c6.773 5.938 7.275 16.06 1.118 22.59L54.11 240h377.3C440.6 240 448 247.2 448 256z"
          />
        </svg>
        <p class="ml-2 text-lg font-bold uppercase">back to inquiry list</p>
      </button>


      <div class="border rounded p-4 mt-4">
        <div class="flex flex-wrap gap-4">
          <div class="flex-auto">
            <label class="block mb-2" for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              placeholder="First Name"
              class="border rounded p-2 w-full"
            />
          </div>
          <div class="flex-auto">
            <label class="block mb-2" for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              placeholder="Last Name"
              class="border rounded p-2 w-full"
            />
          </div>
          <div class="flex-auto">
            <label class="block mb-2" for="phone">Phone</label>
            <input
              type="number"
              id="phone"
              placeholder="Phone"
              class="border rounded p-2 w-full"
            />
          </div>
          </div>


          <div class="flex flex-wrap gap-4">
          <div class="flex-auto">
            <label class="block mb-2" for="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Email"
              class="border rounded p-2 w-full"
            />
          </div>
          <div class="flex-auto">
            <label class="block mb-2" for="age">Age</label>
            <input
              type="number"
              id="age"
              placeholder="Age"
              class="border rounded p-2 w-full"
            />
          </div>
          <div class="flex-auto">
            <label class="block mb-2">Gender</label>
            <div class="w-52 h-10 flex justify-between items-center">
              <label for="male">
                <input type="radio" name="gender" id="male" checked />
                <span>Male</span>
              </label>
              <label for="female">
                <input type="radio" name="gender" id="female" />
                <span>Female</span>
              </label>
              <label for="other">
                <input type="radio" name="gender" id="other" />
                <span>Other</span>
              </label>
            </div>
          </div>
          </div>


          <div class="flex flex-wrap gap-4">
          <div class="flex-auto">
            <label class="block mb-2" for="AOC">Area of City</label>
            <input
              type="number"
              id="AOC"
              placeholder="Area of City"
              class="border rounded p-2 w-full lg:w-[417px]"
            />
          </div>
          <div class="flex-auto">
            <label class="block mb-2 lg:ml-[-430px]" for="ref">Reference</label>
            <select
              class="border rounded p-2 bg-transparent  h-10 text-gray-400 w-full lg:w-[417px] lg:ml-[-430px]"
              id="ref"
            >
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
              <option value="6">Option 6</option>
            </select>
          </div>
          </div>


          <div class="flex flex-wrap gap-4">
          <div class="flex-auto">
            <label class="block mb-2">Fitness Goal</label>
            <div class="flex gap-4 flex-wrap">
              <label for="1" class="tailwind">
                <input type="checkbox" name="fitness" id="1" />
                <span class="ml-2">Improve general health</span>
              </label>
              <label for="2" class="tailwind">
                <input type="checkbox" name="fitness" id="2" />
                <span class="ml-2 w-full">Lose weight / body fat</span>
              </label>
              <label for="3" class="tailwind">
                <input type="checkbox" name="fitness" id="3" />
                <span class="ml-2 w-full">Improve fitness</span>
              </label>
              <label for="4" class="tailwind">
                <input type="checkbox" name="fitness" id="4" />
                <span class="ml-2 w-full">Improve muscle tone</span>
              </label>
              </div>
              <div class="flex gap-4 flex-wrap">
              <label for="5" class="tailwind">
                <input type="checkbox" name="fitness" id="5" />
                <span class="ml-2">Gain weight / muscle</span>
              </label>
              <label for="6" class="tailwind">
                <input type="checkbox" name="fitness" id="6" />
                <span class="ml-2">Improve flexibility</span>
              </label>
              <label for="7" class="tailwind">
                <input type="checkbox" name="fitness" id="7" />
                <span class="ml-2">Increase Strength & power</span>
              </label>
              <label for="8" class="tailwind">
                <input type="checkbox" name="fitness" id="8" />
                <span class="ml-2">Reduce stress</span>
              </label>
              </div>
              <div class="flex gap-4 flex-wrap">
              <label for="9" class="tailwind">
                <input type="checkbox" name="fitness" id="9" />
                <span class="ml-2">Improve performance</span>
              </label>
              <label for="10" class="tailwind">
                <input type="checkbox" name="fitness" id="10" />
                <span class="ml-2">Rehabilitation Injury</span>
              </label>
              <label for="11" class="tailwind">
                <input type="checkbox" name="fitness" id="11" />
                <span class="ml-2">Other</span>
              </label>
            </div>
          </div>
          </div>


          <div class="flex gap-4 flex-wrap mt-10">
          <div class="flex-auto">
            <label class="block mb-2" for="date"
              >From when you intend to join Us</label
            >
            <input
              type="date"
              id="date"
              placeholder="First Name"
              class="border rounded p-2 h-10 text-gray-400 w-full"
            />
          </div>
          <div class="flex-auto">
            <label class="block mb-2" for="time"
              >When Is The Best Time To Call You</label
            >
            <input
              type="time"
              id="time"
              placeholder="First Name"
              class="border rounded p-2 h-10 text-gray-400 w-full"
            />
          </div>
          </div>  


          <div class="flex gap-4 flex-wrap">
          <div class="flex-auto">
            <label class="block mb-2" for="att">Attended By</label>
            <select
              class="border rounded p-2 bg-transparent h-10 text-gray-400 w-full"
              id="att"
            >
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
              <option value="4">Option 4</option>
              <option value="5">Option 5</option>
              <option value="6">Option 6</option>
            </select>
          </div>
          <div class="flex-auto">
            <label class="block mb-2">Status</label>
            <div class="w-52 h-10 flex justify-between items-center">
              <label for="pending">
                <input type="radio" name="status" id="pending" checked />
                <span className="ml-2 ">Pending</span>
              </label>
              <label for="converted">
                <input type="radio" name="status" id="converted" />
                <span className="ml-2 ">Converted</span>
              </label>
            </div>
          </div>
          <div class="flex-auto">
            <label class="block mb-2" for="anything">
              <p>Anything You Want To Share With Us</p>
              <p>Regarding Your Health</p>
            </label>
            <input
              type="text"
              id="anything"
              placeholder="Anything You Want To Share With Us Regarding Your Health"
              class="border rounded p-2 h-10 w-full"
            />
          </div>
          </div>

          <div class="flex gap-4 flex-wrap">
          <div class="flex-auto">
            <label class="block mb-2" for="comment">Comments</label>
            <textarea
              placeholder="Your Comments..."
              id="comment"
              cols="30"
              rows="4"
              class="border rounded p-2 w-full"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          class="rounded-full mt-4 mx-4 py-2 px-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold uppercase"
        >
          Save
        </button>

</div>
</div>
</div>
    );
}

export default InquiryForm;