import { createSlice,configureStore } from "@reduxjs/toolkit";

let user = createSlice({
  name  : 'user',
  initialState : {
    name:'Park',
    age:20},
  reducers : {
    changeName(state){
      return 'Park' + state;
    },
    changeAge(state){
      state.age += 1;
    }
  }
})

export let {changeName,changeAge} = user.actions;


export default configureStore({
  reducer : {
    user : user.reducer
  }
})