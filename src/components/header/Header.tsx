import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import logo from './../../assets/images/logo.png';
import menu from './../../assets/icons/menu.svg';
import phoneIcon from './../../assets/icons/smiley.svg';
import {useWindowDimensions} from '../common/getWindowDimension/getSizes';

const Header: React.FC = React.memo(() => {
    const {width} = useWindowDimensions();
    const [isBurger, setIsBurger] = useState(false);
    let burgerStyle = isBurger ? `${s.nav__burger_active}` : `${s.nav__burger}`;
    let menuItemStyle = isBurger ? `${s.nav__item_hidden}` : `${s.nav__item}`;

    useEffect(() => {
        if (width < 650) {
            setIsBurger(true)
        } else {
            setIsBurger(false)
        }
    }, [width])

    return (
        <div className={s.wrapper}>
            <header className={s.container}>
                <nav className={s.nav}>
                    <img className={burgerStyle} src={menu} alt="menu icon"
                         onClick={() => setIsBurger(false)}
                         onBlur={() => setIsBurger(true)}/>
                    <div className={menuItemStyle}><span>О нас</span></div>
                    <div className={menuItemStyle}><span>Вакансии</span></div>
                    <div className={menuItemStyle}><span>Сотрудники</span></div>
                    <div className={menuItemStyle}><span>Новости</span></div>
                </nav>
                <div className={s.header}>
                    <img className={s.header__logo} src={logo} alt="logo of company Tvoja Rabota"/>
                    <div className={s.header__phones}>
                        <img className={s.header__phoneIcon} src={phoneIcon} alt="phone icon"/>
                        <div className={s.header__contactPhone}>
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
