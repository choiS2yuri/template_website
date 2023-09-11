import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Main from "./pages/Main";
import Aside from "./components/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import Nav from "./components/Nav";
 
function App() {
  
  const light = {
    colors : {
      Primary : "lightpink",
      Secondary : "lightcoral",
      BgColor : "#e9f1f6",
      Color : "#000",
      ContentBg: "#fff"
    }
  }
  const dark = {
    colors : {
      Primary : "#272929",
      Secondary : "#e9e9e9",
      BgColor : "#333",
      Color : "#e9e9e9",
      ContentBg: "#272929"
    }
  }
  const [themeConfig, setThemeConfig] = useState("light");
  const DarkMode = themeConfig === 'light' ? light : dark;
  const ThemeSelect = ()=>{
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light')
  }
  return (
    <>
    
      <ThemeProvider theme={DarkMode}>
        <GlobalStyle />
        <Nav />
          <Aside ThemeSelect={ThemeSelect} themeConfig={themeConfig}/>
            <Routes>
              <Route path="/" element={<Main/>}></Route>
            </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
