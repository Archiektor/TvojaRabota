import React from 'react';
import s from './Main.module.scss';

const Main: React.FC = () => {
    return (
        <div className={s.wrapper}>
            <section className={s.container}>
                <h1>Лучшие вакансии для лучших людей</h1>
                <div className={s.advertBlock}>
                    <div className={s.advertBlock__left}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque ea eveniet ipsum
                            laudantium nulla! Accusantium ducimus nisi sunt vitae?</p>
                        <p className={s.advertBlock__left_small}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Pariatur, qui?</p>
                    </div>
                    <div className={s.advertBlock__leftDown}>
                        <p className={s.advertBlock__leftDown_small}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Atque, enim.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ex fugiat illum nesciunt
                            nihil numquam omnis recusandae reprehenderit! Ipsam, quas.</p>
                    </div>
                    <div className={s.advertBlock__right}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque ea eveniet ipsum
                            laudantium nulla! Accusantium ducimus nisi sunt vitae?</p>
                        <p className={s.advertBlock__right_small}>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Accusantium, ipsum.</p>
                    </div>
                    <div className={s.advertBlock__rightDown}>
                        <p className={s.advertBlock__rightDown_small}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. At, porro?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ipsam laboriosam
                            ratione. Commodi enim explicabo illo repellat rerum temporibus voluptatem.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main;