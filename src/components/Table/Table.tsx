import Image, { StaticImageData } from 'next/image'
import React from 'react'
import team from '../../../public/images/team.png'
import teamlogo from '../../../public/images/teamlogo.png'

interface TableProps {
    heading: string;
    data?: TableDataProps[]
}
interface TableDataProps {
    teamImage?: StaticImageData;
    matchup?: string;
    location?: string;
    locationImage?: StaticImageData;
    time?: string;
    rent?: string;
    watch?: string;
}

export const Table: React.FC<TableProps> = ({ heading, data }) => {
    return (
        <div className='py-10'>
            <h4 className={` text-5xl font-bold mb-5  rounded-t-xl`}>
                {heading}
            </h4>
            <div>
                <table className='w-full '>
                    <thead className='h-24 bg-black'>
                        <tr className=' '>
                            <th className='text-white text-2xl font-bold'>Matchup</th>
                            <th className='text-white text-2xl font-bold'></th>
                            <th className='text-white text-2xl font-bold'>Time</th>
                            <th className='text-white text-2xl font-bold'>Rent Players</th>
                            <th className='text-white text-2xl font-bold'>Where to Watch</th>
                        </tr>
                    </thead>
                    <tbody className='border'>
                        {data?.map(({ teamImage, matchup, location, locationImage, time, rent, watch }) => {
                            return (
                                <tr className='border-b h-32'>
                                    <td className='flex items-center justify-center text-center gap-4' style={{ height: "inherit" }}>
                                        <Image className="w-14 rounded-t-2xl" src={teamImage ? teamImage : teamlogo} alt="coin image" />
                                        <h4 className='text-[18px] font-bold text-[#737373]'>{matchup}</h4>
                                    </td>
                                    <td className='text-center'>
                                        <div className='flex items-center justify-center'>
                                            @
                                            <Image className="w-14 rounded-t-2xl px-4" src={locationImage ? locationImage : teamlogo} alt="coin image" />

                                            <h4 className='text-[18px] font-bold text-[#737373]'>{location}</h4>
                                        </div>
                                    </td>
                                    <td className='text-center'>

                                        <h4 className='text-[18px] font-bold text-[#737373]'>{time}</h4>
                                    </td>
                                    <td className='text-center'>

                                        <h4 className='text-[18px] font-bold text-[#737373]'>{rent}</h4>
                                    </td>
                                    <td className='text-center'>

                                        <h4 className='text-[18px] font-bold text-[#FD0013] underline'>{watch}</h4>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>


            </div>
        </div>
    )
}

