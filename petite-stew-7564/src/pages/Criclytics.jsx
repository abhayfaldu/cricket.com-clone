import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Criclytics = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/pageNotFound')
    console.log(1)
  })
  return (
    <></>
  )
}

export default Criclytics