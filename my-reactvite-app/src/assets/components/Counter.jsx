import { useContext, useState } from "react";
import { CountContext } from "../../App";

const Counter = () => {
    const {count, setCount} = useContext(CountContext);
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}
export default Counter