import { useGlobalContext } from "../context";

const Meals = () => {

    const context = useGlobalContext();
    console.log(context);
    return (
        <main>
            <h1>Meals Component</h1>
        </main>
    )
}

export default Meals;