import IconStack from "./IconStack";

const StackList = () => {
    return (
        <div className="flex flex-wrap justify-center sm:grid grid-cols-6 grid-rows-2 gap-3 lg:gap-6 lg:py-16 xl:py-24 ">
            <IconStack stackName="HTML" iconName="devicon:html5" />
            <IconStack stackName="CSS" iconName="devicon:css3" />
            <IconStack stackName="Tailwind" iconName="logos:tailwindcss-icon" />
            <IconStack stackName="SASS" iconName="logos:sass" />
            <IconStack stackName="Javascript" iconName="skill-icons:javascript" />
            <IconStack stackName="React" iconName="logos:react" />
            <IconStack stackName="NextJS" iconName="file-icons:nextjs" />
            <IconStack stackName="Typescript" iconName="logos:typescript-icon" />
            <IconStack stackName="NodeJS" iconName="logos:nodejs-icon" />
            <IconStack stackName="SEO" iconName="icon-park-solid:seo" />
            <IconStack stackName="MySql" iconName="logos:mysql" />
            <IconStack stackName="MongoDB" iconName="devicon:mongodb" />
        </div>
    );
};

export default StackList;
