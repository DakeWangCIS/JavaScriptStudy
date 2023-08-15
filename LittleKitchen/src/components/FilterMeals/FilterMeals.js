import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from './FilterMeals.module.css';

const FilterMeals = (props) => {

    const [keyword, setKeyword] = useState('');

    useEffect(() => {

        const timer = setTimeout(() => {
            props.onFilter(keyword);
        }, 1000);

        return () => {
            clearTimeout(timer);
        }

    }, [keyword]);

    const inputChangeHandler = (event) => {
        setKeyword(event.target.value.trim());
        // props.onFilter(keyword);
    }

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input className={classes.SearchInput}
                       value={keyword}
                       onChange={inputChangeHandler}
                       type={"text"}
                       placeholder={"Search Little Kitchen"}/>
                <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch}/>
            </div>

        </div>
    );
};

export default FilterMeals;