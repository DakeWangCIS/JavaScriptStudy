import React, {useContext} from 'react';
import classes from './Counter.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cartContext";

const Counter = (props) => {

    // Get the context
    const cartCtx = useContext(CartContext);

    // Add button handler
    const addButtonHandler = () => {
        // cartCtx.addItem(props.meal);
        cartCtx.cartDispatch({type: 'ADD', meal: props.meal});
    }

    // Sub button handler
    const subButtonHandler = () => {
        // cartCtx.removeItem(props.meal);
        cartCtx.cartDispatch({type: 'REMOVE', meal: props.meal});
    }

    return (
        <div className={classes.Counter}>

            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                        <button onClick={subButtonHandler} className={classes.Sub}><FontAwesomeIcon icon={faMinus}/></button>
                        <span className={classes.Count}>{props.meal.amount}</span>
                    </>
                ) : null
            }

            <button
                onClick={addButtonHandler}
                className={classes.Add}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    );
};

export default Counter;