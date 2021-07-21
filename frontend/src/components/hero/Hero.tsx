import React from "react";
import SideImage from "../../assets/Pull request-amico.svg";
import MainForm from "../form/MainForm";
import Info from "../info/Info";
import SocialSet from "../social/SocialSet";

const Hero = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col-reverse w-full justify-between items-center pt-20 2xl:flex-row lg:flex-col-reverse md:flex-col-reverse xl:flex-row md:flex-col-reverse sm:flex-col-reverse md:pl-4 md:pr-4 sm:flex-col sm:pl-4 sm:pr-4">
        <div className="flex-1 flex-shrink ">
          <h1 className=" pl-2 text-3xl 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl  font-bold text-cyan-blueish-blue hero-header-opacity">
            You Are Invited !
          </h1>
          <h2 className="text-xs text-lg 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-sm  text-gray-500 pl-2 ">
            Thanks for your interest in our Organization.We need you to do a
            couple of things to get you in as an actual member
          </h2>
          <h2 className="text-light-cherry text-xl font-bold pl-2 ">
            but,before you do,
          </h2>
          <Info
            stepNumber={1}
            title={"Fill up our Membership form"}
            info="Your details would really help us to connect and talk to you in future. They're safe with us tho"
          />

          <h3 className="text-lg text-gray-500 pl-2 pr-2">
            Great! Thanks for going through this with us. Now, we'd like to
            invite you to our Github organization. Go on and enter your Github
            username and Github email. You can expect an invitation soon!
          </h3>
          <MainForm />
          <SocialSet />
        </div>
        <div className="flex-shrink flex-1 flex justify-end hero-image ">
          <img
            src={SideImage}
            alt="ss"
            className="w-80 2xl:w-8/12 lg:w-96 xl:w-8/12 md:w-96 sm:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
