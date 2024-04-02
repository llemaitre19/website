import React, { ChangeEvent, useState } from 'react';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import { faGlobe, faCircleHalfStroke, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import {
  companyClass, companyNameClass, headerClass, headerContainerClass, jobClass, leftHeaderClass,
  nameClass, paramsClass, rightHeaderClass,
} from './Header.css';
import Select, { Option } from './Select';
import { DARK_THEME, LIGHT_THEME } from '../constants';
import FaIcon from './FaIcon';
import { iconClass } from './FaIcon.css';
import { ThemeType } from '../types';

type HeaderProps = {
  theme: ThemeType,
  onThemeChange: (e: ChangeEvent) => void,
};

function Header(props: HeaderProps) {
  const { theme, onThemeChange } = props;
  const { t } = useTranslation();
  const { language, languages, changeLanguage } = useI18next();
  const [lang, selectLang] = useState(language);

  const onLangChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLSelectElement;
    event.preventDefault();
    selectLang(value);
    changeLanguage(value, undefined, { state: { currentTheme: theme } });
  };

  return (
    <header className={headerContainerClass}>
      <div className={headerClass}>
        <div className={leftHeaderClass}>
          <h2 className={companyClass}>
            <FaIcon className={iconClass} icon={faLaptopCode} />
            <span className={companyNameClass}>
              develem
            </span>
          </h2>
          <h4 className={nameClass}>Loïc Lemaître</h4>
          <h4 className={jobClass}>{t('header:job')}</h4>
        </div>
        <div className={rightHeaderClass}>
          <div className={paramsClass}>
            <Select
              faIcon={faGlobe}
              name="language"
              onChange={onLangChange}
              value={lang}
            >
              {languages.map((lng) => (
                <Option key={lng} value={lng}>{t(`header:language.${lng}`)}</Option>
              ))}
            </Select>
            <Select
              faIcon={faCircleHalfStroke}
              name="theme"
              onChange={onThemeChange}
              value={theme}
            >
              <Option value={LIGHT_THEME}>{t('header:theme.light')}</Option>
              <Option value={DARK_THEME}>{t('header:theme.dark')}</Option>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
