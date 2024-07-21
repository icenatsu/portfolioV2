import { notFound } from 'next/navigation';
import Message from "@components/Message";
import TitleCategory from "@/app/components/Categories/TitleCategory";
import DescriptionCategory from "@/app/components/Categories/DescriptionCategory";
import StackList from "./components/stack/StackList";
import Contact from "@components/Contact";
import SectionCategory from './components/Categories/SectionCategory';
import ProjectsList from './components/Projects/ProjectsList';
import ProjectsJson from "@public/projets.json"

export type ProjectData = {
  id?: string;
  title: string;
  description: string[];
  cover: {
    tablette: string;
  };
  stacks: string[];
  code: string;
  preview?: string;
};

const Home = async () => {

  const data: ProjectData[] = ProjectsJson.projects;

  if (!data || data.length === 0) {
    notFound();
  }

  return (
    <>
      <SectionCategory id="about">
        <Message />
      </SectionCategory>
      <SectionCategory id="stack">
        <TitleCategory titleCategoryFr="Tech Stack" titleCategoryEng="Tech Stack" />
        <DescriptionCategory descriptionCategoryFr="Technologies avec lesquelles j'ai travaillé récemment" descriptionCategoryEng="Technologies I've worked with recently" />
        <StackList />
      </SectionCategory>
      <SectionCategory id="project" className='items-center'>
        <TitleCategory titleCategoryFr="Projets" titleCategoryEng="Projects" />
        <DescriptionCategory descriptionCategoryFr="Projets sur lesquels j'ai travaillé" descriptionCategoryEng="Projects I've worked on" />
        <ProjectsList projectsData={data} />
      </SectionCategory>
      <div id="contact" className="flex flex-col items-center message_sectionTech_sectionProject_contact-padding message_sectionTech_sectionProject_contact-gap">
        <Contact />
      </div>
    </>
  );
};

export default Home;
