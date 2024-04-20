import React, { useState } from 'react';
import { CurrencyOption, FilterProps, MultiplierOptions, PriceOptions, MultiplierTypeOptions } from './interfaces';

interface FiltersProps extends FilterProps {
    name?: string;
    isOpen?: boolean;
    setIsOpen?: (item: boolean) => void;
    options: CurrencyOption[] | MultiplierOptions[] | PriceOptions[] | MultiplierTypeOptions[];
}

export const Filters: React.FC<FiltersProps> = ({ name, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(options);

    const handleCheckboxChange = (id: string) => {
        setSelectedOptions(selectedOptions.map(option =>
            option.id === id ? { ...option, checked: !option.checked } : option
        ));
    };

    return (
        <div className="p-4 flex flex-col items-center">
            <div className="w-full">
                <div className="relative">
                    <div className="text-gray-900 text-sm rounded-lg w-full p-2.5 flex items-center justify-between">
                        <label htmlFor={`${name && name.toLowerCase()}-label`} className="text-[#262626] font-bold text-[24px]">
                            {name}
                        </label>
                        <button
                            id={`${name && name.toLowerCase()}-label`}
                            onClick={() => setIsOpen(!isOpen)}
                            className=" inset-y-0 right-0 flex items-center px-2 rounded-r-lg bg-transparent"
                        >
                            <svg className={`${isOpen ? 'rotate-180' : 'rotate-0'}`} width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 12L0.0717973 0.75L13.9282 0.749999L7 12Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                    {isOpen && (
                        <div className=" z-10 w-full bg-white rounded-md">
                            {selectedOptions.map((option) => (
                                <div
                                    key={option.id}
                                    className="flex items-center py-2 cursor-pointer"
                                    onClick={() => handleCheckboxChange(option.id)}
                                >
                                    <input
                                        id={`checkbox-${option.id}`}
                                        type="checkbox"
                                        checked={option.checked}
                                        readOnly
                                        className="w-6 h-6 text-black bg-gray-100 rounded border-[#BCBCBC] focus:ring-blue-500 checked:bg-black focus:outline-none"
                                    />
                                    <label htmlFor={`checkbox-${option.id}`} className="ml-2 text-sm font-medium text-[#262626]">
                                        {option.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

