import { HTMLAttributes } from 'react';
import { IconNames } from '../Icon/types';

export type ButtonPropsType = {
  variant?: 'primary' | 'secondary';
  iconName?: IconNames;
} & Omit<HTMLAttributes<HTMLButtonElement>, 'type'>;
