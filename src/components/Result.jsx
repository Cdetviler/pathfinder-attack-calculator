import React from 'react';
import '../App.css';
import { attackColors, attackTranslations } from '../attacks'
import ResultColumn from './ResultColumn';

export default function Result({ attackCount, baseAttackBonus, abilityScore, weaponEnhancement, misc}) {
    const color = attackColors[attackCount];
    const attackTranslation = attackTranslations[attackCount];
    const total = parseInt(baseAttackBonus) + parseInt(abilityScore) + parseInt(weaponEnhancement) + parseInt(misc);
    return (
        <div
            className={ `w-full bg-${color}-100 p-2 border border-${color}-800 rounded`}
        >
            <h2 className={`text-${color}-800 text-xl`}>{attackTranslation}</h2>
            <div className={`w-full flex flex-col h md:flex-row text-${color}-800`} key={attackCount}>
                <ResultColumn label="Base Attack Bonus" value={ baseAttackBonus } />
                <ResultColumn label="Ability Score" value={ abilityScore } />
                <ResultColumn label="Weapon Enhancement" value={ weaponEnhancement } />
                <ResultColumn label="Miscellaneous" value={ misc } />
                <ResultColumn label="Total" value={ total } />
            </div>
        </div>
    )

}