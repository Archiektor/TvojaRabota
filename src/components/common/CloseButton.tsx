import React from 'react';
import s from './CloseButton.module.scss';

type PropsType = {
    onClick: () => void,
    isHidden: boolean,
}

const CloseButton:React.FC<PropsType> = React.memo(({isHidden, onClick}) => {
    let leftMenuIconStyle = !isHidden? `${s.nav__menuIcon_left}` : `${s.nav__menuIcon_leftVisible}`;
    let rightMenuIconStyle = !isHidden? `${s.nav__menuIcon_right}` : `${s.nav__menuIcon_rightVisible}`;
    let midMenuIconStyle = !isHidden? `${s.nav__menuIcon_mid}` : `${s.nav__menuIcon_midVisible}`;

    const onClickHandler = () => {
        onClick();
        //setIsHidden(h => !h);
    }

    return (
        <div className={s.nav__menuIcon} onClick={onClickHandler}>
            <hr className={leftMenuIconStyle}/>
            <hr className={midMenuIconStyle}/>
            <hr className={rightMenuIconStyle}/>
        </div>
    )
})

export default CloseButton;