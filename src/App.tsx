import Header from "./components/header/Header";
import "./app.css";
import {BrowserRouter, NavigateFunction, useNavigate} from "react-router-dom";
import PageSelector from "./components/pages/PageSelector";
import {useState} from "react";
import Callbacks from "./api/Callbacks";

function App() {
    let userObject: UserToken | null = null
    let userData = localStorage.getItem("user");
    if (userData !== null) {
        userObject = JSON.parse(userData);
    }
    const [user, setUser] = useState(userObject)
    const [isUserLogin, setIsUserLogin] = useState(false)
    const [isUserSeeCabinet, setIsUserSeeCabinet] = useState(false)
    Callbacks.setUserCallback = setUser
    Callbacks.setIsUserLoginCallback = setIsUserLogin
    Callbacks.setIsUserSeeCabinetCallback = setIsUserSeeCabinet

    return <BrowserRouter>
        <div className={'app'}>
            <Header setUserCallback={setUser} user={user}/>
            <PageSelector isUserSeeCabinet={isUserSeeCabinet} user={user} isUserLogin={isUserLogin}/>
        </div>
    </BrowserRouter>

}

export default App;
