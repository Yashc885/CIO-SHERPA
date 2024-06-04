import React from 'react';
import Link from 'next/link';
import { TiSocialFacebook  , TiSocialInstagram  , TiSocialTwitter} from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";

const SocialIcon = ({ Icon }) => {
  return (
    <div
      className="w-6 h-6 flex items-center justify-center text-white hover:text-gray-700 hover:bg-gray-200 rounded-full transition duration-200 ease-in-out"
    >
      <Icon className="w-full h-full" />
    </div>
  );
};


export function Header() {
  return (
    <div className=" w-[100%] w-full bg-[#5BBCFF] sm:flex">
    <div className="w-[60%] w-full ">
      <div className="flex justify-start  items-center space-x-4 sm:space-x-8 py-2 pl-2 sm:pl-16">
        <Link href="latest-project" className="text-xs sm:text-sm lg:text-base text-white hover:text-black">About</Link>
        <Link href="team" className="text-xs sm:text-sm lg:text-base text-white hover:text-black">Advertise</Link>
        <Link href="contactus" className="text-xs sm:text-sm lg:text-base text-white hover:text-black">Awards</Link>
        <Link href="/" className="text-xs sm:text-sm lg:text-base text-white hover:text-black">partners</Link>
        <Link href="contactus" className="text-xs sm:text-sm lg:text-base text-white hover:text-black">contact</Link>
      </div>
    </div>
    <div className="w-[40%] w-full ">
        <div className="flex sm:justify-end items-center space-x-6 sm:space-x-12 py-2 pr-2 sm:pr-16">
          <SocialIcon Icon={TiSocialFacebook} />
          <SocialIcon Icon={TiSocialInstagram} />
          <SocialIcon Icon={SlSocialLinkedin} />
          <SocialIcon Icon={TiSocialTwitter} />
        </div>
      </div>
    </div>
  );
}

export default Header;





