import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faSlash } from '@fortawesome/free-solid-svg-icons';
import { faIconClass } from './FaIcon.css';

type FaIconProps = {
  className?: string,
  icon: IconProp,
  banned?: boolean,
};

function FaIcon(props: FaIconProps) {
  const { className, icon, banned } = props;
  const mainIcon = (
    <FontAwesomeIcon className={`${faIconClass} ${className}`} icon={icon} transform="grow-2" />
  );
  return banned ? (
    <span className={`fa-layers fa-fw ${className}`}>
      <FontAwesomeIcon className={`${faIconClass} ${className}`} icon={icon} transform="grow-2" />
      <FontAwesomeIcon icon={faSlash} />
    </span>
  ) : mainIcon;
}

FaIcon.defaultProps = {
  className: '',
  banned: false,
};

export default FaIcon;
