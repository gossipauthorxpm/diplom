import React, {useState} from "react";
import "./header.css";
import AnimatedLink from "./components/AnimatedLink";
import Logo from "./components/Logo";
import AuthRequests from "../../api/AuthRequests";
import Callbacks from "../../api/Callbacks";

type Props = {
    user: UserToken | null
    setUserCallback: any
}

function Header(props: Props) {
    const [useDarkTheme, setUseDarkTheme] = useState(true)
    if (props.user !== null) {
        return <header className={'navbar bg-base-200'} id={'page-header'}>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span style={{margin: 16}} className="label-text">Сменить тему</span>
                    <input type="checkbox" className="toggle" checked={useDarkTheme} onClick={changeTheme}/>
                </label>
            </div>
            <Logo/>
            <nav id={'page-header-navigation'}>
                <div>
                    <AnimatedLink address={"/info-stand"} nameLink={"Стенд просмотра"}/>
                    <AnimatedLink address={"/cabinet"} nameLink={"Кабинет"}/>
                </div>
                <button onClick={() => {
                    AuthRequests.logout()
                    Callbacks.navigate("/auth")
                }} className="btn btn-outline btn-error rounded-full">
                    Выйти
                </button>
            </nav>
        </header>
    } else {
        return <header className={'navbar bg-base-200'} id={'page-header'}>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span style={{margin: 16}} className="label-text">Сменить тему</span>
                    <input type="checkbox" className="toggle" checked={useDarkTheme} onClick={changeTheme}/>
                </label>
            </div>
            <Logo/>
            <nav id={'page-header-navigation'}>
                <button onClick={() => Callbacks.navigate('/register')}
                        className="btn btn-outline btn-primary">Регистрация
                </button>
                <button onClick={() => Callbacks.navigate('/auth')} className="btn btn-outline btn-primary">Вход
                </button>
            </nav>
        </header>
    }

    function changeTheme() {
        let html = document.documentElement
        if (!useDarkTheme) {
            html.setAttribute("data-theme", "corporate")
            setUseDarkTheme(true)
        } else {
            html.setAttribute("data-theme", "business")
            setUseDarkTheme(false)
        }
    }

}

export default Header;