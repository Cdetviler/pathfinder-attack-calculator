import React from 'react';
import '../App.css';
import { PropTypes } from 'prop-types';

export default function ResultColumn({label, value}) {
    return (
        <div className="md:text-center flex-grow flex flex-row-reverse justify-between md:flex-col">
            <div className="text-base md:text-2xl font-bold">{value}</div>
            <div className="text-sm lg:text-base">{label}</div>
        </div>
    )
};

ResultColumn.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};