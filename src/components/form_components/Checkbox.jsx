import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from "react-hook-form";
import '../../App.css';

function Checkbox({ name, label, className }) {
    const { register } = useFormContext();

    return (
        <label>
            <input type="checkbox" name={ name } ref={ register } className={`align-middle ${className}`} />
            { label && <span className="align-middle"> { label } </span> }
        </label>
    );
}

export default Checkbox;

Checkbox.defaultProps = {
    label: null,
    className: ''
}

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    className: PropTypes.string
};
