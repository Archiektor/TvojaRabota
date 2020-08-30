import React from 'react';
import s from './App.module.scss';
import Header from '../header/Header';
import Main from '../main/Main';
import Vacansies from '../../vacancies/Vacancies';

const App: React.FC = React.memo(() => {
    return (
        <div className={s.container}>
            <Header/>
            <Main/>
            <Vacansies/>
        </div>
    );
})

export default App;
