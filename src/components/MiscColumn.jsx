import React from 'react';
import '../App.css';
import ResultColumn from './ResultColumn';
import { PropTypes } from 'prop-types';
import { getMiscValue } from '../miscValues';
import { useFormContext } from 'react-hook-form';

export default function MiscResultColumn({isOffhandAttack}) {
    const { watch, getValues } = useFormContext()
    const { weaponSet } = getValues();
    watch('weaponSet');
    const key = isOffhandAttack ? `${weaponSet}_offhand` : weaponSet;
    const offHandMultiplier = getMiscValue(key, true);
    const total = offHandMultiplier;
    return (
        <ResultColumn label="Misc" value={total} />
    )
};

MiscResultColumn.defaultProps = {
    isOffhandAttack: false
}

MiscResultColumn.propTypes = {
    isOffhandAttack: PropTypes.bool.isRequired
}