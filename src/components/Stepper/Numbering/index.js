import React from 'react'
import Fade from 'react-reveal/Fade'
import PropTypes from 'prop-types'
import "./index.scss";
export default function Numbering({ style, className, data, current}) {
    const  keysOfData = Object.keys(data);
    return (
        <Fade>
            <ol className={["stepper",className].join(" ")} style={style}>
                {keysOfData.map((item, index) =>{
                    let isActive = item === current ?  "active" : "";
                    if (index + 1 === keysOfData.length){
                        isActive = "";
                        return null;
                    }

                    return (
                        <li key={`list-${index}`} className={[isActive].join(" ")}>
                            {index + 1}
                        </li>
                    )
                })}
            </ol>
        </Fade>
    )
}

Numbering.propTypes = {
    className : PropTypes.string,
    data: PropTypes.object,
    current: PropTypes.string,
}
