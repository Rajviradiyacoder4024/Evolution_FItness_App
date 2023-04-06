import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

 function Create() {

const [time,setTime] = useState("");
const [ml,setMl] = useState("");
const [description,setDescription] = useState("");
const [last_modified,setLast_modified] = useState("");

const navigate = useNavigate(   )

function handlesubmit (e) {

    e.preventDefault()
    axios.post("http://localhost:5000/w",{
        time: time,
        ml: ml,
        description : description,
        last_modified: last_modified  
    })
    .then ((res) => {
        console.log(res)
        navigate("/")
    })
    .catch(Error => console.log(Error))
}
  return (
    <div className=" justify-items-center">
      <form className="items-center w-56 pl-5 mt-10 ml-10 bg-slate-300" onSubmit={handlesubmit} >
            <div className="pb-5 ml-10 ">
                <h1>Add New Schedule</h1>
            </div>
        <div>
            <label>Time</label><br></br>
            <input type="text" name='title' placeholder='Time' onChange={(e)=>setTime(e.target.value)}/>
        </div>
        <div>
            <label>Qty</label><br></br>
            <input type="text" name='body' placeholder='Quantiy'onChange={(e)=>setMl(e.target.value)}></input>
        </div>
        <div>
            <label>Description</label><br></br>
            <input type="text" name='body' placeholder='Description'onChange={(e)=>setDescription(e.target.value)} ></input>
        </div>
        <div>
            <label>Complit Time</label><br></br>
            <input type="text" name='body' placeholder='Complit Time' onChange={(e)=>setLast_modified(e.target.value)}></input>
        </div>  
          
      <div className='ml-16 '>
      
      <button className='content-center mt-2 mb-2 bg-blue-600 rounded-md'>submit</button>
       
      </div>  
        </form>
    </div> 
  );
}

export default Create;