import Image from "next/image";
import React from "react";
import { Bellefair, Poppins } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

type Props = {};

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const satoshiMedium = localFont({
  src: "../../fonts/satoshi/Satoshi-Medium.ttf",
});

const satoshiRegular = localFont({
  src: "../../fonts/satoshi/Satoshi-Regular.ttf",
});

const Reminder = (props: Props) => {
  return (
    <div className="mt-[100px] p-[34px] w-screen bg-[linear-gradient(99.99deg,#4693ED_-26.21%,#79C2D2_22.16%,rgba(192,86,9,0.49)_111.62%)]">
      <div className="relative">
        <Image
          src={"/reminder/reminder.svg"}
          width={347}
          height={269}
          alt="reminder"
        />
        <div className=" ml-[4px] absolute top-[33px] right-[11px]">
          <div className="flex gap-[29px]">
            <div className="block w-[15.97px] h-[15.97px] rounded-full bg-white" />
            <h2
              className={`${bellefair.className} text-[20px] leading-[23px] text-white`}
            >
              MONALISA REDEFINED IN STYLE.
            </h2>
          </div>
          <div className="flex gap-[12px]">
            <span
              className={`${bellefair.className} text-[40px] leading-[46px] text-[#E1E1E1]`}
            >
              01
            </span>
            <div className="flex flex-col gap-[20px]">
              <span
                className={`${poppins.className} text-[12px] leading-[18px] text-white uppercase`}
              >
                Start on : 08:00 GTS . Monday
              </span>
              <span
                className={`${satoshiMedium.className} text-[10px] leading-[14px] tracking-[0.065em] text-white`}
              >
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </span>
            </div>
          </div>
          <div className="flex items-center justify-end mt-[12px] gap-[30px]">
            <Link href={"/"}>
              <span
                className={`${satoshiRegular.className} relative text-[14px] leading-[19px] text-white after:content-[""] after:block after:w-full after:h-[2px] after:bg-white after:scale-0 hover:after:scale-100 after:transition after:ease-in-out after:duration-300 after:origin-center`}
              >
                See more
              </span>
            </Link>
            <button
              className={`${satoshiRegular.className} text-[14px] leading-[19px] text-white px-[6px] py-[8px] border border-white rounded-[10px]`}
            >
              Set a reminder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
