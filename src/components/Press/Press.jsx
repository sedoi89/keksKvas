import React from 'react';
import './Press.modules.css'

const Press = () => {
    return (
        <div className='press'>
            <div className='title'><h2>Пресса о нас</h2></div>

            <blockquote><img src='/img/quotes.png' alt='quotes' width='41' height='31'/>
                <p>Сегодня мы провели дегустацию чего-то действительно новенького
                    — крафтового кваса.<br/> Да, да, вы не ослышались! Спасибо Арсену и Руслану за то,
                    что предоставили целую бочку своего напитка!
                </p>
                <div className='cite'><a className='readBtn'
                                         href="https://www.rbc.ru/business/28/03/2022/624128cf9a7947bcde0087e7">Читать
                    далее</a><cite>Газета столичный Стольник </cite>
                </div>

            </blockquote>
        </div>
    );
};

export default Press;