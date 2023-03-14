import Image from "next/image";
import React from "react";
import localFont from "next/font/local";

type Props = {
    name:string,
    imageUrl:string
};

const satoshiRegular = localFont({
  src: "../../fonts/satoshi/Satoshi-Regular.ttf",
});

const satoshiMedium = localFont({
  src: "../../fonts/satoshi/Satoshi-Medium.ttf",
});

const clashSemiBold = localFont({
  src: "../../fonts/clash/ClashDisplay-Semibold.ttf",
});

const Product = ({name, imageUrl}: Props) => {
  return (
    <div className="relative max-w-[340px]">
      <Image
        src={imageUrl}
        width={338}
        height={225}
        alt="boolean"
      />
      <span className={`${clashSemiBold.className} text-[30px] leading-[37px] text-white absolute top-[40px] left-[50%] translate-x-[-50%] whitespace-nowrap`}>
        {name}
      </span>
      <Image className="absolute top-[113px] right-[46px]" src={'/productImages/arrowRight.svg'} width={78} height={78} alt="arrow-button"/>
      <p
        className={`${satoshiRegular.className} text-[15px] leading-[155%] text-[#616161] mt-[13px]`}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor pur
      </p>
      <div className="mt-[15px] flex items-center gap-[106px]">
        <div className="flex relative w-auto">
          <Image
            src={"/creators/creator1.svg"}
            width={42}
            height={42}
            alt="creator-1"
          />
          <Image
            className="absolute top-0 left-[18px]"
            src={"/creators/creator2.svg"}
            width={42}
            height={42}
            alt="creator-2"
          />
          <Image
            className="absolute top-0 left-[42px]"
            src={"/creators/creator3.svg"}
            width={42}
            height={42}
            alt="creator-3"
          />
          <Image
            className="absolute top-0 left-[66px]"
            src={"/creators/creator4.svg"}
            width={42}
            height={42}
            alt="creator-4"
          />
          <Image
            className="absolute top-0 left-[90px]"
            src={"/creators/creator5.svg"}
            width={42}
            height={42}
            alt="creator-5"
          />
        </div>
        <span
          className={`${satoshiMedium.className} text-[16px] leading-[22px] text-black`}
        >
          64 major creators
        </span>
      </div>
      <div className="mt-[17px] w-[294px] h-[0.5px] block bg-black opacity-50" />
    </div>
  );
};

export default Product;
