import React from 'react';
import '../App.css';
import ResultColumn from './ResultColumn';
import { PropTypes } from 'prop-types';
import { getMiscValue } from '../miscValues';
import { useFormContext } from 'react-hook-form';

export default function TotalColumn({baseAttackBonus, isOffhandAttack}) {
    const { watch, getValues } = useFormContext()
    const { weaponSet, weaponEnhancement, abilityScore  } = getValues();
    watch();
    const addTotalScore = () => {
        const baseAttackSafe = parseInt(baseAttackBonus);
        const abilityScoreSafe = parseInt(abilityScore || 0);
        const weaponEnhancementSafe = parseInt(weaponEnhancement);
        const key = isOffhandAttack ? `${weaponSet}_offhand` : weaponSet;
        const offHandMultiplier = getMiscValue(key, true);
        return baseAttackSafe + abilityScoreSafe + weaponEnhancementSafe + offHandMultiplier;
    }
    const total = addTotalScore();

    return (
        <ResultColumn label="Total" value={ total } />
    );
};

TotalColumn.defaultProps = {
    isOffhandAttack: false
}

TotalColumn.propTypes = {
    baseAttackBonus: PropTypes.number.isRequired,
    isOffhandAttack: PropTypes.bool.isRequired
}