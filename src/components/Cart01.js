import { useSelector } from "react-redux";

function Cart01(){
  // let state = useSelector((state) => {return state})
  let state = useSelector((state) => state)
  // console.log(state)
  return(
    <div>
      {state.user}
    </div>
  )
}

export default Cart01;