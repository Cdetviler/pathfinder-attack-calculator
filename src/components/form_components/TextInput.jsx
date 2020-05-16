import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from "react-hook-form";
import '../../App.css';

function TextInput({ name, type, label }) {
    
    const { register } = useFormContext();
    
    return (
        <label>
            {label && <span className="block text-gray-800"> {label} </span>}
            <input
                type={ type }
                name={ name }
                ref={ register }
                className="p-1 block border rounded border-gray-800"
            />
        </label>
    );
}

export default TextInput;

TextInput.defaultProps = {
    type: 'text',
    label: null
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    label: PropTypes.string
}