import React from 'react';
import s from './Member.module.scss';

type PropsType = {
    memberPhoto: string,
    memberDescr: string,
}

const Member: React.FC<PropsType> = React.memo(({memberPhoto, memberDescr}) => {
    return (
        <div className={s.container}>
            <img src={memberPhoto} alt="face of member"/>
            <p>{memberDescr}</p>
        </div>
    )
})

export default Member;