import styled from 'styled-components';

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: ${({ theme }) => theme.spacing.sm} 0;
  align-items: stretch;
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const FormControl = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4rem;
  color: ${({ theme }) =>
    theme.color.secondary};
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid #d2d6da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: ${({ theme }) =>
    theme.spacing.xxxs};
  transition: 0.2s ease;
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;

  background: none;
  border: 1px solid #d2d6da;
  border-radius: ${({ theme }) =>
    theme.spacing.xxxs};
  border-top-left-radius: ${({
    theme,
  }) => theme.spacing.xxxs} !important;
  border-bottom-left-radius: ${({
    theme,
  }) => theme.spacing.xxxs} !important;
  padding: ${({ theme }) =>
    `${theme.spacing.xxs} ${theme.spacing.xs} !important;`};

  :focus {
    color: #495057;
    background-color: transparent;
    border-color: transparent;
    outline: 0;
    box-shadow: none;
  }

  /* Change Autocomplete styles in Chrome*/
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    border: 1px solid transparent;
    -webkit-text-fill-color: green;
    /* -webkit-box-shadow: 0 0 0px 1000px
      #ccc inset; */
    transition: background-color 5000s
      ease-in-out 0s;
  }

  ${({ isFocused, isFilled, theme }) =>
    (isFocused || isFilled) &&
    `
      border-color: ${theme.color.red} !important;
      border-top-color: transparent !important;
      box-shadow: inset 1px 0 ${theme.color.red},
        inset -1px 0 ${theme.color.red},
        inset 0 -1px ${theme.color.red};
  `}
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #7b809a;
  margin-left: 0.25rem;
  position: absolute;
  top: 0.6125rem;
  margin-left: 0;
  transition: 0.2s ease all;

  display: flex;
  line-height: 3.925 !important;
  top: -${({ theme }) => theme.spacing.xxxs};
  margin-bottom: 0;
  text-transform: capitalize;
  &:before {
    content: '';
    margin-right: 4px;
    border-left: solid 1px transparent;
    border-radius: 4px 0;
  }
  &:after {
    content: '';
    flex-grow: 1;
    margin-left: 4px;
    border-right: solid 1px transparent;
    border-radius: 0 5px;
  }
  &:before,
  &:after {
    content: '';
    border-top: solid 1px;
    border-top-color: #d2d6da;
    pointer-events: none;
    margin-top: ${({ theme }) =>
      theme.spacing.xxxs};
    box-sizing: border-box;
    display: block;
    height: 0.5rem;
    width: ${({ theme }) =>
      theme.spacing.xxs};
    border-width: 1px 0 0;
    border-color: transparent;
  }
  ${({ isFocused, isFilled, theme }) =>
    (isFocused || isFilled) &&
    `
      width: 100%;
      height: 100%;
      font-size: ${theme.spacing.xxs} !important;
      color: ${theme.color.red};
      display: flex;
      line-height: 1.25 !important;
      :before, :after {
        border-top-color: ${theme.color.red};
        box-shadow: inset 0 1px ${theme.color.red};
      }
    `}
`;

export const ErrorForField = styled.p`
  color: ${({ theme }) =>
    theme.color.red};
  position: absolute;
  bottom: 0;
  padding: 0 12px;
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: 14px;
`;
