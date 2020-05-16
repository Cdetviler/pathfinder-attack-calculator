import React from 'react';
import '../App.css';
import { attackColors, attackTranslations } from '../attacks';
import ResultColumn from './ResultColumn';
import MiscResultColumn from './MiscResultColumn';

function Result({baseAttackBonus, abilityScore, weaponEnhancement, attackCount}) {
    const addTotalScore = () => {
        const baseAttackSafe = parseInt(baseAttackBonus);
        const abilityScoreSafe = parseInt(abilityScore);
        const weaponEnhancementSafe = parseInt(weaponEnhancement);
        return baseAttackSafe + abilityScoreSafe + weaponEnhancementSafe;
    }

    const color = attackColors[attackCount];
    const attackTranslation = attackTranslations[attackCount];
    const total = addTotalScore();

    return (
        <div
            className={ `w-full bg-${color}-100 p-2 border border-${color}-800 rounded`}
        >
            <h2 className={`text-${color}-800 text-xl`}>{attackTranslation}</h2>
            <div className={`w-full flex flex-row text-${color}-800`} key={attackCount}>
                <ResultColumn label="Base Attack Bonus" value={baseAttackBonus} />
                <ResultColumn label="Ability Score" value={ abilityScore } />
                <ResultColumn label="Weapon Enhancement" value={ weaponEnhancement } />
                <MiscResultColumn label="miscellaneous" />
                <ResultColumn label="Total" value={ total } />
            </div>
        </div>
    )

}

export default Result;