'use client'
import { useContext } from "react";
import { LanguageContext } from "@context/LanguageContext";

const About = () => {
    const languageContext = useContext(LanguageContext);

    return (
        <p className="mt-2 w-200 h-400 border border-secondary_color dark:border-white max-w-96 p-4 rounded-2xl">
            {languageContext?.isFrenchLanguage ? <>Bonjour ! Passionnée par le développement web, j&apos;aime créer des sites web interactifs et résoudre des défis techniques.
                En dehors du travail, je pratique la randonnée et j&apos;adore passer du temps avec mes animaux.
                Bienvenue sur mon portfolio, et n&apos;hésitez pas à me contacter pour toute question ou collaboration !</> : "Hello! Passionate about web development, I enjoy creating interactive websites and solving technical challenges. Outside of work, I practice hiking and love spending time with my pets. Welcome to my portfolio, and feel free to contact me with any questions or for collaboration!"}
        </p>
    );
};

export default About;
