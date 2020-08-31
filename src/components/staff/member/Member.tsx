import React from 'react';
import s from './Member.module.scss';

type PropsType = {
    memberPhoto: string,
    memberDescr: string,
    memberPhone: string
}

const Member: React.FC<PropsType> = React.memo(({memberPhoto, memberDescr, memberPhone}) => {
    return (
        <div className={s.container}>
            <img src={memberPhoto} alt="face of member"/>
            <p>{memberDescr}</p>
            <p><a href={`tel:${memberPhone}`}>{memberPhone}</a></p>
        </div>
    )
})

export default Member;