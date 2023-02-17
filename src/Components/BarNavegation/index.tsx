import React, { useState } from "react";

interface FullTime{
    time:any
    setTime:any
}


const BarNavigate = ({time, setTime}: FullTime) => {

const [ searchTime ,setSearchTime] = useState("")
const [ArmazenName, setArmazenName] = useState([])
console.log(time)


 function handleSearch (){
const handlename = time.filter(item => item.name.toLowerCase().includes(searchTime.toLowerCase()))
setTime(handlename)
}

  return(
<>
<div>
 <input type="text" value={searchTime} placeholder="Qual time você esta procurando ?"  onChange={() => handleSearch(event?.target.value)}/>
  </div>
</>
    )
}

export default BarNavigate;