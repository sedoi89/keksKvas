import React from "react";
import './Header.modul.css'


const Header = () => {
    return (
        <div className="header" style={{
            backgroundImage: 'url("img/wheat-back.jpg")'
        }}>

            <div className="nav"><img src="/img/logo.png" alt="Navigation logo"/>
                <ul>
                    <li><a href="second_try/src/components/Header/Header#">История</a></li>
                    <li><a href="second_try/src/components/Header/Header#">Производство</a></li>
                    <li><a href="second_try/src/components/Header/Header#">Ассортимент</a></li>
                    <li><a href="second_try/src/components/Header/Header#">Где купить</a></li>
                </ul>
            </div>
            <div className="headerText">
                Крафтовый квас <br/> всему голова!
            </div>


        </div>

    )
}
export default Header