import React, {useContext, useEffect, useState} from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({children}) => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    const getMealsByName = async (name) => {
        fetchMeals(`${allMealsUrl}?s=${name}`);
    };

    const getRandomMeal = async () => {
        fetchMeals(randomMealUrl);
    };

    const fetchMeals = async (url) => {
        setLoading(true);
        try {
            const {data} = await axios(url);
            if(data.meals && data.meals.length > 0) {
                setMeals(data.meals);
            } else {
                setMeals([]);
            }
            
        } catch(error) { 
            console.log('error', error.response);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMeals(`${allMealsUrl}?s=a`);
    }, []);

    return (
        <AppContext.Provider value={{meals, loading, getMealsByName, getRandomMeal}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };