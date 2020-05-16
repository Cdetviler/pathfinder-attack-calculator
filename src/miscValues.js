const MISC_VALUE_MAP = {
    'twoWeapon': -10
};

export const getMiscValue = (key, value) => {
    if(value && key in MISC_VALUE_MAP) {
        return MISC_VALUE_MAP[key];
    }
    return 0;
}