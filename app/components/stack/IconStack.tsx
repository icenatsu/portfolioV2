import { Icon } from "@iconify/react"

type IconStackProps = {
    iconName: string;
    stackName: string;
}

const IconStack = ({ iconName, stackName }: IconStackProps) => {
    return (
        <div className="flex flex-col items-center gap-0 lg:gap-2">
            <Icon icon={iconName} width="105" height="105" className="w-10 md:w-16 lg:w-24 mt-2 lg:mt-4 " color="#459659" />
            <p className="text-secondary_color dark:text-octonary_color stackNames">{stackName}</p>
        </div>
    );
};

export default IconStack;
