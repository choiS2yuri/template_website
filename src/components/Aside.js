import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { styled } from 'styled-components'


    const ASide = styled.div`
     position: fixed;
     right: 20px;
     bottom: 20px;
     border: 1px solid #ddd;
     background-color: navy;
     color: yellow;
     border-radius: 5px;
     cursor: pointer;
     width: 50px;
     height: 50px;
     line-height: 50px;
     text-align: center;
    `
function Aside({ThemeSelect, themeConfig}) {


    return (
    <ASide onClick={ThemeSelect}>
        <FontAwesomeIcon icon= { themeConfig === 'light' ? faMoon : faSun} size="lg"/>
    </ASide>
  )
}

export default Aside