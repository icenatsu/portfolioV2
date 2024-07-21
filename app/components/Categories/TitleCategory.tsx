'use client'

import { useContext } from "react";
import { LanguageContext } from "@context/LanguageContext";

type SectionCategoryProps = {
    titleCategoryFr: string;
    titleCategoryEng: string;
}

const TitleCategory = ({ titleCategoryFr, titleCategoryEng }: SectionCategoryProps) => {

    const languageContext = useContext(LanguageContext);

    return (
        <h2 className="title-category-text">{languageContext?.isFrenchLanguage ? titleCategoryFr : titleCategoryEng}</h2>
    );
};

export default TitleCategory;
