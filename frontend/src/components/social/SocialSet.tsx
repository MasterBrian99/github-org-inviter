import React from "react";
import FbIcon from "../../assets/icons8-facebook (1).svg";
import InstagramIcon from "../../assets/icons8-instagram.svg";
import GithubIcon from "../../assets/icons8-octocat.svg";
import PinterestIcon from "../../assets/icons8-pinterest.svg";
import TwitterIcon from "../../assets/icons8-twitter.svg";
const SocialSet = () => {
  return (
    <div className="mt-8 flex flex-col pl-2">
      <h3 className="text-lg">Follow us on social media</h3>
      <div className="flex ">
        <a href="/">
          <img src={FbIcon} alt="" />
        </a>
        <a href="/">
          <img src={InstagramIcon} alt="" />
        </a>
        <a href="/">
          <img src={GithubIcon} alt="" />
        </a>
        <a href="/">
          <img src={PinterestIcon} alt="" />
        </a>
        <a href="/">
          <img src={TwitterIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default SocialSet;
