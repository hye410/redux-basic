import { useSelector,useDispatch } from "react-redux";
import {changeCounter} from '../store';

function Cart02(){
  let state = useSelector((state)=>state);
  // console.log(state)
  let dispatch = useDispatch();

  return(
    <div>Cart02
    <div>
      {state.counter}
      <p>
        <button onClick={() => dispatch(changeCounter())}> + </button>
      </p>
    </div>
    <div>
      <ul>
        {
          state.cart.map((item) =>{          return(
            <li key={item.id}>
              <dfn>{item.name}</dfn>
              <span>{item.id}</span>
           </li>)
           })
        }
      </ul>
    </div>
   </div>
  )
}

export default Cart02;
