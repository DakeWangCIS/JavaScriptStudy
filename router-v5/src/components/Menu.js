import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './Menu.module.css';

const Menu = () => {
    console.log(classes)
    return (
        <div>
            <ul>
                <li>
                    <NavLink
                        exact
                        activeStyle={{color: 'red', textDecoration: 'underline'}}
                        to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        activeStyle={{color: 'red', textDecoration: 'underline'}}
                        to="/about">About</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Menu;