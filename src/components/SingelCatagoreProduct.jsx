import React from 'react'

export default function SingelCatagoreProduct({data}) {
    console.log(data)
    const {image,title} = data;
  return (
    <div>
        <img className='h-36 w-36 rounded-full' src={image} alt="" />
        <p>{title}</p>
    </div>
  )
}
