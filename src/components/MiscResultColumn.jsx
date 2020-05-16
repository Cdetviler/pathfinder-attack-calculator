import React from 'react';
import '../App.css';
import ResultColumn from './ResultColumn';
import { getMiscValue } from '../miscValues';
import { useFormContext } from 'react-hook-form';

export default function MiscResultColumn() {
    const { watch, getValues } = useFormContext()
    const { offhand } = getValues();
    watch('offhand');
    const total = getMiscValue('offhand', offhand);
    return (
        <ResultColumn label="Misc" value={ total} />
    )
};