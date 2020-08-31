import React from 'react';
import s from './News.module.scss';
import NewsBlock from './newsBlock/NewsBlock';
import newsPhoto from '../../assets/images/office.jpg';

const News: React.FC = React.memo(() => {
    return (
        <div className={s.wrapper}>
            <h2 className={s.wrapper__title}>Новости</h2>
            <div className={s.container}>
                <NewsBlock newsPhoto={newsPhoto} newsTitle={'pokemons'}
                           newsDescr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, adipisci autem doloremque nemo nihil quisquam' +
                           ' similique suscipit vero voluptates...'}
                           newsPreview={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, adipisci autem doloremque nemo nihil quisquam' +
                           ' similique suscipit vero voluptates...'}
                />
                <NewsBlock newsPhoto={newsPhoto} newsTitle={'salary'}
                           newsDescr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, adipisci autem doloremque nemo nihil quisquam' +
                           ' similique suscipit vero voluptates...'}
                           newsPreview={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, adipisci autem doloremque nemo nihil quisquam' +
                           ' similique suscipit vero voluptates...'}
                />
                <NewsBlock newsPhoto={newsPhoto} newsTitle={'work'}
                           newsDescr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, adipisci autem doloremque nemo nihil quisquam' +
                           ' similique suscipit vero voluptates...'}
                           newsPreview={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, adipisci autem doloremque nemo nihil quisquam' +
                           ' similique suscipit vero voluptates...'}
                />
                <NewsBlock newsPhoto={newsPhoto} newsTitle={'praca'}
                           newsDescr={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, adipisci autem doloremque nemo nihil quisquam' +
                           ' similique suscipit vero voluptates...'}
                           newsPreview={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab, adipisci autem doloremque nemo nihil quisquam' +
                           ' similique suscipit vero voluptates...'}
                />
            </div>
        </div>
    )
})

export default News;