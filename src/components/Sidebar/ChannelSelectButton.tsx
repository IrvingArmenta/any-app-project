import styled from 'styled-components';
import { linearGradient } from 'polished';

const ChannelSelectButton = styled.button<{ active: boolean }>`
  width: 100%;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 10px 1rem;
  border: 0;
  cursor: pointer;
  text-align: left;
  height: 60px;
  color: ${(p) => p.theme.colors.text};
  background-color: ${(p) => p.theme.colors.surface};
  ${(p) =>
    p.active
      ? linearGradient({
          colorStops: ['#f7f9fb', '#ffffff'],
          toDirection: 'to top right',
          fallback: '#ffffff'
        })
      : ''};
  &:focus {
    outline: 0;
  }
  &:hover,
  &:focus-visible {
    ${(p) =>
      !p.active
        ? linearGradient({
            colorStops: ['#e9eff5', '#ffffff'],
            toDirection: 'to top right',
            fallback: '#ffffff'
          })
        : ''}
  }
`;

export default ChannelSelectButton;
