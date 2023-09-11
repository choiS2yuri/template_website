import { createGlobalStyle } from 'styled-components'



const GlobalStyle =
createGlobalStyle`
@font-face {
    font-family: 'HakgyoansimWoojuR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimWoojuR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

    *{margin: 0; padding: 0; font-family: 'HakgyoansimWoojuR';}
    ul{list-style:none}
    a{text-decoration: none; color: #000}
`

export default GlobalStyle