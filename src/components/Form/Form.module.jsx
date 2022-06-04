import React from 'react';

const FormModule = ({children}) => {
    return (
        <div className={children[0].name}>
            <label htmlFor={children[0].name}>
                {children[0].label}
            </label>


            <input
                onBlur={children[3]}
                value={children[2]}
                onChange={children[1]}
                className={children[0].name}
                name={children[0].name}
                id={children[0].name}
                placeholder={children[0].placeholder}
            />
        </div>
    );
};

export default FormModule;
