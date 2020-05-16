const MISC_VALUE_MAP = {
    'offhand': -10
};

export const getMiscValue = (key, value) => {
    if(value && key in MISC_VALUE_MAP) {
        return MISC_VALUE_MAP[key];
    }
    return 0;
}