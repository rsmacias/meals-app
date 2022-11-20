import React, {useContext, useEffect} from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php';
    const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

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

    const fetchData = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            //console.log(data);
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log('fetchData', fetchData());
        console.log('getRandomMeal', getRandomMeal());
        console.log('getMealsByName', getMealsByName('Arrabiata'));
    }, []);

    return (
        <AppContext.Provider value="hello">
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };