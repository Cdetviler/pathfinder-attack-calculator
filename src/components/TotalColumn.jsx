import React from 'react';
import '../App.css';
import ResultColumn from './ResultColumn';
import { PropTypes } from 'prop-types';
import { getMiscValue } from '../miscValues';
import { useFormContext } from 'react-hook-form';

export default function TotalColumn({baseAttackBonus}) {
    const { watch, getValues } = useFormContext()
    const { offhand, weaponEnhancement, abilityScore  } = getValues();
    watch();
    const addTotalScore = () => {
        const baseAttackSafe = parseInt(baseAttackBonus);
        const abilityScoreSafe = parseInt(abilityScore || 0);
        const weaponEnhancementSafe = parseInt(weaponEnhancement);
        const offHandValue = getMiscValue('offhand', offhand);
        return baseAttackSafe + abilityScoreSafe + weaponEnhancementSafe + offHandValue;
    }
    const total = addTotalScore();

    return (
        <ResultColumn label="Total" value={ total } />
    );
};


TotalColumn.propTypes = {
    baseAttackBonus: PropTypes.number.isRequired
}