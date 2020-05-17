import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from "react-hook-form";
import '../../App.css';

export default function Radio({ name, label, options, className }) {
    const { register } = useFormContext();

    const renderRadioInputs = () => {
        return options.map(option => {
            const {label:optionLabel, value} = option;
            return (
                <label className="flex content-center" key={`${name}-${value}` }>
                    <input
                        type="radio"
                        name={name}
                        value={value}
                        ref={register}
                        className={ `self-center ${className}` }
                    />
                    <span className="ml-1"> {optionLabel} </span>
                </label>
            );
        });
    }

    return (
        <label>
            { label && <div className="font-semibold"> { label } </div> }
            {renderRadioInputs()}
        </label>
    );
}

Radio.defaultProps = {
    label: null,
    className: ''
}

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    className: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string
        })
    ).isRequired
}
