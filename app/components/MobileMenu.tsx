import React from "react";
import { STIX_Two_Text } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
import "../page.module.css";

type Props = {};

const stix = STIX_Two_Text({
  subsets: ["latin"],
  weight: ["700"],
});

const satoshiMedium = localFont({
  src: "../../fonts/satoshi/Satoshi-Medium.ttf",
  weight: "500",
});

const MobileMenu = (props: Props) => {
  return (
    <div className="pl-[30px] pr-[24px] pt-[24px]  text-[24px] leading-[52px] h-screen block lg:hidden">
      <div className="flex items-center justify-between">
        <h1 className={`${stix.className} text-[#292929]`}>ARTSY.</h1>
        <Image src={"/nav/close.svg"} width={26} height={26} alt="close" />
      </div>
      <ul className="flex flex-col gap-[18px] text-[#333333] font-satoshi test font-medium">
        <li className={`${satoshiMedium.className}`}>Home</li>
        <li className={`${satoshiMedium.className}`}>Auctions</li>
        <li className={`${satoshiMedium.className}`}>Marketplace</li>
        <li className={`${satoshiMedium.className}`}>Drops</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
