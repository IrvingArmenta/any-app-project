import React, { FC } from 'react';
import { StyledTextAreaWrap } from './styles';
import { TextAreaPropsType } from './types';

const TextArea: FC<TextAreaPropsType> = (props) => {
  const { onChange, value } = props;

  return (
    <StyledTextAreaWrap>
      <textarea
        value={value}
        onChange={(e) => (onChange ? onChange(e.currentTarget.value, e) : null)}
      />
    </StyledTextAreaWrap>
  );
};

export default TextArea;
