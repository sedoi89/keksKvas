import React, {useState} from 'react';
import HistoryListModule from "./HistoryList.module";
import './History.modul.css'

const History = () => {
    const [history, setHistory]= useState([{
        id: 1, title:'Происхождение кваса', href: '#', cite:'ru.wikipedia.org', img:'/img/wiki-1.png', body:'Квас на Руси появился в X-XI веке. Само слово «квас» тоже имеет древнерусское происхождение. Помимо России квас готовят в Белоруссии, Сербии, Македонии, Словакии и многих других странах, но называется он везде одинаково — квас.',
    }, {
        id: 2, title:'Классификация кваса', href: '#', cite:'ru.wikipedia.org', img:'/img/wiki-2.png', body:'По российскому ГОСТу для промышленного изготовления — это напиток с объёмной долей этилового спирта не более 1,2%, изготовленный в результате незавершённого спиртового и молочнокислого брожения сусла.',
    },
    ])
    return (
        <div className={'history'}>
            <div className='title'><h2>Немного истории</h2></div>

            <dl className={'historyBody'} >
                {history.map(item =>
                    <HistoryListModule createHistory={item} key={item.id}/>
                )}
            </dl>
        </div>
    );
};

export default History;