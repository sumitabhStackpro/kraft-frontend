/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import kraftLogo from "../../../public/kraft_logo.svg";
import Button from "./Button";

const Navbar = () => {
  const options: any[] = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 1,
      title: "Pricing",
    },
    {
      id: 1,
      title: "About us",
    },
    {
      id: 1,
      title: "Contact",
    },
  ];

  return (
    <div className="w-full fixed top-0 left-0 flex items-center titillium-web-regular justify-between h-[80px] bg-[#efd5d078] backdrop-blur-sm px-[150px]">
      <div className="flex gap-16 items-center">
        <img src={kraftLogo.src} width="120px" />
        <div className="flex gap-8 items-center transition-all">
          {options.map((each: any) => (
            <div
              key={each.id}
              className="text-sm text-gray-200 cursor-pointer transition-all hover:border-b-2 border-pink-300"
            >
              {each.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <Button type="primary" label="Login" />
      </div>
    </div>
  );
};

export default Navbar;
