import styled from 'styled-components';

export const StyledTextAreaWrap = styled.div`
  textarea {
    display: block;
    width: 100%;
    min-height: 84px;
    max-height: 300px;
    resize: vertical;
    padding: 0.375rem 0.75rem;
    color: ${(p) => p.theme.colors.textSecondary};
    background-color: ${(p) => p.theme.colors.background};
    background-clip: padding-box;
    border: 1px solid #ced4da;
    font-family: inherit;
    color: inherit;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:focus {
      outline: 0;
    }

    &:focus-visible {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`;
