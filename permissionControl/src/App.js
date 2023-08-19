import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Student from "./components/Students";
import Hello from "./components/Hello";



const App = () => {
    return (
        <div>
            <h1>App</h1>
            <Menu/>
            <hr/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}>
                    <Route path="hello" element={<Hello/>}/>
                </Route>
                <Route path="/student/:id" element={<Student/>}/>
            </Routes>
        </div>
    );
};

export default App;