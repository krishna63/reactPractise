import React from 'react';
import PropTypes from 'prop-types';
import './style/sideNavigator.css';

const SideNavigator = (props) => {
    const { listItems } = props;

    return (
        <nav id="sideNavigator">
            <h4>Side Navigator</h4>
            <ul>
                {listItems.map((item, idx) => {
                    return (
                        <li key={`item_${idx}`}>{item.dName}</li>
                    )
                })}
            </ul>
        </nav>
    )
}

SideNavigator.defaultProps = {
    listItems: []
}

SideNavigator.propTypes = {
    listItems: PropTypes.array
}

export default SideNavigator;
