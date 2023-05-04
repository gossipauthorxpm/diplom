import "./index.css"
import {useEffect, useState} from "react";
import CabinetRequests from "../../../api/CabinetRequests";
import {motion} from "framer-motion";
import Callbacks from "../../../api/Callbacks";


function Cabinet() {

    const [id, setId] = useState(0)
    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState(0)
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [workPlace, setWorkPlace] = useState('')
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState('')
    const [responsePassword, setResponsePassword] = useState('')

    const [disableChange, setDisableChange] = useState(true)

    Callbacks.setResponse = setResponse
    Callbacks.setResponsePassword = setResponsePassword

    useEffect(() => {
        CabinetRequests.getUserForLogin(setStates)
    }, [])

    return <div id={'cabinet-page'}>
        <h1>Кабинет</h1>
        <div className={'cabinet-page-user-data'}>
            <div className={'cabinet-page-note'}><span>ID</span><input id={'cabinet-input-id'} type={'text'}
                                                                       disabled={true}
                                                                       value={id}/></div>
            <hr/>
            <div className={'cabinet-page-note'}><span>Логин</span><input id={'cabinet-input-login'}
                                                                          disabled={true}
                                                                          onChange={(e) => changeData(setLogin, e.target.value)}
                                                                          type={'text'} value={login}/></div>
            <hr/>
            <div className={'cabinet-page-note'}><span>Email</span><input id={'cabinet-input-email'}
                                                                          disabled={disableChange}
                                                                          onChange={(e) => changeData(setEmail, e.target.value)}
                                                                          type={'text'} value={email}/></div>
            <hr/>
            <div className={'cabinet-page-note'}><span>Возраст</span><input id={'cabinet-input-age'}
                                                                            disabled={disableChange}
                                                                            onChange={(e) => changeData(setAge, Number(e.target.value))}
                                                                            type={'text'} value={age}/></div>
            <hr/>
            <div className={'cabinet-page-note'}><span>Страна</span><input id={'cabinet-input-country'}
                                                                           disabled={disableChange}
                                                                           onChange={(e) => changeData(setCountry, e.target.value)}
                                                                           type={'text'} value={country}/></div>
            <hr/>
            <div className={'cabinet-page-note'}><span>Город</span><input id={'cabinet-input-city'}
                                                                          disabled={disableChange}
                                                                          onChange={(e) => changeData(setCity, e.target.value)}
                                                                          type={'text'} value={city}/></div>
            <hr/>
            <div className={'cabinet-page-note'}><span>Место работы</span><input id={'cabinet-input-workPlace'}
                                                                                 disabled={disableChange}
                                                                                 onChange={(e) => changeData(setWorkPlace, e.target.value)}
                                                                                 type={'text'} value={workPlace}/>
            </div>
            <hr/>
            <div className={'cabinet-page-buttons'}>
                <motion.button
                    onClick={() => setDisableChange(!disableChange)}
                    whileHover={{backgroundColor: "#5abeb4", transition: {duration: 1}}}>Изменить
                </motion.button>
                <div className={'cabinet-page-delete-update'}>
                    <div>
                        <motion.button
                            onClick={CabinetRequests.updateUser}
                            whileHover={{backgroundColor: "#5abeb4", transition: {duration: 1}}}>Подтвердить
                            изменения
                        </motion.button>
                        <motion.button
                            onClick={CabinetRequests.deleteUser}
                            whileHover={{backgroundColor: "#be5a5a", transition: {duration: 1}}}>Удалить аккаунт
                        </motion.button>
                        <label><input onChange={(e) => changeData(setPassword, e.target.value)}
                                      id={"cabinet-input-password"} type="password" value={password}/> Пароль</label>
                        <br/>
                    </div>
                    <span>{response}</span>
                </div>
            </div>
            <div className={'cabinet-page-change-password'}>
                <h3>Изменение пароля</h3>
                <div className={'cabinet-page-change-password-note'}>Старый пароль <input
                    id={'cabinet-input-oldPassword'} type="password"/></div>
                <div className={'cabinet-page-change-password-note'}>Новый пароль <input
                    id={'cabinet-input-newPassword'} type="password"/></div>
                <motion.button
                    onClick={CabinetRequests.updatePassword}
                    whileHover={{backgroundColor: "#7dbe5a", transition: {duration: 1}}}>Изменить</motion.button>
                <span>{responsePassword}</span>
            </div>
        </div>
    </div>


    function changeData(callback: any, eventValue: any) {
        callback(eventValue)
    }

    function setStates(user: UserInterface) {
        setAge(user.age)
        setId(user.id)
        setEmail(user.email)
        setLogin(user.login)
        setCountry(user.country)
        setCity(user.city)
        setWorkPlace(user.workPlace)
    }

}

export default Cabinet;