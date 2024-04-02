import React from 'react';
import { Link, Trans } from 'gatsby-plugin-react-i18next';
import { activeLinkClass, linkClass, navigationClass } from './Navigation.css';
import { ThemeType } from '../types';

type NavLinkProps = {
  to: '/' | '/web' | '/cpp' | '/projects',
  i18nKey: 'home' | 'web' | 'cpp' | 'projects',
  currentTheme: ThemeType,
};

function NavLink(props: NavLinkProps) {
  const { to, i18nKey, currentTheme } = props;
  return (
    <Link
      placeholder=""
      className={linkClass}
      activeClassName={activeLinkClass}
      to={to}
      state={{ currentTheme }}
    >
      <Trans ns="navigation" i18nKey={i18nKey} />
    </Link>
  );
}

type NavigationProps = {
  currentTheme: ThemeType,
};

function Navigation(props: NavigationProps) {
  const { currentTheme } = props;
  return (
    <div>
      <div className={navigationClass}>
        <NavLink
          to="/"
          i18nKey="home"
          currentTheme={currentTheme}
        />
        <NavLink
          to="/web"
          i18nKey="web"
          currentTheme={currentTheme}
        />
        <NavLink
          to="/cpp"
          i18nKey="cpp"
          currentTheme={currentTheme}
        />
        <NavLink
          to="/projects"
          i18nKey="projects"
          currentTheme={currentTheme}
        />
      </div>
    </div>
  );
}

export default Navigation;
