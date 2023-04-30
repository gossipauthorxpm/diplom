import React from "react";
import "./header.css";
import AnimatedLink from "./components/AnimatedLink";
import Logo from "./components/Logo";


class Header extends React.Component {
    render() {
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