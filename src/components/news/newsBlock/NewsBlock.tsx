import React from 'react';
import s from './NewsBlock.module.scss';

type PropsType = {
    newsPhoto: string,
    newsTitle: string,
    newsDescr: string,
}

const NewsBlock: React.FC<PropsType> = React.memo(({newsPhoto, newsTitle, newsDescr}) => {
    return (
        <article className={s.container}>
            <img src={newsPhoto} alt="news item"/>
            <h3>{newsTitle.toUpperCase()}</h3>
            <p>{newsDescr}</p>
            <div>.</div>
        </article>
    )
})

export default NewsBlock;