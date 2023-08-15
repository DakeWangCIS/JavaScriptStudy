import React, {useContext, useEffect, useState} from 'react';
import classes from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from "../../store/cartContext";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";

const Cart = () => {

    const cartCtx = useContext(CartContext);

    // add a state to control the display of the cart details
    const [showCartDetails, setShowCartDetails] = useState(false);

    // add a state to control the display of the checkout page
    const [showCheckout, setShowCheckout] = useState(false);

    /*
    check the total amount of the cart when every time the component is rendered
    if the total amount is 0, set the showCartDetails to false
     */
    useEffect(() => {
        if(cartCtx.totalAmount === 0) {
            setShowCartDetails(false);
            setShowCheckout(false);
        }
    }, [cartCtx]);

    // add a function to toggle the cart details
    const toggleCartDetailsHandler = () => {
        if(cartCtx.totalAmount === 0) {
            setShowCartDetails(false);
            return;
        }
        setShowCartDetails(prevState => !prevState);
    }

    // add a function to show the checkout page
    const showCheckoutHandler = () => {
        if(cartCtx.totalAmount === 0) return;
        setShowCheckout(true);
    }

    // add a function to hide the checkout page
    const hideCheckoutHandler = () => {
        setShowCheckout(false);
    }

    return (
        <div className={classes.Cart} onClick={toggleCartDetailsHandler}>

            {showCheckout && <Checkout onHide={hideCheckoutHandler}/>}

            {showCartDetails && <CartDetails/>}

            <div className={classes.Icon}>
                <img src={iconImg}/>
                {cartCtx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{cartCtx.totalAmount}</span>}

            </div>

            {cartCtx.totalAmount ===0 ? <p className={classes.EmptyCart}>Empty Cart</p> : <p className={classes.Price}>{cartCtx.totalPrice}</p>}

            <button
                onClick={showCheckoutHandler}
                className={`${classes.Button} ${cartCtx.totalAmount ===0 ? classes.Disabled : ''}`}>Checkout
            </button>
        </div>
    );
};

export default Cart;