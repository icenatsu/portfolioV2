'use client'
import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { animationSlideScrollToBottom, animationSlideScrollToRight } from '@animation/gsapAnimation';
import { useEffect } from 'react';

type SectionCategoryProps = {
    id: string;
    className?: string;
}

const SectionCategory = ({ id, children, className }: PropsWithChildren<SectionCategoryProps>) => {


    useEffect(() => {
        animationSlideScrollToBottom(`${id}`, 0, 1, 0, 50, 25);
    }, [id]);

    useEffect(() => {
        animationSlideScrollToBottom("contact", 0, 1, 0, 50, 25);
    }, []);

    return (
        <section id={id} className={twMerge(className, "flex flex-col justify-center message_sectionTech_sectionProject_contact-padding message_sectionTech_sectionProject_contact-gap")}>
            {children}
        </section>
    );
};

export default SectionCategory;
