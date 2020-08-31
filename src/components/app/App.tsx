import React from 'react';
import s from './App.module.scss';
import Header from '../header/Header';
import Main from '../main/Main';
import Vacansies from '../vacancies/Vacancies';
import Staff from '../staff/Staff';
import News from '../news/News';
import Footer from '../footer/Footer';

const App: React.FC = React.memo(() => {
    return (
        <div className={s.container}>
            <Header/>
            <Main/>
            <Vacansies/>
            <Staff/>
            <News/>
            <Footer/>
        </div>
    );
})

export default App;
