import React, {useContext, useEffect, useState} from "react";
import axios from "axios";

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({children}) => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    const getMealsByName = async (name) => {
        try {
            const response = await fetch(`${allMealsUrl}?s=${name}`);
            const data = await response.json();
            //console.log(data.meals[0]);
            return data.meals[0];
        } catch(error) {
            console.log(error);
            return null;
        }
    };

    const getRandomMeal = async () => {
        try {
            const response = await fetch(randomMealUrl);
            const data = await response.json();
            //console.log(data);
            return data.meals[0];
        } catch(error) {
            console.log(error);
            return null;
        }
    };

    const fetchMeals = async (url) => {
        setLoading(true);
        try {
            const {data} = await axios(`${url}?s=a`);
            setMeals(data.meals);
        } catch(error) { 
            console.log('error', error.response);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMeals(allMealsUrl);
    }, []);

    return (
        <AppContext.Provider value={{meals, loading}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };