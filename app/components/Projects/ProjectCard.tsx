'use client'
import React, { forwardRef } from 'react';
import Image from "next/image";
import { Link as Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { ProjectData } from "./../../../app/page";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "@context/LanguageContext";

const ProjectCard = forwardRef<HTMLDivElement, ProjectData>(({
  title,
  description,
  preview,
  code,
  cover,
  stacks
}, ref) => {

  const languageContext = useContext(LanguageContext);

  return (
    <article
      ref={ref}
      className="flex flex-col max-w-80 projectCard-background shadow-xl rounded-2xl mt-10"
    >
      <figure className="w-full h-60 relative">
        <Image src={cover.tablette}
          alt={`image de ${title}`}
          fill={true}
          sizes="100vh"
          style={{ objectFit: "cover" }}
          loading="lazy"
          className="rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-pink-500 opacity-30 rounded-t-2xl"></div>
      </figure>

      <div className="flex flex-col p-4 gap-4">
        <h2 className="projectCard-title-text">{title}</h2>
        <p className="projectCard-description-text">{languageContext?.isFrenchLanguage ? description[0] : description[1]}</p>
        <div className="flex items-center flex-wrap">
          <p className="projectCard-stack-text pr-2">Tech stack:</p>
          {stacks.map((stack, idx: number) => (
            <p className="projectCard-stack-text px-1" key={idx}>{stack[0].toUpperCase() + stack.slice(1).toLowerCase()}</p>
          ))}
        </div>
        <div className="flex items-center">
          {preview && (
            <>
              <span className="text-quaternary_color dark:text-ten_color pr-2">
                <Linkedin size={15} />
              </span>
              <p className="projectCard-preview-text">
                <Link href={preview} className="underline">Website</Link>
              </p>
            </>
          )}
          <span className={`text-quaternary_color dark:text-ten_color ${preview && "pl-7"} pr-2`}><Github size={15} /></span>
          <p className="projectCard-preview-text">
            <Link href={`${code}`} className="underline">Code</Link>
          </p>
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = 'ProjectCard'; // Important for debugging

export default ProjectCard;
