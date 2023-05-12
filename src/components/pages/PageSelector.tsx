import React, {useEffect} from "react";
import {NavigateFunction, redirect, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import PageNotFound from "./PageNotFound";
import Main from "./main/Main";
import Register from "./register/Register";
import "./general.css"
import Auth from "./auth/Auth";
import Cabinet from "./cabinet/Cabinet";
import Callbacks from "../../api/Callbacks";
import InfoStand from "./info-stand/InfoStand";
import DocPage from "./other/DocPage";
import LicensePage from "./other/LicensePage";

type Props = {
    isUserLogin: boolean
    user: UserToken | null
    isUserSeeCabinet: boolean
}

function PageSelector(props: Props) {
    const location = useLocation();
    const navigate: NavigateFunction = useNavigate();
    Callbacks.navigate = navigate;

    useEffect(() => {
        if (props.user !== null && !props.isUserSeeCabinet) {
            navigate("/info-stand")
            Callbacks.isUserSeeCabinetCallback(true)
        }

    }, [navigate, props.user, props.isUserSeeCabinet])

    if (props.user !== null) {
        return <Routes location={location} key={location.pathname}>
            <Route path={"/"} element={
                <Main/>
            }/>
            <Route path={"/cabinet"} element={
                <Cabinet/>
            }/>
            <Route path={"/info-stand"} element={
                <InfoStand/>
            }/>
            <Route path='*' element={
                <PageNotFound/>
            }/>
            <Route path='/doc' element={
                <DocPage/>
            }/>
            <Route path='/license' element={
                <LicensePage/>
            }/>
        </Routes>
    } else {
        return <Routes location={location} key={location.pathname}>
            <Route path={"/"} element={
                <Main/>
            }/>

            <Route path={"/register"} element={
                <Register navigate={navigate}/>
            }/>
            <Route path={"/auth"} element={
                <Auth/>
            }/>
            <Route path='*' element={
                <PageNotFound/>
            }/>
            <Route path='/doc' element={
                <DocPage/>
            }/>
            <Route path='/license' element={
                <LicensePage/>
            }/>
        </Routes>
    }


}

export default PageSelector;