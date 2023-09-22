import React from 'react'
import { useSelector } from 'react-redux';
import Modal from '../components/Modal';
import { loggedIn } from '../store';
import { useNavigate } from 'react-router-dom';

function Modify() {
  const navigate = useNavigate("");
  const userState = useSelector(state => state.user.loggedIn);
  console.log(userState)


  return (
    <>
      {
        !userState  ?  <Modal error={"로그인이 필요합니다"} onClose={()=>{navigate("/login")}}/>: ""
      }
    </>
  )
}

export default Modify