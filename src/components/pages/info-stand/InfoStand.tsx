import "./index.css"
import {useEffect, useState} from "react";
import InfoStandRequests from "../../../api/InfoStandRequests";
import UTFSymbols from "../../../entity/UTFSymbols";
import Callbacks from "../../../api/Callbacks";

function InfoStand() {
    const [stands, setStands] = useState([])
    const [standKey, setStandKey] = useState("")

    Callbacks.setStandKey = setStandKey

    useEffect(() => {
        setInterval(checkUpdates, 1000)
    }, [])
    return <div className={'info-stand-page'}>
        <h1 className={'prose text-4xl font-sans'}>Стенд просмотра активности железа</h1>
        <div className={"page-stand-containers"}>
            {stands.map((value: StandDataInterface) => <div key={value.id} className={'page-stand-containers-info'}>
                <div className={'overflow-x-auto'}>
                    <table className={'table table-compact w-full'}>
                        <tbody>
                        <tr>
                            <th>Нода машины</th>
                            <th>{value.node}</th>
                        </tr>
                        <tr>
                            <th>ОС</th>
                            <th>{value.systemOC}</th>
                        </tr>
                        <tr className="active">
                            <th>Число незапланированных прерываний софта</th>
                            <th>{value.softInterruptsCount}</th>
                        </tr>
                        <tr>
                            <th>Число активных пользователей системы</th>
                            <th>{value.activeUserSystem}</th>
                        </tr>
                        <tr className="active">
                            <th>Температура CPU</th>
                            <th>{value.cpuTemp} {UTFSymbols.CELSIUS}</th>
                        </tr>
                        <tr>
                            <th>Температура GPU</th>
                            <th>{value.gpuTemp} {UTFSymbols.CELSIUS}</th>
                        </tr>
                        <tr className="active">
                            <th>Загруженность процессора</th>
                            <th>{value.cpuPercentUsage} {UTFSymbols.PERCENT}</th>
                        </tr>
                        <tr>
                            <th>Загруженность оперативной памяти</th>
                            <th>{value.virtualMemoryPercentUsage} {UTFSymbols.PERCENT}</th>
                        </tr>
                        <tr className="active">
                            <th>Загруженность диска</th>
                            <th>{value.diskPercentUsage} {UTFSymbols.PERCENT}</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>)}
        </div>


        <footer className={'page-stand-container-footer'}>
            <section className={'prose'}>
                <h2 className={'prose text-2xl font-sans'}>ДОБАВИТЬ МОНИТОР</h2>
                <div>
                    <p>Если вам необходимо добавить новый монитор, то скопируйте себе уникальный ключ нового монитора,
                        он понадобиться для приложения, которое считывает данные с вашей машины. Уникальный ключ
                        высветиться
                        на экран после генерации на стороне сервера.</p>
                    <p>Ноду для сервера указываете вы. Подойдет любое удобное вам название.</p>
                    <p>
                        После данного ключа в утилиту для считывания данных, данные отобразятся на экране.
                    </p>
                </div>
                <button
                    className={'btn btn-outline btn-secondary'}
                    onClick={InfoStandRequests.addMonitor}>Добавить монитор
                </button>
                {/* The button to open modal */}
                <label htmlFor="my-modal" className="btn">Посмотреть ключ</label>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <h3 className="font-bold text-lg">Сгенерированный ключ</h3>
                        <p className="py-4">{standKey === "" ? "" : `${standKey}`}</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn">Закрыть</label>
                        </div>
                    </div>
                </div>
            </section>
            <section className={'prose'}>
                <h2 className={'prose text-2xl font-sans'}>УДАЛИТЬ МОНИТОР</h2>
                <p>Выберите из списка монитор. Далее удалите монитор, путем нажатия на кнопку "Удалить"</p>
                <div>
                    <select
                        className={'select select-info w-full max-w-xs'}
                        id="page-stand-select-delete-monitor">
                        {stands.map((value: StandDataInterface) => <option key={value.id} value={value.id}>
                            {value.node}
                        </option>)}
                    </select>
                </div>
                <button
                    className={'btn btn-outline btn-secondary'}
                    onClick={InfoStandRequests.deleteMonitor}>Удалить
                </button>
            </section>
            <section className={'prose'}>
                <h2 className={'prose text-2xl font-sans'}>УТИЛИТА ОТПРАВКИ ДАННЫХ НА СЕРВЕР</h2>
                <p>Данная утилита служит связующим звеном между сайтом и вашей машиной.</p>
                <p>Для работы данной утилиты вам нужны данные:</p>
                <ul>
                    <li>Ключ машины, который генерируется при нажатии на кнопку "Добавить монитор"</li>
                    <li>Придумать ноду (виртуальное название) для вашей машины</li>
                    <li>Выбрать диск для считывания информации (буква тома)</li>
                    <li>Логин от вашей учетной записи</li>
                </ul>
                <p>Скачайте данную утилиту с сайта откройте файл readme - там вся остальная необходимая информация по
                    запуску</p>
                <button
                    className={'btn btn-outline btn-secondary'}
                    onClick={InfoStandRequests.downloadPythonScriptWindows}>Скачать (Windows)
                </button>
                <button
                    className={'btn btn-outline btn-secondary'}
                    onClick={InfoStandRequests.downloadPythonScriptLinux}>Скачать (Linux)
                </button>
            </section>
        </footer>
    </div>


    function checkUpdates() {
        InfoStandRequests.getAllInfoStands().then(result => {
            setStands(result)
        })
    }
}

export default InfoStand;