import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from "react-hook-form";
import '../../App.css';

function Select({ name, label, children, className }) {
    const { register } = useFormContext();

    return (
        <label>
            { label && <span className="block color-gray-800"> { label } </span> }
            <select name={ name } ref={ register } className={`pt-1 pb-1 block border rounded border-gray-800 ${className}`}>
                {children}
            </select>
        </label>
    );
}

export default Select;

Select.defaultProps = {
    label: null,
    className: ''
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    label: PropTypes.string,
    className: PropTypes.string
}