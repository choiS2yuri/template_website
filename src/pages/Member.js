import React, { useState } from 'react'
import styled from 'styled-components'
import { firebaseAuth, createUserWithEmailAndPassword } from './../firebase/indes'
import {doc, setDoc, getFirestore} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import Modal from '../components/Modal'

const Container = styled.div`
  display: flex;
  background-color: #f5f5f5;
  justify-content: center;
  height: calc(100vh - 86px);
  align-items: center;
`
const SignUp = styled.div`
  width: 35vw; padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  background-color: #fff;
  border-radius: 10px;
  @media screen and (max-width: 1024px) {
    width: 60vw;
  }
  @media screen and (max-width: 640px){
    width: 70vw;
  }
`
const Title = styled.h1`
  font-size: 24px;
  text-align: center; margin-bottom: 20px;
`
const Input = styled.input`
  width: 100%; padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px; box-sizing: border-box;
`
const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  border: none;
  color: #fff; cursor: pointer;
`
const Password = styled.div`
  position: relative;
  width: 100%;
  svg{
    position: absolute;
    right: 10px;
    top: 12.5px;
    cursor: pointer;
    color: #ddd;
    font-size: 10px;
  }
`



function Member({isModal, setIsModal, errorMessage}) {
  const [name, setName] = useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const [passwordConfirm, setPasswordConfirm] =useState("");
  const [nickname, setNickname] =useState("");
  const [phone, setPhone] =useState("");
  const [error, setError] =useState("");
  const [eye, setEye] = useState([0,0]);
  
  const navigate = useNavigate();
  
  const toggleEye = (index) =>{
    const newEye = [...eye];
    //원래 있던 eye의 배열 값을 복사해 배열을 벗긴다.
    //[[0,0]] > [] 없애는게 ...표현 > 다시말해서 같은값이 복사가 된다.
    newEye[index] = !newEye[index];
    // 눈 을 첫번째를 클릭 했다면 newEye[0] = 부정 즉, flase > true 로 변경된다 [1,0]
    setEye(newEye)
    //그리고 그 값을 쓰기 전용인 setEye에 새로운 배열값을 저장한다.
  }
  const PhoneNumber = (e) =>{
    const value = e.target.value;

    e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/-{1,2}$/g, "");
    setPhone(value);
  }

  const errorMsg = (errorCode) =>{
    const firebaseError = {
      'auth/admin-restricted-operation' : "빈 데이터가 있다",
      'auth/email-already-in-use' : "이미 사용중인 이메일 주소",
      'auth/invalid-email' : "유효하지 않음 이메일 주소",
      'auth/operation-not-allowed' : "이메일/비밀번호 계정이 비활성화 되어있습니다.",
      'auth/weak-password' : "너무 짧은 비밀번호를 사용하였습니다.(6자리)",
      'invalid-argument' : "몰라몰라"
    }
    return firebaseError[errorCode] || '알 수 없는 에러가 발생하였습니다.'
  }
  const isValidPhone = (phone) =>{
    const regex = /^01[0-9]-[0-9]{3,4}-[0-9]{4}$/;
    return regex.test(phone)
  }
  const isValidEmail = (email) =>{
    const regex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/
    return regex.test(email)
  }
  // 정규식코드에 일치하는 값이 잇는지 확인하는 코드 test()



  const signUp = async (e)=>{
    e.preventDefault();

    let errorMessage = "";
    if(name.length === 0){
      errorMessage = "이름";
    }else if(nickname.length === 0){
      errorMessage = "닉네임";
    }else if(!isValidPhone(phone)){
      setError("유효한 전화번호를 입력해주세요");
      setIsModal(!isModal)
      return;
      
    }else if(!isValidEmail(email)){
      setError("유효한 이메일 주소를 입력해주세요");
      setIsModal(!isModal)
      return;
    }else if(password.length === 0){
      errorMessage = "비밀번호";
    }else if(passwordConfirm.length === 0){
      errorMessage = "비밀번호 확인";
    }else if(password !== passwordConfirm){
      setError("비밀번호가 일치하지 않습니다.");
      setIsModal(!isModal)
      return;
    }
    
    if(errorMessage){
      setError(errorMessage + " 이(가) 비어 있습니다.")
      setIsModal(!isModal)
      return;
    }
    try{
      const {user} = await createUserWithEmailAndPassword
      (firebaseAuth, email, password)

      const userProfile = {
        name,
        nickname,
        phone
      }

      await setDoc(doc(getFirestore(), "users", user.uid),userProfile)
      alert("회원가입이 완료되었습니다.")
      navigate('/')
    }catch(error){
      setError(errorMsg(error.code));
      setIsModal(!isModal)
      console.log(error.code);
    }
  }
  return (
    <>
    {
      isModal && <Modal />
    }
      <Container>
        <SignUp>
          <Title>회원가입</Title>
          <Input value={name} onChange={(e)=>{setName(e.target.value)}} type='text' className='name' placeholder='이름'/>
          <Input value={nickname} onChange={(e)=>{setNickname(e.target.value)}} type='text' className='nickname' placeholder='닉네임'/>
          <Input onInput={PhoneNumber} maxLength={13} type='text' className='phone' placeholder='전화번호'/>
          <Input value={email} onChange={(e)=>{setEmail(e.target.value)}}type='email' className='email' placeholder='이메일'/>


          <Password>
            <Input value={password} onChange={(e)=>{setPassword(e.target.value)}} type={eye[0] ? "text" : "password"} className='password' placeholder='비밀번호'/>
            <FontAwesomeIcon icon={eye[0] ? faEye : faEyeSlash} onClick={()=>{
              toggleEye(0)
            }}/>
          </Password>
          <Password>
            <Input type={eye[1] ? "text" : "password"} onChange={(e)=>{setPasswordConfirm(e.target.value)}} className='confirm_password' placeholder='비밀번호 확인'/>
            <FontAwesomeIcon icon={eye[1] ? faEye : faEyeSlash} onClick={()=>{
              toggleEye(1)
            }}/>
          </Password>
          

          <Button onClick={signUp}>가입</Button>
        </SignUp>
      </Container>
    </>
  )
}

export default Member