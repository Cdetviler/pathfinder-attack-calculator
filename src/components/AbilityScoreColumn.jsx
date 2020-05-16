import React from 'react';
import '../App.css';
import ResultColumn from './ResultColumn';
import { useFormContext } from 'react-hook-form';

export default function AbilityScoreColumn() {
    const { watch, getValues } = useFormContext()
    const { abilityScore } = getValues();
    watch('abilityScore');
    const value = abilityScore || 0;
    return (
        <ResultColumn label={ 'Ability Score' } value={ value } />
    );
};

