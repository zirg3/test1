import React, {useState} from 'react';
import Style from './Weekly.module.scss'
import Search from '../../componets/search/Search'
const Weekly = () => {
    const [load, setLoad] = useState(false)
    const [update, setUpdate] = useState([])
    console.log(update)
    return (
        <div className={Style.container}>
            <h1>Погода в {} на 7 дней</h1>
            <Search load={setLoad} update={setUpdate} />
            <div className={Style.tableCon}>
                <table className={Style.table}>
                    <thead>
                        <tr className={Style.tableName}>
                            <th className={Style.Daylist}>0</th>
                            <th className={Style.Daylist}>1</th>
                            <th className={Style.Daylist}>2</th>
                            <th className={Style.Daylist}>3</th>
                            <th className={Style.Daylist}>4</th>
                            <th className={Style.Daylist}>5</th>
                            <th className={Style.Daylist}>6</th>
                            <th className={Style.Daylist}>7</th>
                            <th className={Style.Daylist}>8</th>
                            <th className={Style.Daylist}>9</th>
                            <th className={Style.Daylist}>10</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={Style.tableHead}>
                            <td>Температура</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Текущая температура</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td >Максимальная температура</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Минимальная температура</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Влажность</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Скорость ветра</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Направление ветра</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Давление</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Рассвет</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Закат</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Снег</td>
                        </tr>
                        <tr className={Style.tableHead}>
                            <td>Дождь</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Weekly;