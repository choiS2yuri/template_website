import { configureStore, createSlice } from "@reduxjs/toolkit";
// 로그인시 정보 값이나 장바구니 상품 정보등 계속해서 프롭스로 정보를 넘기면 오류가 생기니깐 리덕스 사용 
// configureStore
// createSlice = useState
let user = createSlice({
    name: "user",
    //name state 이름
    initialState: "홍길동",
    reducers : {
        changeName(state) {
            return "테스트" + state} 
    }
    // name의 값
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
export const{changeName} = user.actions;

export default configureStore({
    reducer :{
        user : user.reducer,
        animal : animal.reducer,
        dark: dark.reducer
    }
})