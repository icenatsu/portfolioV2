import SocialNetwork from "./socialNetwork/SocialNetwork";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="flex flex-col nabvar_main_footer-padding">
            <div className="flex justify-between items-center">
                <Logo/>
                <div className="flex items-center">
                    <address className="coordinate mr-10">06.10.62.36.12</address>
                    <address className="coordinate mr-10 hover:underline"><Link href="mailto:ice@xicex.fr">ice@xicex.fr</Link></address>
                    <SocialNetwork themeLightColor='fill-secondary_color' hoverThemeLightColor="hover:fill-primary_color" />
                </div>
            </div>
            <hr className="mt-4" />
            <div className="flex items-center justify-end lg:justify-between">
                <NavLinks className="text-[18px] font-normal text-secondary_color dark:text-primary_color hidden lg:flex" />
                <p className="design-text">Designed and built by <span className="text-gradient">Pavan MG</span> and <span className="text-gradient">ice</span></p>
            </div>
        </footer>
    );
};

export default Footer;
