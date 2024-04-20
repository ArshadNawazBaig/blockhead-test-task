"use client"
import * as React from 'react';
import Image, { StaticImageData } from 'next/image';

export interface CardProps {
    image: StaticImageData;
    title?: string;
    subTitle?: string;
    description?: string;
    subDescription?: string;
    price?: string;
}

export const Card: React.FC<CardProps> = ({ image, title, subTitle, description, subDescription, price }) => {
    return (
        <div className='card '>
            <div className='w-full'>
                <Image className="w-full rounded-t-2xl" src={image} alt="coin image" />
            </div>
            <div className='flex flex-col items-center mt-3'>
                <h4 className='text-[#A7232D] text-base font-bold italic'> {title}</h4>
                <h4 className='text-[#262626] text-base font-bold'> {subTitle}</h4>
                <h4 className='text-[#868686] text-base font-normal'> {description}</h4>
                <h4 className='text-[#868686] text-base font-normal'> {subDescription}</h4>
                <h4 className='text-[#262626] text-base font-bold'> {price}</h4>
            </div>
        </div>
    )
}