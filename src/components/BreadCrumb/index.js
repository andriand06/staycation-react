import React from 'react'
import Button from 'components/Button'
import PropTypes from 'prop-types'

export default function BreadCrumb(props) {
    const className = ["breadcrumb", props.className];
    return (
        <nav aria-label="breadcrumb">
            <ol className={className.join(" ")}>
                {props.data.map((item,index)=> {
                    return (
                    <li key={`breadcrumb-${index}`} className={`breadcrumb-item${index === props.data.length - 1 ? " active" : " "}`}>
                        {
                            index === props.data.length -1 ? (
                                item.pageTitle
                            ) : (
                                <Button type="link" href={item.pageHref}>
                                    {item.pageTitle}
                                </Button>
                            )
                        }
                    </li>
                    );
                })}
            </ol>
        </nav>
    )
}

BreadCrumb.propTypes = {
    data: PropTypes.array,
    className: PropTypes.string,
}