import React from 'react';
import '../App.css';
import Checkbox from './form_components/Checkbox';
import { useFormContext } from 'react-hook-form';

export default function OffhandControls() {
    const { watch, getValues } = useFormContext()
    const { weaponSet } = getValues();
    watch('weaponSet');
    const shouldRender = weaponSet === 'twoWeapon' || weaponSet === 'weaponAndShield';

    return (
        <>
            {shouldRender && (
                <>
                    <Checkbox name="offhandLight" label="Light offhand" />
                    <Checkbox name="twoWeaponFightingFeat" label="Feat: Two Weapon Fighting" />
                </>
            )}
        </>
    );
}