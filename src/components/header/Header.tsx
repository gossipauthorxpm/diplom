import React from "react";
import "./header.css";
import AnimatedLink from "./components/AnimatedLink";
import Logo from "./components/Logo";
import AuthRequests from "../../api/AuthRequests";

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
                <AnimatedLink address={"/info-stand"} nameLink={"Стенд просмотра"}/>
                <AnimatedLink address={"/cabinet"} nameLink={"Кабинет"}/>
                <AnimatedLink callback={AuthRequests.logout} address={"/auth"}
                              nameLink={"Выйти"}/>
            </nav>
        </header>
    } else {
        return <header id={'page-header'}>
            <Logo/>
            <nav id={'page-header-navigation'}>
                <AnimatedLink address={"/"} nameLink={"Главная"}/>
                <AnimatedLink address={"/register"} nameLink={"Регистрация"}/>
                <AnimatedLink address={"/auth"} nameLink={"Вход"}/>
            </nav>
        </header>
    }

}

export default Header;