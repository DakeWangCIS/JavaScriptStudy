import React, {useReducer, useState} from 'react';
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cartContext";
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Cart from "./components/Cart/Cart";

//simulate a group of food data
const MEALS_DATA = [
    {
        id: '1',
        title: 'Sesame Noodle',
        desc: 'Purely 100% hand-made, Shaanxi Belt Noodles boast a delightful chewy texture.',
        price: 10.99,
        img: '/img/meals/1.png'
    },
    {
        id: '2',
        title: 'Tomato&Egg Noodle',
        desc: 'Purely 100% hand-made, Shaanxi Belt Noodles boast a delightful chewy texture.',
        price: 11.99,
        img: '/img/meals/2.png'
    },
    {
        id: '3',
        title: 'Beef Noodle',
        desc: 'Purely 100% hand-made, Shaanxi Belt Noodles boast a delightful chewy texture.',
        price: 12.99,
        img: '/img/meals/3.png'
    },
    {
        id: '4',
        title: 'Rou Jia Mo',
        desc: 'Purely 100% hand-made, Shaanxi Belt Noodles boast a delightful chewy texture.',
        price: 11.99,
        img: '/img/meals/4.png'
    },
    {
        id: '5',
        title: 'Spicy Chicken',
        desc: 'Spicy Chicken is a famous dish in China. It is spicy and delicious. Very good!',
        price: 14.99,
        img: '/img/meals/5.png'
    },
    {
        id: '6',
        title: 'Shui Zhu Pork',
        desc: 'Shui Zhu Pork is a famous dish in China. It is spicy and delicious. Very good!',
        price: 15.99,
        img: '/img/meals/6.png'
    },
    {
        id: '7',
        title: 'Liang Ban Beef',
        desc: 'Liang Ban Beef is a famous dish in China. It is spicy and delicious. Very good!',
        price: 12.99,
        img: '/img/meals/7.png'
    }
];

const cartReducer = (state, action) => {

    const newCart = {...state};

    switch (action.type) {
        default:
            return state;

        case 'ADD':
            if (newCart.items.indexOf(action.meal) === -1) {
                newCart.items.push(action.meal);
                action.meal.amount = 1;
            } else {
                action.meal.amount++;
            }

            newCart.totalAmount++;
            // newCart.totalPrice += meal.price;
            newCart.totalPrice = parseFloat((newCart.totalPrice + action.meal.price).toFixed(2));
            return newCart;

        case 'REMOVE':
            action.meal.amount--;

            if (action.meal.amount === 0) {
                newCart.items.splice(newCart.items.indexOf(action.meal), 1);
            }

            newCart.totalAmount--;
            newCart.totalPrice = parseFloat((newCart.totalPrice - action.meal.price).toFixed(2));
            return newCart;

        case 'CLEAR':
            // set the amount of each food to 0
            newCart.items.forEach(item => delete item.amount);

            newCart.items = [];
            newCart.totalAmount = 0;
            newCart.totalPrice = 0;
            return newCart;
    }
};

const App = () => {

    // Create a state to store the food data
    const [mealsData, setMealsData] = useState(MEALS_DATA);

    // Create a state to store the food data in the shopping cart
    /*
        1. food data [], items
        2. total amount
        3. total price
     */
    // const [cartData, setCartData] = useState({
    //     items: [],
    //     totalAmount: 0,
    //     totalPrice: 0
    // });

    const [cartData, cartDispatch] = useReducer(cartReducer, {
        items: [],
        totalAmount: 0,
        totalPrice: 0
    });

    // Create a function to filter food
    const filterHandler = (keyword) => {
        const lowerCaseKeyword = keyword.toLowerCase();
        const newMealsData = MEALS_DATA.filter(item => item.title.toLowerCase().indexOf(lowerCaseKeyword) !== -1)
        setMealsData(newMealsData);
    }

    // Create a function to add food to the shopping cart
    // const addItem = (meal) => {
    //     const newCart = {...cartData};
    //     if (newCart.items.indexOf(meal) === -1) {
    //         newCart.items.push(meal);
    //         meal.amount = 1;
    //     } else {
    //         meal.amount++;
    //     }
    //
    //     newCart.totalAmount++;
    //     // newCart.totalPrice += meal.price;
    //     newCart.totalPrice = parseFloat((newCart.totalPrice + meal.price).toFixed(2));
    //     setCartData(newCart);
    // };

    // Create a function to remove food from the shopping cart
    // const removeItem = (meal) => {
    //     const newCart = {...cartData};
    //
    //     meal.amount--;
    //
    //     if (meal.amount === 0) {
    //         newCart.items.splice(newCart.items.indexOf(meal), 1);
    //     }
    //
    //     newCart.totalAmount--;
    //     newCart.totalPrice = parseFloat((newCart.totalPrice - meal.price).toFixed(2));
    //
    //     setCartData(newCart);
    // }

    // Create a function to clear the shopping cart
    // const clearCart = () => {
    //     const newCart = {...cartData};
    //
    //     // set the amount of each food to 0
    //     newCart.items.forEach(item => delete item.amount);
    //
    //     newCart.items = [];
    //     newCart.totalAmount = 0;
    //     newCart.totalPrice = 0;
    //     setCartData(newCart);
    // }

    return (
        <CartContext.Provider value={{...cartData, cartDispatch}}>
            <div>
                <FilterMeals onFilter={filterHandler}/>
                <Meals mealsData={mealsData}/>
                <Cart/>
            </div>
        </CartContext.Provider>
    );
};

export default App;