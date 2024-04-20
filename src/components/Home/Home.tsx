"use client"

import React, { useState } from 'react';
import team from '../../../public/images/team.png'
import teamlogo from '../../../public/images/teamlogo.png'
import Image from 'next/image';
import Table from '../Table';

const tableData = [
    {
        teamImage: team,
        matchup: "Miami",
        location: "Baltimore",
        locationImage: teamlogo,
        time: "7:00 PM ET",
        rent: "Rent Here",
        watch: "Twitch",
    },
    {
        teamImage: team,
        matchup: "Miami",
        location: "Baltimore",
        locationImage: teamlogo,
        time: "7:00 PM ET",
        rent: "Rent Here",
        watch: "Twitch",
    },
    {
        teamImage: team,
        matchup: "Miami",
        location: "Baltimore",
        locationImage: teamlogo,
        time: "7:00 PM ET",
        rent: "Rent Here",
        watch: "Twitch",
    }
]

export const Home = () => {
    return (
        <div className='p-3.5'>
            <div className='flex flex-col items-start justify-center mb-4'>
                <h4 className={` text-5xl font-bold mb-5  rounded-t-xl`}>
                    Schedule
                </h4>
                <div className='flex gap-3'>
                    <input type="search" className=' bg-[#E6E6E6] h-11 border px-4 py-3' placeholder='Select Team' />
                    <input type="search" className=' bg-[#E6E6E6] h-11 border px-4 py-3' placeholder='Select Player' />
                </div>

            </div>
            <Table heading='Sunday, April 1' data={tableData} />
            <Table heading='Monday, April 2' data={tableData} />
            <Table heading='Tuesday, April 3' data={tableData} />
        </div>
    );
};
