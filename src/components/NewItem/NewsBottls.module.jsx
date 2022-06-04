import React from "react";


const NewBottles = (props) => {

    return (
        <div className="body">
            <h3>{props.toCreate.asd}</h3>
            <img src={props.toCreate.img} alt='Bottle img'/>
            <div className="table">
                <table>
                    <tbody>
                    <tr>
                        <td>Алк.</td>
                        <td>{props.toCreate.alk}</td>
                    </tr>
                    <tr>
                        <td>Ккал</td>
                        <td>{props.toCreate.kkal}</td>
                    </tr>
                    </tbody>
                </table>
                <p className="compound">{props.toCreate.compound}</p>
            </div>
            <div className="description">
                <p>{props.toCreate.description}</p>
            </div>
            <div className="property">
                <button className="more">Подробнее</button>
                <button className="buy">Купить</button>
                <p>{props.toCreate.price}</p>
            </div>
        </div>
    )
}

export default NewBottles