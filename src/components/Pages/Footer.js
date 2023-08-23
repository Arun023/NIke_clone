import React from "react";
import { footerLogo } from "../../assets/images/index";
import { footerLinks, socialMedia } from "../../constants";
import { copyrightSign } from "../../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base font-montserrat text-white-400 sm:max-w-sm">
            Get Shoes Ready For The New Term At Your Nearest Nike Store. Find
            Your Perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((link) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-3xl">
                <img src={link.src} alt={link.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap text-white">
          {footerLinks.map((data) => (
            <div key={data}>
              <h4 className="text-white font-montserrat text-2xl leading-normal mb-6 font-medium">
                {data.title}
              </h4>
              <ul>
                {data.links.map((link) => (
                  <li className="mt-3 text-white-400 text-base leading-normal hover:text-slate-gray duration-200 cursor-pointer font-montserrat">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 max-sm:flex-col max-sm:items-center text-white-400">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            width={20}
            height={20}
            className="rounded-3xl m-0"
          />
          <p>Copyright. All rights Reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Condition</p>
      </div>
    </footer>
  );
};

export default Footer;
