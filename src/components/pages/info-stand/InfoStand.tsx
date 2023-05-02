import "./index.css"
import {useEffect, useState} from "react";
import InfoStandRequests from "../../../api/InfoStandRequests";
import UTFSymbols from "../../../entity/UTFSymbols";


function InfoStand() {
    const [stands, setStands] = useState([])

    useEffect(() => {
        setInterval(checkUpdates, 1000)
    }, [])

    return <div className={'info-stand-page'}>
        <h1>Стенд просмотра активности железа</h1>
            <div className={"page-stand-containers"}>
            {stands.map((value: StandData) => <div key={value.id} className={'page-stand-containers-info'}>
                <div className={'page-stand-container'}>

                    <div className={'info-stand-page-note'}><span>ID</span><span>{value.id}</span></div>
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
            </section>
            <section>
                <h2>УДАЛИТЬ МОНИТОР</h2>
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