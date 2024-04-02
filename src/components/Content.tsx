import React, { PropsWithChildren } from 'react';
import { contentClass } from './Content.css';

type ContentProps = {
};

function Content(props: PropsWithChildren<ContentProps>) {
  const { children } = props;
  return (
    <div>
      <div className={contentClass}>
        {children}
      </div>
    </div>
  );
}

export default Content;
