import React from 'react';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import reactLogo from '../images/react.svg';
import djangoLogo from '../images/django.svg';
import wxwidgetsLogo from '../images/wxwidgets.svg';
import melpaLogo from '../images/melpa.svg';
import gatsbyLogo from '../images/gatsby.svg';
import muiLogo from '../images/mui.svg';
import reduxLogo from '../images/redux.svg';
import emacsLogo from '../images/emacs.svg';
import postgresqlLogo from '../images/postgresql.svg';

import LinkImgIcon from './LinkImgIcon';
import LinkFontAweIcon from './LinkFontAweIcon';

export function ReactLinkIcon() {
  return (
    <LinkImgIcon
      to="https://react.dev/"
      name="React"
      src={reactLogo}
      verticalAlign="-1px"
    />
  );
}

export function DjangoLinkIcon() {
  return (
    <LinkImgIcon
      to="https://www.djangoproject.com/"
      name="Django"
      src={djangoLogo}
      verticalAlign="-3px"
    />
  );
}

export function WxWidgetsLinkIcon() {
  return (
    <LinkImgIcon
      to="https://www.wxwidgets.org/"
      name="wxWidgets"
      src={wxwidgetsLogo}
      imgHeight={18}
      verticalAlign="-3px"
    />
  );
}

type GitlabLinkIconProps = {
  to: string,
  name: string,
};

function GitlabLinkIcon(props: GitlabLinkIconProps) {
  const { to, name } = props;
  return (
    <LinkFontAweIcon
      to={to}
      name={name}
      icon={faSquareGithub}
      verticalAlign="-1px"
    />
  );
}

export function JtsxLinkIcon() {
  return (
    <GitlabLinkIcon
      to="https://github.com/llemaitre19/jtsx"
      name="Github"
    />
  );
}

export function WebsiteLinkIcon() {
  return (
    <GitlabLinkIcon
      to="https://github.com/llemaitre19/website"
      name="Github"
    />
  );
}

export function MelpaLinkIcon() {
  return (
    <LinkImgIcon
      to="https://melpa.org/#/jtsx"
      name="Melpa"
      src={melpaLogo}
      verticalAlign="-1px"
    />
  );
}

export function GatsbyLinkIcon() {
  return (
    <LinkImgIcon
      to="https://www.gatsbyjs.com/"
      name="Gatsby"
      src={gatsbyLogo}
      verticalAlign="-1px"
    />
  );
}

export function MuiLinkIcon() {
  return (
    <LinkImgIcon
      to="https://mui.com/"
      name="Material UI"
      src={muiLogo}
      verticalAlign="-2px"
    />
  );
}

export function ReduxLinkIcon() {
  return (
    <LinkImgIcon
      to="https://redux.js.org/"
      name="Redux"
      src={reduxLogo}
      imgHeight={18}
      verticalAlign="-3px"
    />
  );
}

export function PostgreSQLLinkIcon() {
  return (
    <LinkImgIcon
      to="https://www.postgresql.org/"
      name="PostgreSQL"
      src={postgresqlLogo}
      verticalAlign="-2px"
    />
  );
}

export function EmacsLinkIcon() {
  return (
    <LinkImgIcon
      to="https://www.gnu.org/software/emacs/"
      name="Emacs"
      src={emacsLogo}
      verticalAlign="-2px"
    />
  );
}
