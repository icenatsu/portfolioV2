'use client'
import Photo from "@public/assets/images/ice.webp";
import Image from "next/image";
import About from "@components/About";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useContext } from "react";
import { LanguageContext } from "@context/LanguageContext";

const Message = () => {
    
    const [showAbout, setShowAbout] = useState(false);
    const languageContext = useContext(LanguageContext);

    return (
        <>
            <div className="flex justify-around">
                <figure
                    className={`rounded-full border-2 border-secondary_color dark:border-white photo-transition`}
                >
                    <Image src={Photo} alt="Photo de Gaëlle" width={250} height={250} className="w-28 sm:w-40 lg:w-60" priority={true} />
                </figure>
                <div className="flex flex-col cursor-pointer">
                    <h1 className="message-text">{languageContext?.isFrenchLanguage ? "Salut !" : "Hi !"}</h1>
                    <p className="message-text">{languageContext?.isFrenchLanguage ? "Je m'appelle" : "My name is"} <span className="text-gradient">Gaëlle</span></p>
                    <p className="message-text">{languageContext?.isFrenchLanguage ? "et je suis développeuse web." : "and I'm web Developer"}</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center about-text" onMouseEnter={() => setShowAbout(true)} onMouseLeave={() => setShowAbout(false)}>
                <p className="">{languageContext?.isFrenchLanguage ? "En savoir plus" : "Learn more"}</p>
                <CSSTransition
                    in={showAbout}
                    timeout={500}
                    classNames={{
                        enter: 'about-enter',
                        enterActive: 'about-enter-active',
                        exit: 'about-exit',
                        exitActive: 'about-exit-active',
                    }}
                    unmountOnExit
                >
                    <About />
                </CSSTransition>
            </div>
        </>
    );
};

export default Message;

// ${
//     showAbout ? 'photo-enter-active' : 'photo-exit-active'
// }