import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { styled } from 'styled-components'
import { toggleTheme } from '../store'
import { useDispatch, useSelector } from 'react-redux'


    const ASide = styled.div`
     position: fixed;
     right: 20px;
     bottom: 20px;
     border: 1px solid #ddd;
     background-color: ${({$isdark})=>($isdark === "light" ? "navy" : "#fff")};
     border-radius: 5px;
     cursor: pointer;
     width: 50px;
     height: 50px;
     line-height: 50px;
     text-align: center;
     svg{
        color: ${({$isdark})=>($isdark === "light" ? "yellow" : "orangered")};
     }
    `
function Aside() {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.dark)

    return (
    <ASide $isdark={theme} onClick={()=>{dispatch(toggleTheme())}}>
        <FontAwesomeIcon icon= { theme === 'light' ? faMoon : faSun} size="lg"/>
    </ASide>
  )
}

export default Aside