import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Product from "./Product";

type Props = {};

const satoshiBold = localFont({
  src: "../../fonts/satoshi/Satoshi-Bold.ttf",
  weight: "500",
});


const FeaturedProducts = (props: Props) => {
  return (
    <div className="pl-[8px] pr-[14px] ">
      <h2
        className={`${satoshiBold.className} mt-[112px] text-[28px] leading-[156.7%] text-[#292929]`}
      >
        Featured products
      </h2>
        <div className="flex flex-col gap-[43px] mt-[30px] ">
            <Product name='Boolean Egytian' imageUrl='/productImages/product1.svg'/>
            <Product name='Are We There Yet?' imageUrl='/productImages/product2.svg'/>
            <Product name='Oloibiri 1997' imageUrl='/productImages/product3.svg'/>
        </div>
    </div>
  );
};

export default FeaturedProducts;
