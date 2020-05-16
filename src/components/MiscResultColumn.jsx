import React from 'react';
import '../App.css';
import ResultColumn from './ResultColumn';
import { getMiscValue } from '../miscValues';
import { useFormContext } from 'react-hook-form';

export default function MiscResultColumn() {
    const { watch, getValues } = useFormContext()
    const { weaponSet } = getValues();
    watch('weaponSet');
    const offHandMultiplier = getMiscValue(weaponSet, weaponSet);
    const total = offHandMultiplier;
    return (
        <ResultColumn label="Misc" value={ total} />
    )
};