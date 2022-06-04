import React from 'react';


const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <img src="/img/logo.png" alt="logo"/>
                <div className={'navFooter'}>
                    <ul className={'footerUl'}>
                        <li><a href="#">История</a></li>
                        <li><a href="#">Производство</a></li>
                        <li><a href="#">Ассортимент</a></li>
                        <li><a href="#">Где купить</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bot">

                <div className={'links'}>
                    <a href="#"><img src="/img/icon-insta.png" alt={'instagram'}/> Инстаграм</a>
                    <a href="#"><img src="/img/icon-fb.png" alt={'facebook'}/>Фейсбук</a>
                    <a className="vk" href="#"><img src="/img/icon-vk.png" alt={'vk'}/> Вконтакте</a>
                </div>
                <p className={'footerP'}>При перепечатке материалов ссылка на сайт обязательна! </p>


                <b>Разработчик:</b>
                <img className={'developer'} src={'/img/developer.png'} alt={'developer'}/>

            </div>
        </footer>

    );
};

export default Footer;