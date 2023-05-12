import "./index.css"
import {useEffect, useState} from "react";
import CabinetRequests from "../../../api/CabinetRequests";
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
        <h1 className={'prose text-4xl font-sans'}>Кабинет</h1>
        <div className={'cabinet-page-user-data'}>
            <div className={'cabinet-page-note'}><span>ID</span><input
                className={'input input-bordered w-full max-w-xs'} id={'cabinet-input-id'} type={'text'}
                disabled={true}
                value={id}/></div>

            <div className={'cabinet-page-note'}><span>Логин</span><input
                className={'input input-bordered w-full max-w-xs'} id={'cabinet-input-login'}
                disabled={true}
                onChange={(e) => changeData(setLogin, e.target.value)}
                type={'text'} value={login}/></div>

            <div className={'cabinet-page-note'}><span>Email</span><input
                className={'input input-bordered w-full max-w-xs'} id={'cabinet-input-email'}
                disabled={disableChange}
                onChange={(e) => changeData(setEmail, e.target.value)}
                type={'text'} value={email}/></div>

            <div className={'cabinet-page-note'}><span>Возраст</span><input
                className={'input input-bordered w-full max-w-xs'} id={'cabinet-input-age'}
                disabled={disableChange}
                onChange={(e) => changeData(setAge, Number(e.target.value))}
                type={'text'} value={age}/></div>

            <div className={'cabinet-page-note'}><span>Страна</span><input
                className={'input input-bordered w-full max-w-xs'} id={'cabinet-input-country'}
                disabled={disableChange}
                onChange={(e) => changeData(setCountry, e.target.value)}
                type={'text'} value={country}/></div>

            <div className={'cabinet-page-note'}><span>Город</span><input
                className={'input input-bordered w-full max-w-xs'} id={'cabinet-input-city'}
                disabled={disableChange}
                onChange={(e) => changeData(setCity, e.target.value)}
                type={'text'} value={city}/></div>

            <div className={'cabinet-page-note'}><span>Место работы</span><input
                className={'input input-bordered w-full max-w-xs'} id={'cabinet-input-workPlace'}
                disabled={disableChange}
                onChange={(e) => changeData(setWorkPlace, e.target.value)}
                type={'text'} value={workPlace}/>
            </div>

            <div className={'cabinet-page-buttons'}>
                <button className={"btn btn-info btn-outline"}
                        onClick={() => setDisableChange(!disableChange)}
                >Изменить
                </button>
                <div className={'cabinet-page-delete-update'}>
                    <div>
                        <button className={'btn btn-success btn-outline'}
                                onClick={CabinetRequests.updateUser}
                        >Подтвердить
                            изменения
                        </button>
                        <button className={'btn btn-error btn-outline'}
                                onClick={CabinetRequests.deleteUser}
                        >Удалить аккаунт
                        </button>
                    </div>
                    <div>Пароль <input className={'input input-bordered w-full max-w-xs'}
                                       onChange={(e) => changeData(setPassword, e.target.value)}
                                       id={"cabinet-input-password"} type="password"
                                       value={password}/></div>
                    <span className={'prose text-xl font-sans'}>{response}</span>
                </div>
            </div>
            <div className={'cabinet-page-change-password'}>
                <h3>Изменение пароля</h3>
                <div className={'cabinet-page-change-password-note'}>Старый пароль <input
                    className={'input input-bordered w-full max-w-xs'}
                    id={'cabinet-input-oldPassword'} type="password"/></div>
                <div className={'cabinet-page-change-password-note'}>Новый пароль <input
                    className={'input input-bordered w-full max-w-xs'}
                    id={'cabinet-input-newPassword'} type="password"/></div>
                <button className={'btn btn-success btn-outline'}
                        onClick={CabinetRequests.updatePassword}
                >Изменить
                </button>
                <span className={'prose text-xl font-sans'}>{responsePassword}</span>
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