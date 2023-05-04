import "./index.css"
import {useEffect, useState} from "react";
import InfoStandRequests from "../../../api/InfoStandRequests";
import UTFSymbols from "../../../entity/UTFSymbols";
import Callbacks from "../../../api/Callbacks";
import {color, motion} from "framer-motion";

function InfoStand() {
    const [stands, setStands] = useState([])
    const [standKey, setStandKey] = useState("")

    Callbacks.setStandKey = setStandKey

    useEffect(() => {
        setInterval(checkUpdates, 1000)
    }, [])
    return <div className={'info-stand-page'}>
        <h1>Стенд просмотра активности железа</h1>
        <div className={"page-stand-containers"}>
            {stands.map((value: StandDataInterface) => <div key={value.id} className={'page-stand-containers-info'}>
                <div className={'page-stand-container'}>
                    {/*NODE MACHINE*/}
                    <div className={'info-stand-page-note'}><span>Нода машины</span><span>{value.node}</span></div>
                    <hr/>
                    <div className={'info-stand-page-note'}>
                        <span>Число незапланированных прерываний софта</span><span>{value.softInterruptsCount}</span>
                    </div>
                    <hr/>
                    <div className={'info-stand-page-note'}>
                        <span>Число активных пользователей системы</span><span>{value.activeUserSystem}</span>
                    </div>
                    <hr/>
                    <div className={'info-stand-page-note'}>
                        <span>Температура CPU</span><span>{value.cpuTemp} {UTFSymbols.CELSIUS}</span>
                    </div>
                    <hr/>
                    <div className={'info-stand-page-note'}>
                        <span>Температура GPU</span><span>{value.gpuTemp} {UTFSymbols.CELSIUS}</span>
                    </div>
                    <hr/>
                    <div className={'info-stand-page-note'}>
                        <span>Загруженность процессора</span><span>{value.cpuPercentUsage} {UTFSymbols.PERCENT}</span>
                    </div>
                    <hr/>
                    <div className={'info-stand-page-note'}>
                        <span>Загруженность оперативной памяти</span><span>{value.virtualMemoryPercentUsage} {UTFSymbols.PERCENT}</span>
                    </div>
                    <hr/>
                    <div className={'info-stand-page-note'}>
                        <span>Загруженность диска</span><span>{value.diskPercentUsage} {UTFSymbols.PERCENT}</span>
                    </div>
                    <hr/>
                </div>
            </div>)}
        </div>


        <footer className={'page-stand-container-footer'}>
            <section>
                <h2>ДОБАВИТЬ МОНИТОР</h2>
                <div>
                    <p>Если вам необходимо добавить новый монитор, то скопируйте себе уникальный ключ нового монитора,
                        он понадобиться для приложения, которое считывает данные с вашей машины. Уникальный ключ
                        высветиться
                        на экран после генерации на стороне сервера.</p>
                    <p>Ноду для сервера указываете вы. Подойдет любое удобное вам название.</p>
                    <div>
                        <span id={"page-stand-standKey"}>
                            StandKey <br/> <strong style={{textDecoration: "underline"}}>{standKey === "" ? "" : `${standKey}`}</strong>
                        </span>
                    </div>
                    <p>
                        После данного ключа в утилиту для считывания данных, данные отобразятся на экране.
                    </p>
                </div>
                <motion.button
                    whileHover={{backgroundColor: "#5abeb4", transition: {duration: 1}}}
                    onClick={InfoStandRequests.addMonitor}>Добавить монитор</motion.button>
            </section>
            <section>
                <h2>УДАЛИТЬ МОНИТОР</h2>
                <p>Выберите из списка монитор. Далее удалите монитор, путем нажатия на кнопку "Удалить"</p>
                <div>
                    <select id="page-stand-select-delete-monitor">
                        {stands.map((value: StandDataInterface) => <option key={value.id} value={value.id}>
                            {value.node}
                        </option>)}
                    </select>
                </div>
                <motion.button
                    whileHover={{backgroundColor: "#5abeb4", transition: {duration: 1}}}
                    onClick={InfoStandRequests.deleteMonitor}>Удалить</motion.button>
            </section>
            <section>
                <h2>УТИЛИТА ОТПРАВКИ ДАННЫХ НА СЕРВЕР</h2>
                <p>Данная утилита служит связующим звеном между сайтом и вашей машиной.</p>
                <p>Для работы данной утилиты вам нужны данные:</p>
                <ul>
                    <li>Ключ машины, который генерируется при нажатии на кнопку "Добавить монитор"</li>
                    <li>Придумать ноду (виртуальное название) для вашей машины</li>
                    <li>Выбрать диск для считывания информации (буква тома)</li>
                    <li>Логин от вашей учетной записи</li>
                </ul>
                <p>Скачайте данную утилиту с сайта откройте файл readme - там вся остальная необходимая информация по запуску</p>
                <motion.button
                    whileHover={{backgroundColor: "#5abeb4", transition: {duration: 1}}}
                    onClick={InfoStandRequests.downloadPythonScript}>Скачать
                </motion.button>
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