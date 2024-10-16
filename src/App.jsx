import { useState } from 'react'


function App() {
  const[count,setcount]=useState(1)
  function name() {
    if (count=="nikhil") {
      setcount(0)
    }
    setcount(p=>p=p+1)
  }
  function lol() {
    setcount("nikhil")
  }
  console.log(count);
  
  return (
    <>
     <h1> count is {count} </h1>
     <button className="one " onClick={()=>name()}>
      clickk me
     </button>
     <button className="one" onClick={()=>lol()}>reset</button>
     
    </>
  )
}

export default App
