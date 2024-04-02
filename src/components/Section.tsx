import React, { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import {
  containerClass, iconClass, sectionChildrenClass, sectionTitleClass,
} from './Section.css';

type SectionProps = {
  className?: string,
  id?: string,
  title: string | React.ReactNode,
};

function Section(props: PropsWithChildren<SectionProps>) {
  const {
    children, className, id, title,
  } = props;
  const bullet = <FontAwesomeIcon className={iconClass} icon={faChevronCircleRight} />;
  return (
    <div className={`${containerClass} ${className}`}>
      <div id={id} className={sectionTitleClass}>
        {id ? (
          <a href={`#${id}`} aria-label={id}>
            {bullet}
          </a>
        ) : bullet}
        <span>
          {title}
        </span>
      </div>
      <div className={sectionChildrenClass}>
        {children}
      </div>
    </div>
  );
}

Section.defaultProps = {
  className: '',
  id: null,
};

export default Section;
