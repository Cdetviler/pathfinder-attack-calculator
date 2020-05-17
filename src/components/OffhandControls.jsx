import React from 'react';
import '../App.css';
import Checkbox from './form_components/Checkbox';
import { useFormContext } from 'react-hook-form';

export default function OffhandControls() {
    const { watch, getValues, setValue } = useFormContext()
    const { weaponSet, twoWeaponFightingFeat, improvedTwoWeaponFightingFeat } = getValues();
    watch(['weaponSet', 'twoWeaponFightingFeat', 'improvedTwoWeaponFightingFeat']);
    const shouldRender = weaponSet === 'twoWeapon' || weaponSet === 'weaponAndShield';

    const resetValues = names => {
        setValue(names);
    }

    return (
        <>
            {shouldRender && (
                <div className="flex flex-col">
                    <div className="font-semibold">Offhand Modifiers/Feats</div>
                    <Checkbox name="offhandLight" label="Light offhand" />
                    <Checkbox
                        name="twoWeaponFightingFeat"
                        label="Two Weapon Fighting"
                        onChange={() => {
                            resetValues([
                                { improvedTwoWeaponFightingFeat: false},
                                { greaterTwoWeaponFightingFeat: false }
                            ]);
                        }}
                    />
                    { twoWeaponFightingFeat && (
                        <Checkbox
                            name="improvedTwoWeaponFightingFeat"
                            label="Improved Two Weapon Fighting"
                            onChange={ () => {resetValues([{"greaterTwoWeaponFightingFeat": false}])}}
                        />
                    )}
                    { improvedTwoWeaponFightingFeat && (
                        <Checkbox
                            name="greaterTwoWeaponFightingFeat"
                            label="Greater Two Weapon Fighting"
                        />
                    )}
                </div>
            )}
        </>
    );
}