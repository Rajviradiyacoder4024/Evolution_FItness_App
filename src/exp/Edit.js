import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Edit() {
    const [id,setId] = useState();
    const [time,setTime] = useState();
    const [qty,setQty] = useState();
    const [description,setDescription] = useState();
    const [completetime,setCompletetime] =useState();

    const navigate = useNavigate();

    useEffect(() =>{
        setId(localStorage.getItem('id'));
        setTime(localStorage.getItem('time'));
        setQty(localStorage.getItem('qty'));
        setDescription(localStorage.getItem('description'));
        setCompletetime(localStorage.getItem('completetime'));
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3500/w/${id}`,{
            time : time,
            qty : qty,
            description : description,
            completetime : completetime
        }).then(()=>{
            navigate('/');
        }).catch((error)=>{
            console.log(error)
        });
    }
  return (
    <>
       <div className=" justify-items-center">
        <form className="items-center w-56 pl-5 mt-10 ml-10 bg-slate-300" onSubmit={handleUpdate} >
            <div className="pb-5 ml-10 ">
                <h1>Update Data</h1>
            </div>
        <div>
            <label>Time</label><br></br>
            <input type="text" name='title' placeholder='Time' value={time} onChange={(e) => setTime(e.target.value)}/>
        </div>
        <div>
            <label>Qty</label><br></br>
            <input type="text" name='body' placeholder='Quantiy'value={qty} onChange={(e) => setQty(e.target.value)}></input>
        </div>
        <div>
            <label>Description</label><br></br>
            <input type="text" name='body' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}></input>
        </div>
        <div>
            <label>Complit Time</label><br></br>
            <input type="text" name='body' placeholder='Complit Time' value={completetime} onChange={(e) => setCompletetime(e.target.value)}></input>
        </div>      
      <div className='ml-16 '>
        <button className='content-center mt-2 mb-2 bg-blue-600 rounded-md'>submit</button>
      </div>
      <br />
            <div className='d-grid'>
                <input type='submit' value='Update' />
            </div>
        </form>
    </div>
    </>
  )
}

export default Edit
