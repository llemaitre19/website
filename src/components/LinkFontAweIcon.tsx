import React, { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkIcon from './LinkIcon';

type LinkFontAweIconProps = {
  icon: any,
  name: string,
  to: string,
  verticalAlign?: string,
};

function LinkFontAweIcon(props: PropsWithChildren<LinkFontAweIconProps>) {
  const {
    icon, to, name, verticalAlign,
  } = props;
  return (
    <LinkIcon to={to} name={name}>
      <FontAwesomeIcon icon={icon} style={{ verticalAlign }} />
    </LinkIcon>
  );
}

LinkFontAweIcon.defaultProps = {
  verticalAlign: 'baseline',
};

export default LinkFontAweIcon;
