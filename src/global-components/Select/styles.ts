import styled from 'styled-components';

export const StyledSelectWrap = styled.div`
  select {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    color: ${(p) => p.theme.colors.textSecondary};
    background-color: ${(p) => p.theme.colors.background};
    background-clip: padding-box;
    border: 1px solid #ced4da;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;

    &:focus {
      outline: 0;
    }

    &:focus-visible {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
      color: ${(p) => p.theme.colors.text};
    }
    &:hover {
      color: ${(p) => p.theme.colors.text};
    }
  }
  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`;
