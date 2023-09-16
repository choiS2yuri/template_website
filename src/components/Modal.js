import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/'


const Button = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background-color: #007bff;
  border: none;
  color: #fff; cursor: pointer;
`
const ModalBackground = styled.div`
  position: fixed; top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0,0,0,0.7);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalContent = styled.div`
  flex-basis: 360px;
  background-color: #fff;
  padding: 60px 20px 40px; 
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  >svg{
    flex-basis: 100%;
    font-size: 80px;
    color: lightcoral;
  }
  >p{
    font-size: 16px; font-weight: bold; margin: 24px 0;
  }
`
function Modal({isModal, setIsModal, error}) {
  
  return (
    <>
        {
            // isModal &&
            <ModalBackground>
            <ModalContent >
                <FontAwesomeIcon icon={faTriangleExclamation} />
                <p>{error}</p>
                <Button onClick={()=>{setIsModal(!isModal)}}>확인</Button>
            </ModalContent>
            </ModalBackground>  
            
        }
    </>
  )
}

export default Modal