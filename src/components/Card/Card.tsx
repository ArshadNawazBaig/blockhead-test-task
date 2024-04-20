"use client"
import * as React from 'react';
import Image from 'next/image';
import coin from '../../../public/images/coin.png';

export const Card: React.FC = () => {
    return (
        <div className='card '>
            <div className='w-full'>
                <Image className="w-full rounded-t-2xl" src={coin} alt="coin image" />
            </div>
            <div className='flex flex-col items-center'>
                <h4 className='text-[#A7232D] text-base font-bold'> Best Seller</h4>
                <h4 className='text-[#262626] text-base font-bold'> 8X Win</h4>
                <h4 className='text-[#868686] text-base font-normal'> Multiplier</h4>
                <h4 className='text-[#868686] text-base font-normal'> Gold Level</h4>
                <h4 className='text-[#262626] text-base font-bold'> 1000 BHC</h4>
            </div>
        </div>
    )
}