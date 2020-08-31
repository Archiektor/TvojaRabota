import React, {useCallback, useState} from 'react';
import s from './NewsBlock.module.scss';
import CloseButton from '../../common/CloseButton';

type PropsType = {
    newsPhoto: string,
    newsTitle: string,
    newsPreview: string;
    newsDescr: string,
}

const NewsBlock: React.FC<PropsType> = React.memo(({newsPhoto, newsTitle, newsPreview, newsDescr}) => {
    const [readMode, setReadMode] = useState(false);
    let isReadMode = readMode ? `${s.container_available}` : `${s.container_hide}`;
    const onCloseButtonClickHandler = useCallback(() => {
        console.log('clicked to false');
        setReadMode(false);
    }, [])

    const onClickHandler = () => {
        console.log('clicked to true');
        setReadMode(true);
    }

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <img src={newsPhoto} alt="news item"/>
                <h3>{newsTitle.toUpperCase()}</h3>
                <p>{newsPreview}</p>
                <div className={s.container__btn} onClick={onClickHandler}>
                    <div/>
                </div>
                <article className={isReadMode}>
                    <CloseButton isHidden={readMode} onClick={onCloseButtonClickHandler}/>
                    <img src={newsPhoto} alt="news item"/>
                    <h3>{newsTitle.toUpperCase()}</h3>
                    <p>{newsDescr}</p>
                </article>
            </div>
        </div>
    )
})

export default NewsBlock;