import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import teamlogo from '../../../public/images/teamlogo.png'
import renthead1 from '../../../public/images/renthead1.png'
import renthead3 from '../../../public/images/renthead3.png'
import renthead5 from '../../../public/images/renthead5.png'
import Link from 'next/link';
import Modal from '../Modal';
import { Card } from '../Card/Card';

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
    const [open, setOpen] = useState(false);

    const RentModal = () => {
        return (
            <Modal
                id="contact"
                open={open}
                onClose={() => setOpen(false)}
                title="Rent Blockheads for this Game"
                className="!max-w-[63.5rem] !w-full shadow-xl"
            >
                <div className='flex items-center justify-center'>
                    <h4 className={` text-5xl font-bold mb-5  rounded-t-xl`}>
                        Rent Blockheads for this Game
                    </h4>
                </div>
                <div className="flex flex-wrap gap-14">

                    <Card image={renthead3} subTitle='RENT 1 BLOCKHEAD' description='Rent one BHS player for this game.' />
                    <Card image={renthead3} subTitle='RENT 1 BLOCKHEAD' description='Rent one BHS player for this game.' />
                    <Card image={renthead5} subTitle='RENT 1 BLOCKHEAD' description='Rent one BHS player for this game.' />
                </div>
            </Modal>
        )
    }

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

                                        <Link href="#" onClick={() => setOpen(true)} className='text-[18px] font-bold text-[#737373]'>{rent}</Link>
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
            {open && <RentModal />}
        </div>
    )
}

