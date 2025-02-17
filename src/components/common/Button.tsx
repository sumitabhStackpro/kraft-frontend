import React, { FC } from "react";

interface ButtonProps {
  type: "primary" | "secondary" | "tertiary";
  label: string;
}

const Button: FC<ButtonProps> = ({ type, label }) => {
  console.log(type);
  return (
    <div
      className={`py-2 px-6 border border-gray-200 transition-all rounded-full cursor-pointer group hover:border-pink-300 hover:bg-pink-300`}
    >
      <p
        className={`text-sm transition-all text-gray-200 group-hover:text-white`}
      >
        {label}
      </p>
    </div>
  );
};

export default Button;
