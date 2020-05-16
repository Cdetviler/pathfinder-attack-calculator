import React from 'react';
import '../App.css';
import ResultColumn from './ResultColumn';
import { useFormContext } from 'react-hook-form';

export default function WeaponEnhancementColumn() {
    const { watch, getValues } = useFormContext()
    const { weaponEnhancement } = getValues();
    watch('weaponEnhancement');
    return (
        <ResultColumn label="Weapon Enhancement" value={ weaponEnhancement } />
    )
};