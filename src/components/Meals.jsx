import { useGlobalContext } from "../context";
import {BsHandThumbsUp} from 'react-icons/bs';

const Meals = () => {

    const {meals} = useGlobalContext();
    
    return (
        <section className="section-center">
            {meals.map((singleMeal) => {
                const { idMeal, strMeal: title, strMealThumb: image, strTags: tags } = singleMeal;
                return (
                    <article key={idMeal} className="single-meal">
                        <img src={image} alt={tags} style={{width:'100%'}} className='img' />
                        <footer>
                            <h5>{title}</h5>
                            <button className='like-btn'>
                                <BsHandThumbsUp />
                            </button>
                        </footer>
                    </article>
                )
            })}
            <h1>Meals Component</h1>
        </section>
    )
}

export default Meals;