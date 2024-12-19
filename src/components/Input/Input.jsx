import React from 'react'
import { IoIosSearch } from "react-icons/io";

const Input = ({type, name,value, onChange }) => {
  return (
    <>
    {/* <label for={name} className='form-label'>{name}</label>
    <input type={type} value={value} onChange={onChange} id={name}/> */}
    <div className="input-group mb-3">
    <span className="input-group-text" id={name}><IoIosSearch /></span>
    <input type={type} className="form-control" placeholder="Username" value={value} onChange={onChange} />
    </div>
    </>
  )
  
}

export default Input
