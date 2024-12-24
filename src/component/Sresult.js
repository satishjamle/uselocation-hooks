import React from 'react'

export const Sresult = (props) => {

    const img = `https://picsum.photos/200/300/?mango${props.name}`
  return (
    <>
    <img src={img} alt="search" />
    </>
  )
}


