import React, { PropsWithChildren } from 'react';
import { contentTitleClass } from './ContentTitle.css';

type ContentTitleProps = {};

function ContentTitle(props: PropsWithChildren<ContentTitleProps>) {
  const { children } = props;
  return (
    <div className={contentTitleClass}>
      {children}
    </div>
  );
}

export default ContentTitle;
