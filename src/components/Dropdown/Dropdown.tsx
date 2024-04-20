"use client"

import React, { useState } from 'react'
import { CheckIcon } from '@/svgs/CheckIcon';

interface CurrencyOption {
    id: string;
    name: string;
    checked: boolean;
}

export const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currencies, setCurrencies] = useState<CurrencyOption[]>([
        { id: 'usd', name: 'USD', checked: false },
        { id: 'pkr', name: 'PKR', checked: false }
    ]);
    const handleCheckboxChange = (id: string) => {
        setCurrencies(currencies.map(currency =>
            currency.id === id ? { ...currency, checked: !currency.checked } : currency
        ));
    };
    return (
        <div className=" flex  flex-col items-center">
            <div className="w-[250px]">
                <div className="relative">
                    <div className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full px-2 py-1.5">
                        <label htmlFor="currency-label" className="text-[#262626] font-normal text-[24px]">
                            Most Popular
                        </label>
                        <button
                            id="currency-label"
                            onClick={() => setIsOpen(!isOpen)}
                            className="absolute inset-y-0 right-0 flex items-center px-2 rounded-r-lg bg-transparent"
                        >

                            <svg className={`${isOpen ? 'rotate-180' : 'rotate-0'}`} width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12L0.0717973 0.75L13.9282 0.749999L7 12Z" fill="black" />
                            </svg>

                        </button>
                    </div>
                    {isOpen && (
                        <div className="absolute z-10 w-full bg-white border border-[#BCBCBC] rounded-md shadow-lg mt-1">
                            {currencies.map((currency) => (
                                <div
                                    key={currency.id}
                                    className="flex items-center py-2  cursor-pointer"
                                    onClick={() => handleCheckboxChange(currency.id)}
                                >
                                    <input
                                        id={`checkbox-${currency.id}`}
                                        type="checkbox"
                                        checked={currency.checked}
                                        readOnly
                                        className="w-6 h-6 text-black bg-gray-100 rounded border-[#BCBCBC] focus:ring-blue-500"
                                    />
                                    <label htmlFor={`checkbox-${currency.id}`} className="ml-2 text-sm font-medium text-[#262626]">
                                        {currency.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
