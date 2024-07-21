'use client'

import { useContext } from "react";
import { LanguageContext } from "@context/LanguageContext";

type DescriptionCategoryProps = {
    descriptionCategoryFr: string;
    descriptionCategoryEng: string;
}

const DescriptionCategory = ({ descriptionCategoryFr, descriptionCategoryEng }: DescriptionCategoryProps) => {
    const languageContext = useContext(LanguageContext);

    return (
        <p className="description-category-text">{languageContext?.isFrenchLanguage ? descriptionCategoryFr : descriptionCategoryEng}</p>
    );
};

export default DescriptionCategory;
