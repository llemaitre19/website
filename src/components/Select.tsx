import React, { ChangeEvent, PropsWithChildren } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { optionClass, selectClass, spanClass } from './Select.css';
import FaIcon from './FaIcon';

type OptionProps = {
  value: string,
};

export function Option(props: PropsWithChildren<OptionProps>) {
  const {
    children, value,
  } = props;
  return (
    <option className={optionClass} value={value}>
      {children}
    </option>
  );
}

type SelectProps = {
  className?: string,
  faIcon: IconDefinition,
  label?: string | React.ReactNode,
  name: string,
  onChange: (event: ChangeEvent) => void,
  value: string,
};

function Select(props: PropsWithChildren<SelectProps>) {
  const {
    className, faIcon, label, name, onChange, value, children,
  } = props;
  return (
    <label className={className} htmlFor={name}>
      <span className={spanClass}>
        {faIcon && <FaIcon icon={faIcon} />}
        {label && `${faIcon && label ? ' ' : ''}${label}`}
      </span>
      <select
        className={selectClass}
        id={name}
        name={name}
        onChange={onChange}
        value={value}
      >
        {children}
      </select>
    </label>
  );
}

Select.defaultProps = {
  className: '',
  label: undefined,
};
export default Select;
