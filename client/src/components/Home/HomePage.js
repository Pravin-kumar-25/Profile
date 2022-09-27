import React, { useEffect } from 'react'
import useVerifyToken from '../../customHooks/useVerifyToken'

const HomePage = () => {
  const user = localStorage.getItem('user')
  useVerifyToken()
  console.log(user)

  useEffect(()=> {
    console.log('use eff')
  })


  return (
    <div>HomePage{console.log('inside render')}</div>
  )
}

export default HomePage