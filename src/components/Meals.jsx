import { useGlobalContext } from "../context";

const Meals = () => {

    const {meals} = useGlobalContext();
    
    return (
        <section>
            {meals.map((singleMeal, index) => {
                return (
                    <h4 key={index}>Single Meal</h4>
                )
            })}
            <h1>Meals Component</h1>
        </section>
    )
}

export default Meals;