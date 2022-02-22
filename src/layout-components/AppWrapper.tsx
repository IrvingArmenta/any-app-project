import React, { FC } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const AppWrapper: FC = (props) => {
  const { children } = props;

  return <StyledDiv>{children}</StyledDiv>;
};

export default AppWrapper;
