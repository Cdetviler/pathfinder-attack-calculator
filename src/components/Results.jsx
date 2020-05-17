import React from 'react';
import '../App.css';
import { useFormContext } from 'react-hook-form';
import Result from './Result';
import {
    MAIN_HAND_PENALTY,
    MAIN_HAND_WITH_LIGHT_WEAPON,
    MAIN_HAND_WITH_TWO_WEAPON_FIGHTING,
    MAIN_HAND_WITH_BOTH
} from '../constants';

const BAB_MODIFIER = 5;

function Results() {
    const { watch, getValues } = useFormContext()
    const {
        weaponSet,
        baseAttackBonus,
        weaponEnhancement,
        abilityScore,
        offhandLight,
        twoWeaponFightingFeat
    } = getValues();

    watch();

    const determineBaseAttacks = () => {
        let bab = parseInt(baseAttackBonus);
        const baseAttackBonuses = [bab];
        while(bab > 0) {
            bab = bab - BAB_MODIFIER;
            if (bab > 0 ) {
                baseAttackBonuses.push(bab);
            }
        }
        return baseAttackBonuses;
    }

    const getOffhandPenalty = () => {
        const hasOffhand = weaponSet === 'weaponAndShield' || weaponSet === 'twoWeapon';
        let penalty = hasOffhand ? MAIN_HAND_PENALTY : 0;
        penalty = offhandLight ? MAIN_HAND_WITH_LIGHT_WEAPON : penalty;
        penalty = twoWeaponFightingFeat ? MAIN_HAND_WITH_TWO_WEAPON_FIGHTING : penalty;
        penalty = offhandLight && twoWeaponFightingFeat ? MAIN_HAND_WITH_BOTH : penalty;

        return penalty;
    }

    const miscValue = getOffhandPenalty();
    
    const renderResults = () => {
        const baseAttacks = determineBaseAttacks();
        return baseAttacks.map((baseAttack, index) => {
            return (
                <Result
                    key={`result-${index}`}
                    abilityScore={abilityScore}
                    baseAttackBonus={baseAttack}
                    attackCount={index}
                    weaponEnhancement={ weaponEnhancement }
                    misc={miscValue}
                />
            );
        })
    };

    return (
        <>
            <h2 className="text-xl">Primary Attacks</h2>
            { renderResults() }
        </>
    );
}

export default Results;