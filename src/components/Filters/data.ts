import { CurrencyOption, MultiplierOptions, MultiplierTypeOptions, PriceOptions } from "./interfaces";


export const currencyData: CurrencyOption[] = [
    { id: 'usd', name: 'USD', checked: false },
    { id: 'bhc', name: 'BHC', checked: false }
];
export const multiplierData: MultiplierOptions[] = [
    { id: 'all', name: 'All', checked: false },
    { id: 'bronze', name: 'Bronze', checked: false },
    { id: 'silver', name: 'Silver', checked: false },
    { id: 'gold', name: 'Gold', checked: false },
    { id: 'diamond', name: 'Diamond', checked: false },
];
export const priceData: PriceOptions[] = [
    { id: 'all', name: 'All', checked: false },
    { id: '0-500BHC', name: '0-500BHC', checked: false },
    { id: '500-1000BHC', name: '500-1000 BHC', checked: false },
    { id: '1000-1500BHC', name: '1000 -1500 BHC', checked: false },
    { id: '1500 -2500 BHC', name: '1500 -2500 BHC', checked: false },
    { id: '2500BHC+', name: '2500 BHC + ', checked: false },
];
export const multiplierTypeData: MultiplierTypeOptions[] = [
    { id: 'all', name: 'All', checked: false },
    { id: 'win', name: 'Win', checked: false },
    { id: 'Loss', name: 'Loss', checked: false },
    { id: 'Assists', name: 'Assists', checked: false },
    { id: 'Goals', name: 'Goals', checked: false },
    { id: 'Hits', name: 'Hits', checked: false },
    { id: 'Saves', name: 'Saves', checked: false },
    { id: 'Combos', name: 'Combos', checked: false },
];
