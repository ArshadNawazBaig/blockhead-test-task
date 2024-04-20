"use client"

import { Logo } from '@/svgs/Logo'
import { TwitterIcon } from '@/svgs/Twitter'
import React from 'react'
import { DiscordIcon } from '@/svgs/DiscordIcon'
import { InstaIcon } from '@/svgs/InstaIcon'
import { TwitchIcon } from '@/svgs/TwitchIcon'
import { ProfileIcon } from '@/svgs/ProfileIcon'
import { WalletIcon } from '@/svgs/WalletIcon'
import { TrophyIcon } from '@/svgs/TrophyIcon'
import { useRouter } from 'next/navigation'

export const Navbar = () => {
    const router = useRouter();
    return (
        <div className='h-[80px] bg-black flex items-center'>
            <div className='ml-5 cursor-pointer' onClick={() => router.push('/')}>
                <Logo />
            </div>
            <div className='w-full bg-red h-full'>
                <div className='border-b border-white flex justify-between h-1/2 px-3'>
                    <div className='flex items-center gap-2.5'>
                        <TwitterIcon />
                        <DiscordIcon />
                        <InstaIcon />
                        <TwitchIcon />
                    </div>
                    <div className='flex items-center gap-2.5'>
                        <ProfileIcon />
                        <WalletIcon />
                        <TrophyIcon />
                    </div>
                </div>
                <div className='flex items-center justify-end h-1/2 px-3'>

                    <div className='w-full sm:w-auto flex items-center '>
                        <div className='flex gap-4 mr-40'>
                            <h4 className='text-white cursor-pointer' onClick={() => router.push('/')}>HOME</h4>
                            <h4 className='text-white cursor-pointer' onClick={() => router.push('/marketplace')}>SCHEDULE</h4>
                            <h4 className='text-white cursor-pointer' onClick={() => router.push('/marketplace')}>MY BH</h4>
                            <h4 className='text-white cursor-pointer' onClick={() => router.push('/marketplace')}>RENTALS</h4>
                            <h4 className='text-[#FD0013] cursor-pointer' onClick={() => router.push('/marketplace')}>MARKETPLACE</h4>
                        </div>
                        <input type="search" className='rounded-full bg-[#E6E6E6] h-8 border px-4 py-3' placeholder='Search' />
                    </div>
                </div>
            </div>
        </div>
    )
}

