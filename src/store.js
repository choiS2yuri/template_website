import { configureStore, createSlice } from "@reduxjs/toolkit";
// 로그인시 정보 값이나 장바구니 상품 정보등 계속해서 프롭스로 정보를 넘기면 오류가 생기니깐 리덕스 사용 
// configureStore
// createSlice = useState
let user = createSlice({
    name: "user",
    //name state 이름
    initialState: {
        loggedIn : false,
        data : null,
        uid : null
    },
    reducers : {
        logIn: (state, action) =>{
            state.loggedIn = true;
            state.uid = action.payload;
        },
        loggedIn : (state, action) =>{
            state.loggedIn = true;
            state.data = action.payload;
        },
        logOut : (state)=>{
            state.loggedIn = false;
            state.data = null;
            state.uid = null;
        }
    }
})



let animal = createSlice({
    name: "animal",
    initialState: "푸바오"
})


let dark = createSlice({
    name: "dark",
    initialState: "light",
    reducers:{
        toggleTheme : (state) => state === "light" ? "dark" : "light"
    }
})

export const{toggleTheme} = dark.actions;
export const{logIn, logOut, loggedIn} = user.actions;

export default configureStore({
    reducer :{
        user : user.reducer,
        animal : animal.reducer,
        dark: dark.reducer
    }
})