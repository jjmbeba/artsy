import React from "react";
import localFont from 'next/font/local'
import Image from "next/image";

type Props = {
  name:string
};

const satoshiMedium = localFont({
    src: "../../fonts/satoshi/Satoshi-Medium.ttf",
  });

const PageLink = ({name}: Props) => {
  return (
    <div>
      <div className="flex items-center justify-between py-[13px] pl-[8px] pr-[35px] ">
        <div
          className={`${satoshiMedium.className} text-[24px] leading-[32px] text-[#292929]`}
        >
          {name}
        </div>
        <Image
          src={"/productImages/arrowRightBlack.svg"}
          width={54}
          height={53}
          alt="arrow-right"
        />
      </div>
      <div className="block w-full h-[1px] bg-black opacity-50" />
    </div>
  );
};

export default PageLink;
