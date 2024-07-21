'use client'

import { Icon } from "@iconify/react"
import { useState } from "react";
import NavLinks from "./NavLinks";
import { ThemeToggle } from "@/components/ui/Theme/ThemeToogle";
import SocialNetwork from './socialNetwork/SocialNetwork';
import Logo from "./Logo";
import SwitchLanguage from "./SwitchLanguage";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={`flex justify-between items-center gap-5 nabvar_main_footer-padding`}>
        <Logo/>
        <SwitchLanguage/>
        <div className="flex justify-end items-center">
          <NavLinks className="text-[20px] font-medium text-primary_color dark:text-octonary_color hidden lg:flex" />
          <SocialNetwork themeLightColor='fill-primary_color' hoverThemeLightColor="hover:fill-secondary_color" />
          <button className="p-4 lg:hidden hover:text-secondary_color dark:hover:text-white" onClick={handleClick} aria-label="Afficher le menu">
            <Icon
              aria-label="Afficher le menu"
              icon="icon-park-outline:hamburger-button"
              hFlip={true}
              width={30}
            />
          </button>
          <ThemeToggle />
        </div>
      </nav>
      {showMenu && (
          <NavLinks className="flex basis-full flex-col text-white bg-secondary_color lg:hidden" />
      )}
    </>
  );
};

export default Navbar;
