'use client'
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "@context/LanguageContext";

const Contact = () => {
    const languageContext = useContext(LanguageContext);
    
    return (
        <>
            <p className="contact text-center">
                {languageContext?.isFrenchLanguage ? <>Pour toutes questions, n&apos;hésitez pas à m&apos;envoyer un mail</> : "For any questions, feel free to send me an email."} 
            </p>
            <address className="contact text-gradient not-italic"><Link href="mailto:ice@xicex.fr">ice@xicex.fr</Link></address>
        </>

    );
};

export default Contact;
