import React,{ useState } from 'react'
import "./index.scss"
import PropTypes from 'prop-types'

export default function Text(props) {
    const { value, placeholder, type, name, outerClassName, inputClassName, prepend, append, errorResponse } = props;
    // eslint-disable-next-line
    const [ _hasError, setHasError ] = useState(null);
    let pattern = "";
    if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if( type === "tel") pattern = "[0-9]*";

    const onChange = e => {
        const target = {
            target : {
                name:name,
                value: e.target.value
            }
        }

        if(type === "email") {
            if(!pattern.test(e.target.value)) setHasError(errorResponse);
            else setHasError(null);
        }
        if(type === "tel") {
            if(e.target.validity.valid) props.onChange(target);
        } else {
            props.onChange(target);
        }
    }
    return (
        <div className={["input-text mb-3", outerClassName].join(" ")}>
            <div className="input-group">
                {prepend && (
                <div className="input-group-prepend bg-gray-900">
                    <span className="input-group-text">
                        {prepend}
                    </span>
                </div>
                )}
                <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} pattern={pattern} className={["form-control",inputClassName].join(" ")} />
                { append && (
                    <div className="input-group-append bg-gray-900">
                        <span className="input-group-text">
                            {append}
                        </span>
                    </div>
                )}
            </div>
        </div>
    )
}

Text.defaultProps = {
    placeholder: "Please type here...",
    errorResponse : "Please match the requested format.",
    type: "text",
    pattern: "",
}

Text.propTypes = {
    placeholder : PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value : PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    onChange : PropTypes.func,
    prepend: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    append: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    outerClassName : PropTypes.string,
    inputClassName : PropTypes.string,
}
