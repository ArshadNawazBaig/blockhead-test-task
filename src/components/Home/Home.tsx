"use client"

import React from 'react';
import Tab from '../Tab';
import Filters from '../Filters';
import Dropdown from '../Dropdown';
import { Card } from '../Card/Card';

export const Home = () => {
    return (
        <div className='p-3.5'>
            <div className='flex items-center justify-between mb-4'>
                <div>
                    <h4 className={` text-5xl font-bold   rounded-t-xl`}>
                        Marketplace
                    </h4>
                    <h4 className={` text-2xl font-normal font-sans rounded-t-xl`}>
                        {`Multipliers > Gold`}
                    </h4>
                </div>
                <div>
                    <input type="search" className='rounded-full bg-[#E6E6E6] h-11 border px-4 py-3' placeholder='Search' />
                </div>
            </div>
            <div className='h-[300px] w-full bg-[#B82B2B] flex items-center justify-center mb-[24px]'>
                <h3 className='text-white text-[32px] flex items-center justify-center font-bold'>GRAPHIC BANNER</h3>
            </div>
            <div className='flex justify-between border-b border-black min-h-16'>
                <div className='flex relative mt-[15px]'>
                    <Tab className='tab  absolute z-30 left-0' title="Rentals" index={0} />
                    <Tab className='tab  absolute z-20 left-[8.5rem]' title="Blockheads" index={1} />
                    <Tab selected={true} className='tab absolute z-10 left-[20.5rem]' title="Multipliers" index={2} />
                    <Tab className='tab absolute z-0 left-[31.5rem]' title="Multipliers" index={2} />
                </div>
                <div className='w-full sm:w-auto flex items-end mb-2'><Dropdown /></div>
            </div>
            <div className='flex flex-col sm:flex-row w-full gap-12 mt-10'>
                <div className='w-full sm:max-w-[300px]'>
                    <Filters name="Currency" />
                    <Filters name="Multiplier Level" />
                    <Filters name="Sort by Price" />
                    <Filters name="Multiplier Types" />
                </div>
                <div className='w-full grid gap-14 sm:grid sm:grid-cols-2 lg:grid xl:grid-cols-3 2xl:grid 2xl:grid-cols-4'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};
