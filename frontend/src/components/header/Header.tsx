import React from "react";
import Logo from "../../assets/380644.svg";
const Header = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="container flex justify-between items-center  pt-1 pb-1 ">
        <img src={Logo} alt="s" className="w-20 ml-2 " />
        <a
          href="https://github.com/MasterBrian99/github-org-inviter"
          className=" bg-gradient-to-r from-yellow-300 to-yellow-500 p-2 w-28 rounded-md shadow-lg text-white font-bold text-center mr-2 "
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Header;
