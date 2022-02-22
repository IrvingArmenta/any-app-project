import styled from 'styled-components';

export const StyledChatWindow = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  > header {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 64px;
    padding: 0 24px;
    h3 {
      font-size: 1rem;
      font-weight: 400;
    }
    border-bottom: 1px solid ${(p) => p.theme.colors.divider};
  }
`;
