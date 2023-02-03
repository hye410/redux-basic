import { createSlice,configureStore } from "@reduxjs/toolkit";

let num = createSlice({
  name : 'num',
  initialState : 10,
  reducers : {
    changeNum(state,action){
      // console.log(state)
     return  state += action.payload;
   //payload : action으로 넘어온 값을 받음
    }
  }
});

export let { changeNum } = num.actions;

export default configureStore({
  reducer : {
    num : num.reducer
  }
})