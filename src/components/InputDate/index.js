import React , { useState, useEffect, useRef }from 'react'
import PropTypes from 'prop-types'
//Images
import IconCalendar from 'assets/images/ic_calendar.svg'
//react-date-range
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
//styles
import "./index.scss";
//utils
import FormatDate from 'utils/FormatDate'
export default function Date(props) {
    const { value, placeholder, name  } = props;
    const [ isShowed, setIsShowed ] = useState(false);


    const datePickerChange = value => {
        const target = {
            target : {
                name: name,
                value: value.selection,
            }
        }
        props.onChange(target);
    }

    useEffect(() => {
        document.addEventListener("mousedown",handleClickOutside);
        return () => {
            document.removeEventListener("mousedown",handleClickOutside);
        };
    });
    const handleClickOutside = e => {
        if (refDate && !refDate.current.contains(e.target)) {
            setIsShowed(false);
        }
    };

    const check = focus => {
        focus.indexOf(1) < 0 && setIsShowed(false);
    };

    const displayDate = `${value.startDate ? FormatDate(value.startDate) : " "}${value.endDate ? " - " + FormatDate(value.endDate) : ""}`;
    const refDate = useRef(null);
    return (
        <div ref={refDate} className={["input-date mb-3",props.outerClassName].join(" ")}>
            <div className="input-group">
                <div className="input-group-prepend bg-gray-900">
                    <span className="input-group-text">
                        <img src={IconCalendar} alt="icon-calendar" />
                    </span>
                </div>
                    <input type="text" readOnly className="form-control" name={name} placeholder={placeholder} onClick={() => setIsShowed(!isShowed)} value={displayDate} />
                    {
                        isShowed && (
                            <div className="date-range-wrapper">
                                <DateRangePicker
                                    editableDateInputs={true}
                                    onChange={datePickerChange}
                                    moveRangeOnFirstSelection={false}
                                    onRangeFocusChange={check}
                                    ranges={[value]}
                                />    
                            </div>
                        )
                    }
                
            </div>
        </div>
    )
}


Date.propTypes = {
    value: PropTypes.object,    
    placeholder: PropTypes.string,
    onChange : PropTypes.func,
    outerClassName : PropTypes.string
}
