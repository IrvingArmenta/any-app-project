import React, { FC } from 'react';
import { StyledButton } from './styles';
import Icon from '../Icon';
import { ButtonPropsType } from './types';

const Button: FC<ButtonPropsType> = (props) => {
  const { children, variant, iconName, ...rest } = props;
  return (
    <StyledButton {...rest} variant={variant} type="button">
      {children}
      {iconName ? (
        <span className="icon">
          <Icon iconName={iconName} />
        </span>
      ) : null}
    </StyledButton>
  );
};

export default Button;
