import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Main from "./main/Main";
import About from "./about/About";
import Price from "./price/Price";
import Register from "./register/Register";
import "./general.css"
import Auth from "./auth/Auth";
function PageSelector() {
    const location = useLocation();

    return <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={
            <Main/>
        }/>
        <Route path={"/about"} element={
            <About/>
        }/>
        <Route path={"/price"} element={
            <Price/>
        }/>
        <Route path={"/register"} element={
            // @ts-ignore
            <Register/>
        }/>
        <Route path={"/auth"} element={
            // @ts-ignore
            <Auth/>
        }/>
        <Route path='*' element={
            <PageNotFound/>
        }/>
    </Routes>


}

export default PageSelector;