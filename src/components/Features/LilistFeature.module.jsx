import React from "react";

const LilistFeatureModule = (props) => {
    return (
        <li><img src={props.createLi.img} alt="features img" width='50' height='68'/>
            <h2>{props.createLi.liTitle}</h2>
            <p>
                {props.createLi.description}
            </p>

        </li>
    )
}

export default LilistFeatureModule