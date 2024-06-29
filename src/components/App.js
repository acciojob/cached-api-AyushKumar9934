
import React, { useEffect, useMemo, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData]=useState(null);
    const [loading,SetLoading]=useState(true);
   
  
  useEffect(()=>{
    const fetchData=async()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/posts");
   const data=await res.json();
   setData(data);
   SetLoading(false);}
   fetchData();
  
  },[])
  const memoisedData=useMemo(()=>data,[data]);
  return (
    <div>
      <h1>OUTPUT:</h1><br />
      {
        loading?(<p>Loading...</p>):memoisedData.map((item)=>{
        return <><b>{item.title}</b>
          <p>{item.body}</p></> 
        })
      }
      
  

    </div>
  )
}

export default App
