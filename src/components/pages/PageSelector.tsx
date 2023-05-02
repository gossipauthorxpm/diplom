import React, {useEffect} from "react";
import {NavigateFunction, redirect, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Main from "./main/Main";
import About from "./about/About";
import Price from "./price/Price";
import Register from "./register/Register";
import "./general.css"
import Auth from "./auth/Auth";
import Cabinet from "./cabinet/Cabinet";
import user from "../../entity/User";
import Callbacks from "../../api/Callbacks";

type Props = {
    isUserLogin: boolean
    setUserCallback: any
    user: UserToken | null
    isUserSeeCabinet: boolean
}

function PageSelector(props: Props) {
    const location = useLocation();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (props.user !== null && !props.isUserSeeCabinet) {
            navigate("/cabinet")
            Callbacks.setIsUserSeeCabinetCallback(true)
        }

    }, [navigate, props.user, props.isUserSeeCabinet])

    if (props.user !== null) {
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
            <Route path={"/cabinet"} element={
                <Cabinet/>
            }/>
            <Route path='*' element={
                <PageNotFound/>
            }/>
        </Routes>
    } else {
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
                <Register/>
            }/>
            <Route path={"/auth"} element={
                <Auth setUserCallback={props.setUserCallback}/>
            }/>
            <Route path='*' element={
                <PageNotFound/>
            }/>
        </Routes>
    }


}

export default PageSelector;