import styled from 'styled-components';

export const StyledChatWindow = styled.section`
  display: flex;
  flex-direction: column;
  > header {
    display: flex;
    align-items: center;
    height: 64px;
    padding: 0 24px;
    h3 {
      font-size: 1rem;
      font-weight: 400;
    }
  }
`;
