import React from "react";
import localFont from "next/font/local";
import NavBar from "./NavBar";
import FeaturedProducts from "./FeaturedProducts";
import Reminder from "./Reminder";
import Links from "./Links";
import TopCreators from "./TopCreators";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

type Props = {};

const clash = localFont({
  src:'../../fonts/clash/ClashDisplay-Medium.ttf'
})

const HomePage = (props: Props) => {
  return (
    <div className="pt-[22px] pb-[50px]">
      <NavBar/>
      <h1 className={`${clash.className} pl-[8px] pr-[14px]  mt-[17px] text-center font-medium text-[32px] leading-[150%] text-[#333333]`}>
      Photography is poetry and beautiful untold stories
      </h1>
      <FeaturedProducts/>
      <Reminder/>
      <Links/>
      <TopCreators/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default HomePage;
