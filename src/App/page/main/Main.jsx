import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "./main.module.scss"
import { Navigation, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import weatherIcon from '../../../Images/weather.png';
import vlag from '../../../Images/vlag.png';
import windy from '../../../Images/wind.png';
import dav from '../../../Images/dav.png';
const Main = () => {
    const [data, setData] = useState([])
    const apikey = 'c4abeb950bdca6acd182ee143ba8bd88'
    const cityImg = ['https://avatanplus.com/files/resources/original/59c226807c36515e9e6665fd.jpg',
    'https://phonoteka.org/uploads/posts/2022-09/thumbs/1663808745_8-phonoteka-org-p-fon-tokio-vkontakte-8.jpg',
    'https://mobimg.b-cdn.net/v3/fetch/1d/1dd1da3b9182523bd7889df29f2b86e1.jpeg'
]  
    
    
    
    
    
    useEffect(() => {
        async function getCity () {
            let respons = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=${apikey}`)
            let city = await respons.json()
            let respons2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=${apikey}`)
            let city2 = await respons2.json()
            let respons3 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=kair&units=metric&appid=${apikey}`)
            let city3 = await respons3.json()
            setData([city, city2, city3])
            console.log(city, city2, city3)
        }
        getCity()
        
    }, [])


    return (
        <>
        <Swiper pagination={true} navigation={true} modules={[Navigation, Pagination, Autoplay]} className={style.MainSwiper} centeredSlides={true} autoplay={{delay:7000, disableOnInteraction: false,}}>
            {data.map((city, index) => {
                return  <SwiperSlide key={index} className={style.slide} style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${cityImg[index]})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                 <div className={style.SliderCon}>
                     <div className={style.SliderTitle}>
                         <h3>{city.name}</h3>
                         <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt=""/>
                     </div>
                     <div className={style.SliderWrap}>
                         <h3>??????????????????????</h3>
                     <div className={style.SliderText}>
                       <p>??????????????: {city.main.temp}</p>
                       <p>?????????????????? ??????: {city.main.feels_like}</p>
                       <p>??????????????????????: {city.main.temp_min}</p>
                       <p>????????????????????????: {city.main.temp_max}</p>
                     </div>
                     <div className={style.SliderImg}>
                       <img src={weatherIcon} alt="" className={style.ImgSvg}/>
                     </div>
                     </div>
                     <div className={style.SliderWrap}>
                       <h3>??????????????????</h3>
                       <div className={style.SliderText}>
                           <p>{city.main.humidity}%</p>
                       </div>
                       <div className={style.SliderImg}>
                           <img src={vlag} alt="" className={style.ImgSvg} />
                       </div>
                     </div>
                     <div className={style.SliderWrap}>
                       <h3>??????????</h3>
                       <div className={style.SliderText}>
                           <p>???????????????? ??????????: {city.wind.speed} ??/c</p>
                            <p>??????????????????????: {city.wind.deg}??</p>
                            <p>?????????? ??????????: {city.wind.gust ? city.wind.gust: 
                            0} ??/??</p>
                       </div>
                       <div className={style.SliderImg}>
                           <img src={windy} alt=""  className={style.ImgSvg}/>
                       </div>
                     </div>
                     <div className={style.SliderWrap}>
                       <h3>????????????????</h3>
                       <div className={style.SliderText}>
                           <p>????????????????: {city.main.pressure} ????.????</p>
                       </div>
                       <div className={style.SliderImg}>
                           <img src={dav} alt="" className={style.ImgSvg} />
                       </div>
                     </div>
                 </div>
             </SwiperSlide> 
             
            
                })
            }
         

        </Swiper>
      </>
    );
};

export default Main;