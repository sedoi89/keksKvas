import React, {useState} from 'react';
import AssortmentModule from "./Assortment.module";


const Assortment = () => {
    const [list, setList] = useState([{
        id: 1, name: 'Название', alcohol: 'Алк.', kkal: 'Ккал', volume: 'Объем', price: 'Стоимость'
    }, {
        id: 2, name: 'Классика', alcohol: '1,2%.', kkal: '33', volume: '330 мл', price: '120 Р.'
    }, {
        id: 3, name: 'Шабаш', alcohol: '1,2%', kkal: '45', volume: '330 мл', price: '250 Р.'
    }, {
        id: 4, name: 'Вахтёр', alcohol: '1%', kkal: '35', volume: '0,5 л', price: '150 Р.', sup: 'Новинка'
    }, {
        id: 5, name: 'Романтик', alcohol: '0,5%', kkal: '27', volume: '0,5 л', price: '90 Р.', sup: 'Новинка'
    }
    ])

    return (
        <div className={'assortment'}>
            <div className={'title'}><h2>Ассортимент</h2></div>
            <table className="assortment__table">
                {list.map(item =>
                    <AssortmentModule create={item} key={item.id}/>
                )}
            </table>
        </div>
    );
};

export default Assortment;