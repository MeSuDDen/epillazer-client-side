import React from 'react'

import './Input.scss'

export default function Input({type, placeholder, value, onChange}) {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
  )
}
