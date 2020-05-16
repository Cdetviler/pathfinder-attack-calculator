import React from 'react';
import '../App.css';
import { PropTypes } from 'prop-types';

export default function ResultColumn({label, value}) {
    return (
        <div className="text-center flex-grow">
            <div className="text-2xl font-bold">{value}</div>
            <div>{label}</div>
        </div>
    )
};

ResultColumn.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};