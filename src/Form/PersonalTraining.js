import React from "react";

function PersonalTraining () {
    return(
<div className="flex flex-col flex-wrap gap-4 p-8 bg-gray-100">

    <div className="flex flex-wrap items-center justify-between p-4 bg-white rounded">
      <button>
        <div className="inline-block w-4 h-4 icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
            />
          </svg>
        </div>
        <div className="inline-block ml-1 text-lg font-bold uppercase">back to employee list</div>
      </button>

      <button className="px-4 py-2 font-semibold text-white uppercase bg-purple-900 rounded-lg">
        add level
      </button>
    </div>


    <div className="p-4 bg-white rounded">
      <label for="name" className="block mb-2">Name</label>
      <div className="flex flex-wrap justify-between gap-4">
        <input type="text" 
                id="name" 
                className="p-2 border rounded" />
        <div>
          <button className="px-4 py-2 ml-1 font-semibold text-white uppercase bg-purple-900 rounded-lg">
            add reset
          </button>
          <button className="px-4 py-2 ml-1 font-semibold text-white uppercase bg-orange-500 rounded-lg">
            search
          </button>
        </div>
      </div>
    </div>
    
    
    
    <div className="p-2 bg-white">
      <div>Level</div>
      <hr />
      <div>
        <div className="flex flex-wrap items-center p-2">
          <div className="flex-auto">Level-1</div>
          <div className="flex flex-wrap items-stretch flex-auto gap-2">
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
                />
              </svg>
            </button>

            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C495.8 61.87 498.5 65.24 500.9 68.79C517.3 93.63 514.6 127.4 492.7 149.3L188.5 453.4C187.2 454.7 185.9 455.1 184.5 457.2C174.9 465.7 163.5 471.1 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9zM59.44 452.6L137.6 429.6C139.9 428.9 142.2 427.1 144.4 426.9L108.1 419.6C100.2 418 93.97 411.8 92.39 403.9L85.13 367.6C84.02 369.8 83.11 372.1 82.42 374.4L59.44 452.6zM180.7 393.3L383 191L320.1 128.1L118.7 331.3L128.1 383L180.7 393.3z"
                />
              </svg>
            </button>

            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"
                />
              </svg>
            </button>
          </div>
        </div>

        
        <div className="flex flex-wrap items-center p-2">
          <div className="flex-auto">Level-2</div>
          <div className="flex flex-wrap items-stretch flex-auto gap-2">
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C495.8 61.87 498.5 65.24 500.9 68.79C517.3 93.63 514.6 127.4 492.7 149.3L188.5 453.4C187.2 454.7 185.9 455.1 184.5 457.2C174.9 465.7 163.5 471.1 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9zM59.44 452.6L137.6 429.6C139.9 428.9 142.2 427.1 144.4 426.9L108.1 419.6C100.2 418 93.97 411.8 92.39 403.9L85.13 367.6C84.02 369.8 83.11 372.1 82.42 374.4L59.44 452.6zM180.7 393.3L383 191L320.1 128.1L118.7 331.3L128.1 383L180.7 393.3z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center p-2">
          <div className="flex-auto">Level-3</div>
          <div className="flex flex-wrap items-stretch flex-auto gap-2">
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C495.8 61.87 498.5 65.24 500.9 68.79C517.3 93.63 514.6 127.4 492.7 149.3L188.5 453.4C187.2 454.7 185.9 455.1 184.5 457.2C174.9 465.7 163.5 471.1 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9zM59.44 452.6L137.6 429.6C139.9 428.9 142.2 427.1 144.4 426.9L108.1 419.6C100.2 418 93.97 411.8 92.39 403.9L85.13 367.6C84.02 369.8 83.11 372.1 82.42 374.4L59.44 452.6zM180.7 393.3L383 191L320.1 128.1L118.7 331.3L128.1 383L180.7 393.3z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center p-2">
          <div className="flex-auto">Level-4</div>
          <div className="flex flex-wrap items-stretch flex-auto gap-2">
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C495.8 61.87 498.5 65.24 500.9 68.79C517.3 93.63 514.6 127.4 492.7 149.3L188.5 453.4C187.2 454.7 185.9 455.1 184.5 457.2C174.9 465.7 163.5 471.1 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9zM59.44 452.6L137.6 429.6C139.9 428.9 142.2 427.1 144.4 426.9L108.1 419.6C100.2 418 93.97 411.8 92.39 403.9L85.13 367.6C84.02 369.8 83.11 372.1 82.42 374.4L59.44 452.6zM180.7 393.3L383 191L320.1 128.1L118.7 331.3L128.1 383L180.7 393.3z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center p-2">
          <div className="flex-auto">Level-5</div>
          <div className="flex flex-wrap items-stretch flex-auto gap-2">
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C495.8 61.87 498.5 65.24 500.9 68.79C517.3 93.63 514.6 127.4 492.7 149.3L188.5 453.4C187.2 454.7 185.9 455.1 184.5 457.2C174.9 465.7 163.5 471.1 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9zM59.44 452.6L137.6 429.6C139.9 428.9 142.2 427.1 144.4 426.9L108.1 419.6C100.2 418 93.97 411.8 92.39 403.9L85.13 367.6C84.02 369.8 83.11 372.1 82.42 374.4L59.44 452.6zM180.7 393.3L383 191L320.1 128.1L118.7 331.3L128.1 383L180.7 393.3z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 font-semibold text-white uppercase bg-orange-500 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                width="16px"
              >
                <path
                  d="M128 32H32C14.31 32 0 46.31 0 64v96c0 17.69 14.31 32 32 32s32-14.31 32-32V96h64c17.69 0 32-14.31 32-32S145.7 32 128 32zM416 32h-96c-17.69 0-32 14.31-32 32s14.31 32 32 32h64v64c0 17.69 14.31 32 32 32s32-14.31 32-32V64C448 46.31 433.7 32 416 32zM128 416H64v-64c0-17.69-14.31-32-32-32s-32 14.31-32 32v96c0 17.69 14.31 32 32 32h96c17.69 0 32-14.31 32-32S145.7 416 128 416zM416 320c-17.69 0-32 14.31-32 32v64h-64c-17.69 0-32 14.31-32 32s14.31 32 32 32h96c17.69 0 32-14.31 32-32v-96C448 334.3 433.7 320 416 320z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
    );
}

export default PersonalTraining;