import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom';

function Getmethod() {

    const [myData,setMyData] = useState([]);

    const apiGet =() => {
        fetch("http://localhost:5000/w")
        .then(res => res.json())
        .then((json)=>{
                console.log(json);
                setMyData(json);
        })
        .catch(err => console.log(err))
    }
      
  return (
    <div>

      <button className=' bg-slate-500' onClick={apiGet}> fetch api data</button>
      <pre>{JSON.stringify(myData,null,2)}</pre>
    </div>
  )
}

export default Getmethod
