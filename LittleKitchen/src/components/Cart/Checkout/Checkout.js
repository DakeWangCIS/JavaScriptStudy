import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import classes from './Checkout.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/cartContext";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import Bar from "./Bar/Bar";

const checkoutRoot = document.getElementById('checkout-root');

const Checkout = (props) => {

    const cartCtx = useContext(CartContext);

    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.Close}>
                <FontAwesomeIcon
                    onClick={() => props.onHide()}
                    icon={faXmark}/>
            </div>

            <div className={classes.MealsDesc}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>Cart Details</h2>
                </header>

                <div className={classes.Meals}>
                    {cartCtx.items.map(item => <CheckoutItem key={item.id} meal={item}/>)}
                </div>

                <footer className={classes.Footer}>
                    <p className={classes.TotalPrice}>{cartCtx.totalPrice}</p>
                </footer>
            </div>

            <Bar totalPrice={cartCtx.totalPrice}/>

        </div>,
        checkoutRoot);
};

export default Checkout;