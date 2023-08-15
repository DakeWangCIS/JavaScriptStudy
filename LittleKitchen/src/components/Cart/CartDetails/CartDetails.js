import React, {useContext, useState} from 'react';
import Backdrop from "../../UI/Backdrop/Backdrop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import classes from './CartDetails.module.css';
import CartContext from "../../../store/cartContext";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = () => {

    const cartCtx = useContext(CartContext);

    // set up a state to control the confirmation
    const [showConfirm, setShowConfirm] = useState(false);

    // add a function to show the confirmation
    const showConfirmHandler = () => {
        setShowConfirm(true);
    }

    const cancelHandler = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    }

    const okHandler = () => {
        cartCtx.cartDispatch({type: 'CLEAR'});
    }

    return (
        <Backdrop>
            {showConfirm && <Confirm
                onCancel={cancelHandler}
                onOk={okHandler}
                confirmText={'Are you sure to clear the cart?'}
            />}

            <div
                className={classes.CartDetails}
                onClick={e => e.stopPropagation()}
            >
                <header className={classes.Header}>
                    <h2 className={classes.Title}>Cart Details</h2>
                    <div
                        onClick={showConfirmHandler}
                        className={classes.Clear}>
                        <FontAwesomeIcon icon={faTrashCan}/>
                        <span>Clear All</span>
                    </div>
                </header>

                <div className={classes.MealList}>
                    {
                        cartCtx.items.map(item =>
                            <Meal noDesc meal={item} key={item.id}/>
                        )
                    }
                </div>

            </div>
        </Backdrop>
    );
};

export default CartDetails;