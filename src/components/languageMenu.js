import React from 'react';
import i18next from 'i18next';
import Select from 'react-select';
import { languages } from '../i18n';

const LanguageMenu = () => {
  const { t } = i18next;

  const languageOptions = languages.map((lang) => ({
    value: lang,
    label: t(lang),
  }));

  return (
    <div>
      <Select
        options={languageOptions}
        value={languageOptions.find((option) => option.value === i18next.language)}
        onChange={(selectedOption) => {
          const selectedLanguage = selectedOption.value;
          // Dil değiştirme işlemini burada gerçekleştirin (örneğin, i18next ile)
        }}
      />
    </div>
  );
};

export default LanguageMenu;
