import React from 'react';
import { faCode, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CompanyIcon() {
  return (
    <span className="fa-stack fa-2x">
      <FontAwesomeIcon icon={faLaptop} />
      <FontAwesomeIcon icon={faCode} />
    </span>
  );
}

export default CompanyIcon;
