import { useDispatch, useSelector } from "react-redux";
import { changeNum } from "../store04";

function Cart04(){
  let state = useSelector((state)=>state);
  let dispatch = useDispatch();

  // console.log(state)
  return(
    <div>
      <p>{state.num}</p>
      <p>
      <button onClick={()=>{dispatch(changeNum(10))}}>10 +</button>
      <button onClick={()=>{dispatch(changeNum(100))}}>100 +</button>
      </p>
      
    </div>
  )
}

export default Cart04;
