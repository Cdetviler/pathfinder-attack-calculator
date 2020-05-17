import React from 'react';
import '../App.css';
import { useFormContext } from 'react-hook-form';
import Result from './Result';
import {
    OFF_HAND_PENALTY,
    OFF_HAND_WITH_LIGHT_WEAPON,
    OFF_HAND_WITH_TWO_WEAPON_FIGHTING,
    OFF_HAND_WITH_BOTH
} from '../constants';

export default function OffhandResults() {
    const { watch, getValues } = useFormContext()
    const { 
        weaponSet,
        baseAttackBonus,
        abilityScore,
        weaponEnhancement,
        offhandLight,
        twoWeaponFightingFeat,
        improvedTwoWeaponFightingFeat,
        greaterTwoWeaponFightingFeat
    } = getValues();

    const getOffhandPenalty = () => {
        let penalty = OFF_HAND_PENALTY;
        penalty = offhandLight ? OFF_HAND_WITH_LIGHT_WEAPON : penalty;
        penalty = twoWeaponFightingFeat ? OFF_HAND_WITH_TWO_WEAPON_FIGHTING : penalty;
        penalty = offhandLight && twoWeaponFightingFeat ? OFF_HAND_WITH_BOTH  : penalty;

        return penalty;
    }

    const hasOffhand = weaponSet === 'weaponAndShield' || weaponSet ==='twoWeapon';
    const misc = getOffhandPenalty();
    watch();

    return (
        <>
            { hasOffhand && (
                <>
                    <h2 className="text-xl">Offhand Attacks</h2>
                    <Result
                        weaponEnhancement={weaponEnhancement}
                        abilityScore={abilityScore}
                        baseAttackBonus={baseAttackBonus}
                        misc={misc}
                        attackCount={0}
                    />
                    { improvedTwoWeaponFightingFeat && (
                        <Result
                            weaponEnhancement={ weaponEnhancement }
                            abilityScore={ abilityScore }
                            baseAttackBonus={ baseAttackBonus - 5 }
                            misc={ misc }
                            attackCount={ 1 }
                        />
                    )}
                    { greaterTwoWeaponFightingFeat && (
                        <Result
                            weaponEnhancement={ weaponEnhancement }
                            abilityScore={ abilityScore }
                            baseAttackBonus={ baseAttackBonus - 10 }
                            misc={ misc }
                            attackCount={ 2 }
                        />
                    )}
                </>
            )}
        </>
    )
}