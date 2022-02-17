import styled, { DefaultTheme } from 'styled-components';
import { darken, lighten } from 'polished';
import { ButtonPropsType } from './types';

type ButtonVariantType = NonNullable<ButtonPropsType['variant']>;

const buttonColorMapping = (
  theme: DefaultTheme
): Record<ButtonVariantType, string> => ({
  primary: theme.colors.neutral.light,
  secondary: theme.colors.neutral.dark
});

export const StyledButton = styled.button<{
  variant: ButtonPropsType['variant'];
}>`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  user-select: none;
  cursor: pointer;

  // color
  color: ${(p) => buttonColorMapping(p.theme)[p.variant || 'primary']};
  background-color: ${(p) => p.theme.colors[p.variant || 'primary']};
  border-color: ${(p) => p.theme.colors[p.variant || 'primary']};

  // states
  &:focus {
    outline: 0;
  }

  &:where(:hover, :focus-visible) {
    background-color: ${(p) =>
      darken(0.03, p.theme.colors[p.variant || 'primary'])};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(p) =>
      lighten(0.15, p.theme.colors[p.variant || 'primary'])};
  }

  // icon
  .icon {
    display: inline-block;
    margin-left: 4px;
  }
`;
