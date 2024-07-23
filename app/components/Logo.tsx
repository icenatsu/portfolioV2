import Image from "next/image";
import Vague from "@public/assets/images/logo.svg"

const Logo = () => {
    return (
        <figure>
            <Image src={Vague} alt="logo représentant une vague" width={60} height={60} className='hidden sm:block w-10 sm:w-10 md:w-12 lg:w-14' />
        </figure>
    );
};

export default Logo;
