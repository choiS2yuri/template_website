import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeName } from '../store'

function Main() {


  const a =useSelector(state => state.user)
  console.log(a)
  const b =useSelector(state => state.animal)


  const dispatch = useDispatch()
  return (
    <>
      <p>{a}</p>
      <p>{b}</p>
      <button onClick={()=>{dispatch(changeName())}}>변경</button>      
    </>
  )
}

export default Main