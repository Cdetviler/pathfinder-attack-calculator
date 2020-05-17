import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from "react-hook-form";
import '../../App.css';

function TextInput({ name, type, label, className}) {
    
    const { register } = useFormContext();
    
    return (
        <label className={className}>
            {label && <span className="block text-gray-800"> {label} </span>}
            <input
                type={ type }
                name={ name }
                ref={ register }
                className={ `p-1 block border rounded border-gray-800 ${className}`}
            />
        </label>
    );
}

export default TextInput;

TextInput.defaultProps = {
    type: 'text',
    label: null,
    className: ''
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string,
    className: PropTypes.string
}