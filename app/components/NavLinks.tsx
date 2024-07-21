'use client'
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import { LanguageContext } from "@context/LanguageContext";

type NavLinksProps = {
    className: string;
}

const NavLinks = ({ className }: NavLinksProps) => {
    const languageContext = useContext(LanguageContext);

    return (
        <ul className={twMerge(className, "navbar-text")}>
            <li className="hover:bg-cyan-700 px-2 py-1 lg:p-6 lg:hover:underline lg:hover:bg-transparent dark:lg:hover:bg-transparent">
                <Link className="block w-full" href="/#home">{languageContext?.isFrenchLanguage ? "Accueil" : "Home"}</Link>
            </li>
            <li className="hover:bg-cyan-700 px-2 py-1 lg:p-6 lg:hover:underline lg:hover:bg-transparent dark:lg:hover:bg-transparent">
                <Link className="block w-full" href="/#about">{languageContext?.isFrenchLanguage ? <>&Agrave; propos</> : "About"}</Link>
            </li>
            <li className="hover:bg-cyan-700 px-2 py-1 lg:p-6 lg:hover:underline lg:hover:bg-transparent dark:lg:hover:bg-transparent">
                <Link className="block w-full"href="/#stack">Tech stack</Link></li>
            <li className="hover:bg-cyan-700 px-2 py-1 lg:p-6 lg:hover:underline lg:hover:bg-transparent dark:lg:hover:bg-transparent">
                <Link className="block w-full" href="/#project">{languageContext?.isFrenchLanguage ? "Projets" : "Projects"}</Link></li>
            <li className="hover:bg-cyan-700 px-2 py-1 lg:p-6 lg:hover:underline lg:hover:bg-transparent dark:lg:hover:bg-transparent">
                <Link className="block w-full" href="/#contact">Contact</Link>
            </li>
        </ul>
    );
};

export default NavLinks;
