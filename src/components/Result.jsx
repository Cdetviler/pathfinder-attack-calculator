import React from 'react';
import '../App.css';
import { attackColors, attackTranslations } from '../attacks'

function Result({ attackCount, children}) {
    const color = attackColors[attackCount];
    const attackTranslation = attackTranslations[attackCount];

    return (
        <div
            className={ `w-full bg-${color}-100 p-2 border border-${color}-800 rounded`}
        >
            <h2 className={`text-${color}-800 text-xl`}>{attackTranslation}</h2>
            <div className={`w-full flex flex-row text-${color}-800`} key={attackCount}>
                {children}
            </div>
        </div>
    )

}

export default Result;