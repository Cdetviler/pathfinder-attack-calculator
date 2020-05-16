const MISC_VALUE_MAP = {
    'twoWeapon': -6,
    'weaponAndShield': -6,
    'weaponAndShield_offhand': -10,
    'twoWeapon_offhand': -10
};

export const getMiscValue = (key, value) => {
    if(value && key in MISC_VALUE_MAP) {
        return MISC_VALUE_MAP[key];
    }
    return 0;
}