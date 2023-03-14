import React from "react";
import PageLink from "./PageLink";

type Props = {};



const Links = (props: Props) => {
  return (
    <div className="mt-[100px]">
      <div className="block w-full h-[1px] bg-black opacity-50" />
      <PageLink name='Explore marketplace'/>
      <PageLink name='See auctions'/>
    </div>
  );
};

export default Links;
