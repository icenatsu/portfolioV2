import Image from "next/image";
import Vague from "@public/assets/images/logo.svg"

const Logo = () => {
    return (
        <figure>
            <Image src={Vague} alt="logo représentant une vague" width={60} height={60} className='w-10 sm:w-16 lg:w-16' />
        </figure>
    );
};

export default Logo;
