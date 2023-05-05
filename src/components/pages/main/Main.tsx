import React from "react";
import "./index.css";

class Main extends React.Component {
    render() {
        return <div className={'page'}>
            <div id={'main-page'}>
                <h1 className={'prose text-4xl font-sans'}>Приветствуем на проекте визуализации датчиков компонентов стационарных ПК</h1>
                <p className={'prose prose'}>
                    На данном сайте вы найдете функционал авторизации в систему и возможность настройки просмотра
                    за состоянием своих стационарных ПК и серверов в реальном времени.
                    <br/><br/>
                    Пройдите регистрацию аккаунта и авторизуйтесь в систему, чтобы начать использовать функционал данного сайта.
                </p>
            </div>
        </div>
    }
}

export default Main;