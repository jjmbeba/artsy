import Image from 'next/image'
import React from 'react'
import { STIX_Two_Text } from 'next/font/google'
import { useAppSelector } from '../hooks/hooks';

type Props = {}

const stix = STIX_Two_Text({
    subsets: ["latin"],
    weight: ["700"],
  });

const NavBar = (props: Props) => {

  // const menuState = useAppSelector((state) => state.value);
  // console.log(menuState);

  return (
    <div className="flex items-center justify-between pl-[8px] pr-[14px] ">
        <Image src={"/nav/burgerMenu.svg"} width={39} height={34} alt="menu" />
        <h1
          className={`${stix.className} text-[24px] leading-[52px] text-[#292929]`}
        >
          ARTSY.
        </h1>
        <div className="flex items-center gap-[7px]">
          <Image src={"/nav/search.svg"} width={26} height={26} alt="search" />
          <Image src={"/nav/cart.svg"} width={26} height={26} alt="cart" />
        </div>
      </div>
  )
}

export default NavBar