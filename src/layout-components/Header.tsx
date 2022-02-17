import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  flex-shrink: 0;
  margin: 16px 0;
  h1 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>1 day chat app</h1>
      <p>All messages will be deleted at every 00:00 UTC</p>
    </StyledHeader>
  );
};

export default Header;
