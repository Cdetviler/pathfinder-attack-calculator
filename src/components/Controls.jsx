import React from 'react';
import '../App.css';
import TextInput from './form_components/TextInput';
import Select from './form_components/Select';
import Checkbox from './form_components/Checkbox';

function Controls(){

    const renderNumericalOptions = (count, keyPrefix) => {
        const optionArray = [];
        for (let i = 0; i <= count; i++) {
            optionArray.push(<option key={`${keyPrefix}-${i}`} value={i}> {i} </option>);
        }
        return optionArray;
    }

    return (
        <div className="flex flex-col space-y-2 p-2">
            <h2 className="text-xl">Core Modifiers</h2>
            <Select name="baseAttackBonus" label="Base Attack Bonus" className="w-full">
                { renderNumericalOptions(20, 'baseAttackBonus') }
            </Select>
            <TextInput type="number" name="abilityScore" label="Ability Score" />
            <Select name="weaponEnhancement" label="Weapon Enhancement" className="w-full">
                { renderNumericalOptions(5, 'weaponEnhancement') }
            </Select>
            <h2 className="text-xl">Misc Modifiers</h2>
            <Checkbox name="offhand" label="Using Offhand" />
        </div>
    );
}

export default Controls;