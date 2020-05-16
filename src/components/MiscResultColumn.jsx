import React from 'react';
import '../App.css';
import ResultColumn from './ResultColumn';
import { PropTypes } from 'prop-types';

export default function MiscResultColumn({label}) {
    return (
        <ResultColumn label={label} value={0} />
    )
};

MiscResultColumn.propTypes = {
    label: PropTypes.string.isRequired
}