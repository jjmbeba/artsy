import React from "react";
import localFont from "next/font/local";
import Image from "next/image";

type Props = {};

const clashSemibold = localFont({
  src: "../../fonts/clash/ClashDisplay-Semibold.ttf",
});

const clashBold = localFont({
  src: "../../fonts/clash/ClashDisplay-Bold.ttf",
});

const clashRegular = localFont({
  src: "../../fonts/clash/ClashDisplay-Regular.ttf",
});

const clashExtraLight = localFont({
  src: "../../fonts/clash/ClashDisplay-ExtraLight.ttf",
});

const TopCreators = (props: Props) => {
  return (
    <div className="mt-[60px] bg-[#E2E2E2] pt-[7px] pb-[53px] relative overflow-y-hidden">
      <h2
        className={`${clashSemibold.className} text-[24px] leading-[155.55%] text-[#161616] uppercase`}
      >
        top creators of <br /> the week
      </h2>
      <p className={`${clashExtraLight.className} mt-[15px]`}>
        “Everything always looked better in black and white. Everything always
        as if it were the first time; there’s always more people in a black and
        white photograph. It just makes it seem that there were more people at a
        gig, more people at a football match, than with colour photography.
        Everything looks more exciting.”– Jack Lowden
      </p>
      <div
        className={`${clashRegular.className} flex items-center gap-[8px] text-[10px] leading-[155.5%] text-[#333333] absolute top-0 -right-[25px]`}
      >
        <span>Editorials</span>
        <span className="block w-[7px] h-[7px] bg-[#292929] rounded-full" />
        <span>Fashion</span>
        <span className="block w-[7px] h-[7px] bg-[#292929] rounded-full" />
        <span>Lifestyle</span>
      </div>
      <span
        className={`${clashBold.className} text-[32px] leading-[155.5%] text-[#333333] absolute right-[9px] bottom-[81px]`}
      >
        CIRCA
      </span>
      <span
        className={`${clashBold.className} text-[64px] leading-[155.5%] text-[#161616] absolute right-[4px] bottom-[0px] line-through`}
      >
        1985
      </span>
      <Image
        className="absolute top-[48px] left-[70px]"
        src={"/topCreators/topCreatorsImage.svg"}
        width={260.92}
        height={264}
        alt="top-creator-image"
      />
    </div>
  );
};

export default TopCreators;
