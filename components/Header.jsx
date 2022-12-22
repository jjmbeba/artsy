import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='pt-[22px] pl-[8px] pr-[14px] flex items-center justify-between'>
        <div className='p-[10px]'>
            <Image src='/hamburger-icon.svg' width={19} height={14.5} alt='menu'/>
        </div>
        <h1 className='text-[24px] height-[52px] text-[#292929] font-stix font-bold'>ARTSY.</h1>
        <div className='flex items-center justify-center gap-[7.28px]'>
            <div className='p-[5px]'>
                <Image src='/search-icon.svg' width={16.72} height={16.72} alt='search'/>
            </div>
            <div className='p-[5px]'>
                <Image src='/cart-icon.svg' width={16.72} height={16.72} alt='search'/>
            </div>
        </div>
    </div>
  )
}

export default Header