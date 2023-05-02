import React from "react";
import "./header.css";
import AnimatedLink from "./components/AnimatedLink";
import Logo from "./components/Logo";
import Requests from "../../api/Requests";

type Props = {
    user: UserToken | null
    setUserCallback: any
}

function Header(props: Props) {
    if (props.user !== null) {
        return <header id={'page-header'}>
            <Logo/>
            <nav id={'page-header-navigation'}>
                <AnimatedLink address={"/"} nameLink={"Главная"}/>
                <AnimatedLink address={"/about"} nameLink={"О проекте"}/>
                <AnimatedLink address={"/price"} nameLink={"Цены и услуги"}/>
                <AnimatedLink address={"/cabinet"} nameLink={"Кабинет"}/>
                <AnimatedLink callback={Requests.logout} address={"/auth"}
                              nameLink={"Выйти"}/>
            </nav>
        </header>
    } else {
        return <header id={'page-header'}>
            <Logo/>
            <nav id={'page-header-navigation'}>
                <AnimatedLink address={"/"} nameLink={"Главная"}/>
                <AnimatedLink address={"/about"} nameLink={"О проекте"}/>
                <AnimatedLink address={"/price"} nameLink={"Цены и услуги"}/>
                <AnimatedLink address={"/register"} nameLink={"Регистрация"}/>
                <AnimatedLink address={"/auth"} nameLink={"Вход"}/>
            </nav>
        </header>
    }

}

export default Header;