import React, { PropsWithChildren } from 'react';
import { contentIntroClass } from './ContentIntro.css';

type ContentIntroProps = {};

function ContentIntro(props: PropsWithChildren<ContentIntroProps>) {
  const { children } = props;
  return (
    <div className={contentIntroClass}>
      {children}
    </div>
  );
}

export default ContentIntro;
