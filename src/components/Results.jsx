import React from 'react';
import '../App.css';
import { useFormContext } from 'react-hook-form';
import Result from './Result';

const BAB_MODIFIER = 5;

function Results() {
    const { watch, getValues } = useFormContext()
    const { baseAttackBonus } = getValues();
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

    const renderResults = () => {
        const baseAttacks = determineBaseAttacks();
        return baseAttacks.map((baseAttack, index) => {
            return (
                <Result
                    key={`result-${index}`}
                    baseAttackBonus={baseAttack}
                    attackCount={index}
                />
            );
        })
    };

    return (
        <div className="flex-grow p-2">
            <div className="flex flex-col space-y-4">{ renderResults() }</div>   
        </div>
    );
}

export default Results;