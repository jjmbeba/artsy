import React from "react";
import { Baskervville } from "next/font/google";
import localFont from "next/font/local";

type Props = {};

const basker = Baskervville({
  subsets: ["latin"],
  weight: "400",
});

const satoshiRegular = localFont({
  src: "../../fonts/satoshi/Satoshi-Regular.ttf",
});

const Newsletter = (props: Props) => {
  return (
    <div className="mt-[29px] pl-[20px] pr-[54px]">
      <h2
        className={`${basker.className} text-[24px] leading-[31px] text-[#333333]`}
      >
        NEWSLETTER
      </h2>
      <h3
        className={`mt-[12.98px] ${satoshiRegular.className} text-[11px] leading-[16px] text-[#333333]`}
      >
        SUBSCRIBE TO OUR DAILY UPDATES AND NEWSLETTERS
      </h3>
      <input type="text" className={`${satoshiRegular.className} box-border mt-[25px] pl-[15px] py-[12px] w-[320px] border border-[#333333] placeholder:${satoshiRegular.className} placeholder:text-[10px] placeholder:leading-[14px] placeholder:text-[#333333]`} placeholder="ENTER YOUR EMAIL HERE"/>
      <button className={`${satoshiRegular.className} mt-[45px] py-[19px] px-[56px] text-[11px] leading-[16px] text-white bg-[#272727]`}>
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Newsletter;
