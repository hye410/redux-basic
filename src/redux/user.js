import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name : 'user',
  initialState : {
    people : 'people01',
    age : 20},
  reducers : {
    changeAge(state,action){
      state.age += action.payload;
    }
  }
  }
)

export let {changeAge} = user.actions;

//위에 export let이거를 store에서 받아서 그쪽에서 export하는 사람도 있음 근데 이렇게 같이 쓰는게 관리가 더 편해서 그걸 추천,,

export default user;