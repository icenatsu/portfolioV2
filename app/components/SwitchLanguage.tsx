import { LanguageContext } from "@context/LanguageContext";
import { useContext } from "react";

const SwitchLanguage = () => {
  const language = useContext(LanguageContext);

  return (
    <fieldset className="flex">
      <legend aria-hidden="true" className=""></legend>
      <input
        className=""
        type="radio"
        id="french"
        name="language"
        value="FRA"
        onChange={language?.switchLanguage}
        defaultChecked={language?.isFrenchLanguage ? true : false}
      />
      <label className="text-primary_color dark:text-octonary_colorswitchLanguage px-2" htmlFor="french">
        FRA
      </label>
      <input
        className=""
        type="radio"
        id="english"
        name="language"
        value="ENG"
        onChange={language?.switchLanguage}
        defaultChecked={language?.isFrenchLanguage ? false : true}
      />
      <label className="text-primary_color dark:text-octonary_color switchLanguage px-2" htmlFor="english">
        ENG
      </label>
    </fieldset>
  );
};

export default SwitchLanguage;

