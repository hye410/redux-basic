import { useSelector,useDispatch } from "react-redux";
import { changeAge, changeName } from "../store03";

function Cart03(){
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  // console.log(state)
  return(
    <div>
      Cart3
      <p>
        {state.user.name} <button onClick={() => dispatch(changeName())}>이름바꾸기</button>
      </p>
      <p>
        {state.user.age}
        <button 
        onClick={()=>dispatch(changeAge())}>+</button>
      </p>      
    </div>
    
  )
}

export default Cart03;
