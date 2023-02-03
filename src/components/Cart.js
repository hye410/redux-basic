import { useSelector,useDispatch } from "react-redux";
import { changeAge } from "../redux/user";

function Cart(){
  let state = useSelector((state) => state);
  // console.log(state)
  let dispatch = useDispatch();

  return(
    <div>
      <p>{state.user.people}</p>
      <p>{state.user.age}</p>
      <button onClick={()=>dispatch(changeAge(10))}>+</button>
    </div>
  )
}

export default Cart;