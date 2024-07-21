import Link from 'next/link';
import { Github, Linkedin, X } from './IconsNetwork';

type SocialNetworkProps = {
    themeLightColor: string;
    hoverThemeLightColor: string;
}

const SocialNetwork = ({ themeLightColor, hoverThemeLightColor }: SocialNetworkProps) => {
    return (
        <figure className='flex'>
            <Link href="https://github.com/icenatsu" legacyBehavior>
                <a aria-label="Github">
                    <Github className={`${themeLightColor} ${hoverThemeLightColor} dark:fill-octonary_color dark:hover:fill-quinary_color ml-2 w-5 lg:w-8`} />
                </a>
            </Link>
            <Link href="https://x.com/icemars7" legacyBehavior>
                <a aria-label="Twitter">
                    <X className={`${themeLightColor} ${hoverThemeLightColor} dark:fill-octonary_color dark:hover:fill-quinary_color ml-2 w-5 lg:w-8`} />
                </a>
            </Link>
            <Link href="https://www.linkedin.com/in/icenatsu/" legacyBehavior>
                <a aria-label="Linkedin">
                    <Linkedin className={`${themeLightColor} ${hoverThemeLightColor} dark:fill-octonary_color dark:hover:fill-quinary_color ml-2 w-5 lg:w-8`} />
                </a>
            </Link>
        </figure>
    );
};

export default SocialNetwork;
