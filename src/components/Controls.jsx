import React from 'react';
import '../App.css';
import TextInput from './form_components/TextInput';
import Select from './form_components/Select';
import Radio from './form_components/Radio';
import OffhandControls from './OffhandControls';

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
            <Select name="baseAttackBonus" label="Base Attack Bonus" className="w-full max-w-xs">
                { renderNumericalOptions(20, 'baseAttackBonus') }
            </Select>
            <TextInput type="number" name="abilityScore" label="Ability Score" className="w-full max-w-xs"/>
            <Select name="weaponEnhancement" label="Weapon Enhancement" className="w-full max-w-xs">
                { renderNumericalOptions(5, 'weaponEnhancement') }
            </Select>
            <TextInput type="number" name="miscValue" label="Miscellaneous" className="w-full max-w-xs" />
            <h2 className="text-xl">Misc Modifiers</h2>
            <Radio
                name="weaponSet"
                label="Attack Type"
                options={
                    [
                        {value:'oneHand', label:'One Handed Weapon'},
                        {value:'twoWeapon', label:'Weapon + Offhand'},
                        {value:'weaponAndShield', label: 'Weapon + Shield' },
                        {value:'twoHanded', label:'Two Handed Weapon'}
                    ]
                }
            />
            <OffhandControls />
        </div>
    );
}

export default Controls;