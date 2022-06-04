import React from 'react';

const AssortmentModule = (props) => {
    return (
        <tbody>
        <tr>
            <td className={'name'}>{props.create.name}<sup>{props.create.sup}</sup></td>
            <td>{props.create.alcohol}</td>
            <td>{props.create.kkal}</td>
            <td>{props.create.volume}</td>
            <td>{props.create.price}</td>
        </tr>
        </tbody>
    );
};

export default AssortmentModule;