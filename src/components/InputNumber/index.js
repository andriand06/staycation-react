import React from 'react'
import PropTypes from 'prop-types'
import "./index.scss";
export default function Number(props) {
    const { value,name, min, max, placeholder, prefix, suffix, isSuffixPlural } = props;

    const onChange = e =>{
        let value = String(e.target.value);
        if( +value <= max && +value >= min) {
            props.onChange({
                target:{
                    name: name,
                    value: +value,
                }
            })
        }
        
    }

    const minus = () => {
        value > min && onChange ({
            target:{
                name:name,
                value : +value-1,
            }
        })
    }

    const plus = () => {
        value < max && onChange({
            target:{
                name:name,
                value : +value +1
            }
        })
    }
    return (
        <div className={["input-number mb-3",props.outerClassName].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text minus" onClick={minus}>
                        -
                    </span>
                </div>
                <input min={min} max={max} placeholder={placeholder ? placeholder : "0"} name={name} value={`${prefix}${value}${suffix}${isSuffixPlural  && value > 1 ? "s" : ""}`} readOnly  className="form-control" onChange={onChange} pattern="[0-9]*"/>
                <div className="input-group-append">
                    <span className="input-group-text plus" onClick={plus}>
                        +
                    </span>
                </div>
            </div>

        </div>
    )
}

Number.defaultProps = {
    min:1,
    max:1,
    prefix:"",
    suffix: "",
}

Number.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    placeholder: PropTypes.string,
    onChange : PropTypes.func,
    outerClassName: PropTypes.string,
    isSuffixPlural: PropTypes.bool,
}
