import React from 'react';

const HistoryListModule = (props) => {
    return (
        <div className={'module'}>

            <dt>
                <div className={'titleHistory'}>{props.createHistory.title}</div>


                <div className={'source'}><i>Источник:</i> <a
                    href={props.createHistory.href}><cite>{props.createHistory.cite}</cite> </a></div>
            </dt>
            <dd>
                <p>{props.createHistory.body}</p><img src={props.createHistory.img} alt="wiki" width='200px'
                                                      height='101px'/>
            </dd>
        </div>
    );
};

export default HistoryListModule;