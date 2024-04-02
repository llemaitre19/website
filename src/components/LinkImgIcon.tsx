import React, { PropsWithChildren } from 'react';
import LinkIcon from './LinkIcon';

type LinkImgIconProps = {
  imgHeight?: number,
  name: string,
  src: string,
  to: string,
  verticalAlign?: string,
};

function LinkImgIcon(props: PropsWithChildren<LinkImgIconProps>) {
  const {
    imgHeight, src, to, name, verticalAlign,
  } = props;
  return (
    <LinkIcon to={to} name={name}>
      <img
        src={src}
        height={imgHeight}
        alt={`${name} logo`}
        style={{ verticalAlign }}
      />
    </LinkIcon>
  );
}

LinkImgIcon.defaultProps = {
  imgHeight: '15',
  verticalAlign: 'baseline',
};

export default LinkImgIcon;
