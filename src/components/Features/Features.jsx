import React, {useState} from "react";
import LilistFeatureModule from "./LilistFeature.module";
import './Feature.modul.css'

const Features = () => {
    const [liList] = useState([{
        id: 1, img: "/img/icon-brew.png",
        liTitle: 'Варим сами',
        description: 'Вот этими самыми руками. Экспериментируем и творим, что хотим.',
    }, {
        id: 2, img: "/img/icon-matreshka.png",
        liTitle: 'Свое, родное',
        description: 'Не заработка ради, а импортозамещения для. Поднимаем производство.',
    }, {
        id: 3, img: "/img/icon-thumbsup.png",
        liTitle: 'Не экономим',
        description: 'Человек это то, что он ест и пьёт. У нас только качественные ингредиенты.',
    },])
    return (
        <div className="features" style={{
            backgroundColor: '#ffcb78'
        }}>
            <div className="ulPosition">
                <ul>
                    {liList.map(item =>
                        <LilistFeatureModule createLi={item} key={item.id}/>)}
                </ul>
            </div>
        </div>
    )
}

export default Features


