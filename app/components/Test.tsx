import { twMerge } from "tailwind-merge";

type TestProps = {
    className: string;
    test: string;
}

const Test = ({ className,test }: TestProps) => {

    console.log(className);
    
    return (
        <div className={twMerge(test, className, "text-3xl")}>Coucou</div>
    );
};

export default Test;

