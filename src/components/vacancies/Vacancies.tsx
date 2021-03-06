import React from 'react';
import ReactPlayer from 'react-player';
import s from './Vacansies.module.scss';
import welder from '../../assets/images/rsz_3welder.png';
import {Slide} from 'react-awesome-reveal';

const Vacansies: React.FC = React.memo(() => {
    return (
        <div id='vacancies' className={s.wrapper}>
            <Slide direction={`up`} triggerOnce={true}>
                <h2 className={s.wrapper__title}>Вакансии</h2>
            </Slide>
            <div className={s.container}>
                <div className={s.leftOffers}>
                    <div className={s.leftOffers__block}>
                        <p>Сварщик</p>
                        <p>Кладовщик</p>
                        <p>Курица</p>
                        <p>Администартор</p>
                        <p>Рыба</p>
                    </div>
                </div>
                <div className={s.vacancy}>
                    <div className={s.vacancy__descr}>
                        <h2>Spawacz</h2>
                        <h3>3400 - 3800 zl.</h3>
                        <h3>Szczecin</h3>
                        <h3>220 h.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum in iste iusto maiores
                            perferendis? Atque cupiditate dolores eius possimus voluptatum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum in iste iusto maiores
                            perferendis? Atque cupiditate dolores eius possimus voluptatum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum in iste iusto maiores
                            perferendis? Atque cupiditate dolores eius possimus voluptatum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum in iste iusto maiores
                            perferendis? Atque cupiditate dolores eius possimus voluptatum.</p>
                    </div>
                    <div className={s.vacancy__media}>
                        <div className={s.vacancy__photos}>
                            <img src={welder} alt="vacancy description"/>
                        </div>
                        <div className={s.vacancy__video}>
                            <ReactPlayer width='98%' height='98%' url="https://www.youtube.com/watch?v=TiyOgiIcL0U"/>
                        </div>
                    </div>
                </div>
                <div className={s.rightOffers}>
                    <div className={s.rightOffers__block}>
                        <p>Сварщик</p>
                        <p>Кладовщик</p>
                        <p>Курица</p>
                        <p>Администартор</p>
                        <p>Рыба</p>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Vacansies;