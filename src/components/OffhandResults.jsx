import React from 'react';
import '../App.css';
import { useFormContext } from 'react-hook-form';
import Result from './Result';
import ResultColumn from './ResultColumn';
import MiscResultColumn from './MiscResultColumn';
import TotalColumn from './TotalColumn';
import AbilityScoreColumn from './AbilityScoreColumn';
import WeaponEnhancementColumn from './WeaponEnhancementColumn';

export default function OffhandResults() {
    const { watch, getValues } = useFormContext()
    const { weaponSet, baseAttackBonus } = getValues();
    const hasOffhand = weaponSet === 'weaponAndShield' || weaponSet ==='twoWeapon';
    console.log(hasOffhand);
    watch(['weaponSet', 'baseAttackBonus']);

    return (
        <>
            { hasOffhand && (
                <>
                    <h2 className="text-xl">Offhand Attacks</h2>
                    <Result baseAttackBonus={baseAttackBonus} attackCount={0}>
                        <ResultColumn label="Base Attack Bonus" value={ baseAttackBonus } />
                        <AbilityScoreColumn />
                        <WeaponEnhancementColumn />
                        <MiscResultColumn isOffhandAttack={true} />
                        <TotalColumn baseAttackBonus={ baseAttackBonus } isOffhandAttack={ true } />
                    </Result>
                </>
            )}
        </>
    )
}