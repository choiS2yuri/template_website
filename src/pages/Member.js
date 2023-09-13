import React from 'react'
import styled from 'styled-components'

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

function Member() {
  return (
    <>
      <Container>
        <SignUp>
          <Title>회원가입</Title>
          <Input type='text' className='name' placeholder='이름'/>
          <Input type='email' className='email' placeholder='이메일'/>
          <Input type='password' className='password' placeholder='비밀번호'/>
          <Input type='password' className='confirm_password' placeholder='비밀번호 확인'/>
          <Button>가입</Button>
        </SignUp>
      </Container>
    </>
  )
}

export default Member