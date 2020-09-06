import React, {MouseEvent, useEffect, useState} from 'react';
import s from './Header.module.scss';
import logo from './../../assets/images/logo.png';
import menu from './../../assets/icons/menu.svg';
import phoneIcon from './../../assets/icons/smiley.svg';
import {useWindowDimensions} from '../common/getWindowDimension/getSizes';
import {Link} from 'react-scroll/modules';

const Header: React.FC = React.memo(() => {
    const {width} = useWindowDimensions();
    const [isBurger, setIsBurger] = useState(false);
    let burgerStyle = isBurger ? `${s.nav__burger_active}` : `${s.nav__burger}`;
    let menuItemStyle = isBurger ? `${s.nav__item_hidden}` : `${s.nav__item}`;

    //let {x, y} = useMousePosition();

    /*    useEffect(() => {
            if (x! > 175 || y! > 165) {
                if (width < 650) {
                    setIsBurger(true);
                }
            }
        }, [x, y, width]);*/

    const onMouseOverHandler = (e: MouseEvent<HTMLElement>) => {
        setIsBurger(true);
    }

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
                <nav className={s.nav}  onMouseLeave={onMouseOverHandler}>
                    <img className={burgerStyle} src={menu} alt="menu icon"
                         onClick={() => setIsBurger(false)}/>
                    <div className={menuItemStyle}>
                        <Link activeClass={s.nav_active} to={'main'} spy={true} smooth={true}
                              duration={500}><span>О нас</span></Link>
                    </div>
                    <div className={menuItemStyle}>
                        <Link activeClass={s.nav_active} to={'vacancies'} spy={true} smooth={true}
                              duration={500}><span>Вакансии</span></Link>
                    </div>
                    <div className={menuItemStyle}>
                        <Link activeClass={s.nav_active} to={'staff'} spy={true} smooth={true}
                              duration={500}><span>Сотрудники</span></Link>
                    </div>
                    <div className={menuItemStyle}>
                        <Link activeClass={s.nav_active} to={'news'} spy={true} smooth={true}
                              duration={500}><span>Новости</span></Link>
                    </div>
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
