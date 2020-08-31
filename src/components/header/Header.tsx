import React from 'react';
import s from './Header.module.scss';
import logo from './../../assets/images/logo.png';
import phoneIcon from './../../assets/icons/smiley.svg';

const Header: React.FC = React.memo(() => {
    return (
            <div className={s.wrapper}>
                <header className={s.container}>
                    <nav className={s.nav}>
                        <div className={s.nav__item}><span>О нас</span></div>
                        <div className={s.nav__item}><span>Вакансии</span></div>
                        <div className={s.nav__item}><span>Сотрудники</span></div>
                        <div className={s.nav__item}><span>Новости</span></div>
                    </nav>
                    <div className={s.header}>
                        <img className={s.header__logo} src={logo} alt="logo of company Tvoja Rabota"/>
                        <div className={s.header__phones}>
                            <img className={s.header__phoneIcon} src={phoneIcon} alt="phone icon"/>
                            <div className={s.header__contactPhone}>
                                {/*  TODO ask Sveta*/}
                                <a href='tel:+48518111600'>+48 518-111-600</a>
                                <a href='tel:+48532784370'>+48 532-784-370</a>
                                <p>ПН-ПТ 09:00-17:00</p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
    )
})

export default Header;
