import React from 'react'
import { Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import Image from 'next/image';

const poppins = Poppins({
    subsets:['latin'],
    weight:'300'
});

const satoshiRegular = localFont({
    src: "../../fonts/satoshi/Satoshi-Regular.ttf",
  });
  

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='ml-[20px] mt-[29px] text-[#333333] text-[11.6px] leading-[17px]'>
        <h2 className={poppins.className}>REACH US</h2>
        <div className={`{satoshiRegular.className} mt-[13px] flex items-center gap-[13px]`}>
            <Image src={'/footer/mail.svg'} width={24} height={24} alt='mail-icon'/>
            <span>artsystudios@gmail.com</span>
        </div>
        <div className={`{satoshiRegular.className} mt-[13px] flex items-center gap-[13px]`}>
            <Image src={'/footer/pin.svg'} width={24} height={24} alt='mail-icon'/>
            <span>Nairobi, Kenya</span>
        </div>
    </div>
  )
}

export default Footer