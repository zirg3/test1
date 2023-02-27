import React, {useState} from 'react';
import Search from "../search/Search";
import style from "../../page/weather/Weather.module.scss";
import weatherIcon from "../../../Images/weather.png";
import vlag from "../../../Images/vlag.png";
import windy from "../../../Images/wind.png";
import dav from "../../../Images/dav.png";

const Sliders = () => {

    const [update, setUpdate] = useState([])
    const [load, setLoad] = useState(false)
    return (
            <>
                <Search load={setLoad} update={setUpdate}/>
                <h1 className={style.title}>Посмотреть погоду</h1>
                <p className={style.text}>погода на сегодня</p>
                {load ? <div>
                        <div className={style.SliderCon}>
                            <div className={style.SliderTitle}>
                                <h3>{update[1].name}</h3>
                                <img src={`http://openweathermap.org/img/wn/${update[1].weather[0].icon}@2x.png`} alt=""/>
                            </div>
                            <div className={style.SliderWrap}>
                                <h3>Температура</h3>
                                <div className={style.SliderText}>
                                    <p>текущая: {update[1].main.temp}</p>
                                    <p>ощущается как: {update[1].main.feels_like}</p>
                                    <p>минимальная: {update[1].main.temp_min}</p>
                                    <p>максимальная: {update[1].main.temp_max}</p>
                                </div>
                                <div className={style.SliderImg}>
                                    <img src={weatherIcon} alt="" className={style.ImgSvg}/>
                                </div>
                            </div>
                            <div className={style.SliderWrap}>
                                <h3>влажность</h3>
                                <div className={style.SliderText}>
                                    <p>{update[1].main.humidity}%</p>
                                </div>
                                <div className={style.SliderImg}>
                                    <img src={vlag} alt="" className={style.ImgSvg} />
                                </div>
                            </div>
                            <div className={style.SliderWrap}>
                                <h3>Ветер</h3>
                                <div className={style.SliderText}>
                                    <p>скорость ветра: {update[1].wind.speed} м/c</p>
                                    <p>Направление: {update[1].wind.deg}°</p>
                                    <p>Порыв ветра: {update[1].wind.gust ? update[1].wind.gust:
                                        0} м/с</p>
                                </div>
                                <div className={style.SliderImg}>
                                    <img src={windy} alt=""  className={style.ImgSvg}/>
                                </div>
                            </div>
                            <div className={style.SliderWrap}>
                                <h3>Давление</h3>
                                <div className={style.SliderText}>
                                    <p>Давление: {update[1].main.pressure} рт.ст</p>
                                </div>
                                <div className={style.SliderImg}>
                                    <img src={dav} alt="" className={style.ImgSvg} />
                                </div>
                            </div>
                        </div>
                    </div>:
                    <div>Загрузка</div>
                }
            </>
    );
};

export default Sliders;