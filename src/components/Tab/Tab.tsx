interface TabProps {
    title: string;
    className?: string;
    index?: number;
    selected?: boolean;
}

import React from 'react';
import cls from 'classnames';

export const Tab: React.FC<TabProps> = ({ title, className, index, selected }) => {
    // Calculate the margin-right value based on the index
    const marginRightValue = index && index > 0 ? '-mr-[4rem]' : 'mr-0';

    return (
        <div>
            <h4 className={cls`hidden sm:flex h-12 text-3xl font-bold px-3.5 py-3 ${selected ? "bg-black text-white" : "bg-[#E7E7E7]"} rounded-t-xl drop-shadow-[6px_0px_4px_rgba(0,0,0,0.25)] ${className}`}>
                {title}
            </h4>
        </div>
    );
};
