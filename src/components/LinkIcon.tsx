import React, { PropsWithChildren } from 'react';

type LinkIconProps = {
  to: string,
  name: string,
  iconFirst?: boolean,
};

function LinkIcon(props: PropsWithChildren<LinkIconProps>) {
  const {
    to, name, children, iconFirst,
  } = props;
  const namePart = <span>{name}</span>;
  const iconPart = <span>{children}</span>;
  return (
    <a href={to} aria-label={name}>
      {iconFirst ? iconPart : namePart}
      {' '}
      {iconFirst ? namePart : iconPart}
    </a>
  );
}

LinkIcon.defaultProps = {
  iconFirst: false,
};

export default LinkIcon;
