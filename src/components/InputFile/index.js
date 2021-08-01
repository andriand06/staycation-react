import React,{ useRef } from 'react'
import PropTypes from 'prop-types'
export default function File(props) {
    const { name, value, placeholder,accept, prepend, append } = props;
    const refInputFile = useRef(null)
    return (
        <div className={["input-text mb-3",props.outerClassName].join(" ")}>
            <div className="input-group">
                {prepend && (
                    <div className="input-group-prepend bg-gray-900">
                        <span className="input-group-text">{prepend}</span>
                    </div>
                )}
                <input type="file" name={name} accept={accept} className="d-none" placeholder={placeholder} ref={refInputFile} onChange={props.onChange} value={value} inputClassName={props.inputClassName} />
                <input defaultValue={value} placeholder={placeholder} onClick={() => refInputFile.current.click()} className={["form-control",props.inputClassName].join(" ")} />
                {append && (
                    <div className="input-group-append bg-gray-900">
                         <span className="input-group-text">{append}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

File.defaultProps = {
    placeholder: "Browse a file...",
}
File.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    prepend : PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    append : PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    accept : PropTypes.string.isRequired,
    inputClassName : PropTypes.string,
    outerClassName : PropTypes.string,
}
