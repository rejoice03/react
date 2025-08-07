import { useContext } from "react";
import { CountContext } from "../../App";

export default function Card() {
    const { count } = useContext(CountContext);
    return (
        <div>
        <h1>My card</h1>
        <hr />
        <p>Curent count is: {count}</p>
        </div>

    )
}