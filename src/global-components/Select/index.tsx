import React, { FC } from 'react';
import { StyledSelectWrap } from './styles';
import { SelectPropsType } from './types';

const Select: FC<SelectPropsType> = ({ placeholder = 'Select', ...props }) => {
  const { options, onChange, label, id } = props;
  return (
    <StyledSelectWrap>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select
        id={id}
        placeholder={placeholder}
        onChange={(e) => (onChange ? onChange(e.currentTarget.value, e) : null)}
      >
        {options.map((option) => {
          return (
            <option key={option.id} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </StyledSelectWrap>
  );
};

export default Select;
