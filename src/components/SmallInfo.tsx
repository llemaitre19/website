import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PropsWithChildren } from 'react';

type SmallInfoProps = {};

function SmallInfo(props: PropsWithChildren<SmallInfoProps>) {
  const { children } = props;
  return (
    <i>
      <small>
        <FontAwesomeIcon icon={faHandPointRight} />
        {' '}
        {children}
      </small>
    </i>
  );
}

export default SmallInfo;
