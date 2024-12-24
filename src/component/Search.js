import React, { useState } from 'react'
import { Sresult } from './Sresult'

export const Search = () => {
    const[img ,setImg] = useState('')

const inputEvent=(event)=>{
    const data = event.target.value
    console.log(data)
    setImg(data)

}

  return (
    <>
    <div className="searchbar">
    <input type="text" placeholder="anything else" onChange={inputEvent} value={img}/>

    {img === '' ? null : <Sresult name ={img}/>
    }
    </div>

    </> 
  )
}
