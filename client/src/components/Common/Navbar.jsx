"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import Main from "@/Assets/Logo/Main.png";
//A7E6FF
function NavList() {
  return (
    <ul className="my-2 flex w-full flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-20">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <Link href="/aboutus" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
          About-Us
        </Link>
      </Typography>
      <Menu allowHover>
        <MenuHandler>
          <Typography as="li" variant="medium" color="black" className="p-1 font-medium cursor-pointer">
            Magazines
          </Typography>
        </MenuHandler>
        <MenuList className="p-1">
          <MenuItem>
            <Link href="/newsletter" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Latest magazine
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/News-Events" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              All magazines
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu allowHover>
        <MenuHandler>
          <Typography as="li" variant="medium" color="black" className="p-1 font-medium cursor-pointer">
            Events&News
          </Typography>
        </MenuHandler>
        <MenuList className="p-1">
          <MenuItem>
            <Link href="/facultyDesc" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Trending News
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/technical-staff" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Past Events
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <Link href="/contactus" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
          Expert Diaries 
        </Link>
      </Typography>
      <Menu allowHover>
        <MenuHandler>
          <Typography as="li" variant="medium" color="black" className="p-1 font-medium cursor-pointer">
            explore
          </Typography>
        </MenuHandler>
        <MenuList className="p-1">
          <MenuItem>
            <Link href="/students" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Awards
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/alumnis" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Podcast
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/alumnis" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Interview
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <Link href="/contactus" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
          Contact Us
        </Link>
      </Typography>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="bg-[#ffffff] w-full py-2">
      <div className="flex items-center justify-between w-full px-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={Main} 
            alt="Logo"
            width={60} 
            height={60} 
          />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-12 w-12 text-black  focus:bg-black active:bg-black lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
