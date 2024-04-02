// From https://stackoverflow.com/questions/56334381/why-my-font-awesome-icons-are-being-displayed-big-at-first-and-then-updated-to-t
// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

import React, { ChangeEvent, PropsWithChildren, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import '../styles/global.css';
import { darkTheme, lightTheme } from '../styles/theme.css';
import { DARK_THEME } from '../constants';
import Content from './Content';
import { mainClass } from './Layout.css';
import { ThemeType } from '../types';
import ContentTitle from './ContentTitle';
import ContentIntro from './ContentIntro';

type LayoutProps = {
  contentTitle: string,
  contentIntro?: string | null,
  currentTheme: ThemeType,
};

function Layout(props: PropsWithChildren<LayoutProps>) {
  const {
    children, contentTitle, contentIntro, currentTheme,
  } = props;
  const [theme, setTheme] = useState(currentTheme || DARK_THEME);
  const onThemeChange = (event: ChangeEvent) => {
    const { value } = event.target as HTMLSelectElement;
    setTheme(value as ThemeType);
  };
  return (
    <div id="main-container" className={theme === DARK_THEME ? darkTheme : lightTheme}>
      <Header theme={theme} onThemeChange={onThemeChange} />
      <main className={mainClass}>
        <Navigation currentTheme={theme} />
        <Content>
          <ContentTitle>{contentTitle}</ContentTitle>
          {contentIntro && <ContentIntro>{contentIntro}</ContentIntro>}
          {children}
        </Content>
      </main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  contentIntro: undefined,
};

export default Layout;
