import React from 'react';
import {FullscreenControl, GeolocationControl, GeoObject, Map, RouteButton, YMaps} from 'react-yandex-maps';

import s from './Footer.module.scss';
import logo from '../../assets/images/logo.png';
import fb from '../../assets/icons/facebook.png';
import telegram from '../../assets/icons/telegram.png';
import vk from '../../assets/icons/vk.png';
import insta from '../../assets/icons/instagram.png';

const Footer: React.FC = React.memo(() => {
    const mapData = {
        center: [53.3730984, 14.6845038],
        zoom: 11,
        bounds: undefined,
    };

    return (
        <footer className={s.wrapper}>
            <div className={s.container}>
                <div className={s.map}>
                    <YMaps query={{apikey: '9bcc9b1b-caad-4a72-89ee-0972bea69349'}}>
                        <Map width={'100%'} height={'300px'} defaultState={mapData}>
                            <GeolocationControl options={{float: 'left'}}/>
                            <RouteButton options={{float: 'right'}}/>
                            <FullscreenControl/>
                            <GeoObject
                                geometry={{
                                    type: 'Point',
                                    coordinates: [53.377167, 14.674139],
                                }}
                                properties={{
                                    iconContent: 'Офис: ul.Jelenia 12',
                                }}
                                options={{
                                    preset: 'islands#blackStretchyIcon',
                                    draggable: false,
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>
                <div className={s.contacts}>
                    <img src={logo} alt="logo of company"/>
                    <h3>{'Телефоны :'}</h3>
                    <p>{`+48 555-555-555`}</p>
                    <p>{`+48 555-555-555`}</p>
                    <p>{`+48 555-555-555`}</p>
                    <p>{`+48 555-555-555`}</p>
                    <div className={s.contacts__social}>
                        <a href="https://www.facebook.com/anna.vorontsova.906"><img src={fb} alt={'facebook logo'}/></a>
                        <a href="https://t.me/nexta_live"><img src={telegram} alt={'telegram logo'}/></a>
                        <a href="https://vk.com/id52639012"><img src={vk} alt={'vk logo'}/></a>
                        <a href="https://www.instagram.com/tvojarabota_anna/?hl=ru"><img src={insta} alt={'instagram logo'}/></a>
                    </div>
                </div>
            </div>
            <div className={s.wrapper__auth}>@Copyright Nikki Odd 2020</div>
        </footer>
    )
})

export default Footer;