import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../store'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../firebase/indes'
import Modal from '../components/Modal'

function Logout() {
    const dispatch = useDispatch("");
    const navigate = useNavigate("");
    const [isModal, setIsModal] = useState(true);
    signOut(firebaseAuth)
    .then(()=>{
        dispatch(logOut());
        // navigate("/")
        sessionStorage.removeItem("users")
    })
    .catch((error)=>{
        console.log(error)
        
    })

  return (
    <>
    {/* <Modal error={error} isModal={isModal} onClose={()=>{setIsModal(false)}}/> */}
        <Modal error="로그아웃 되었습니다." onClose={()=>{setIsModal(false); navigate("/");}} />
        {/*다른 컴퍼넌트에서는 직접적인 함수사용 안됨 처음모달에서 onclose썻기 때문에 여기서도 on close써야함 */}
    </>
  )
}

export default Logout