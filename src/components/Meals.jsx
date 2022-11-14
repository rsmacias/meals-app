import { useContext } from "react";
import { AppContext } from "../context";

const Meals = () => {

    const context = useContext(AppContext);
    console.log(context);
    return (
        <main>
            <h1>Meals Component</h1>
        </main>
    )
}

export default Meals;