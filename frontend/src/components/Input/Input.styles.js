import styled from 'styled-components';

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  margin: 0.75em 0;
  align-items: stretch;
  width: 100%;

  /* :before, :after {
    border-top-color: #e91e63;
    box-shadow: inset 0 1px #e91e63;
  } */
`;

export const FormControl = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.4rem;
  color: #495057;
  background-color: transparent;
  background-clip: padding-box;
  border: 1px solid #d2d6da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.375rem;
  transition: 0.2s ease;
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;

  background: none;
  border: 1px solid #d2d6da;
  border-radius: 0.375rem;
  border-top-left-radius: 0.375rem !important;
  border-bottom-left-radius: 0.375rem !important;
  padding: 0.625rem 0.75rem !important;

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
    position: relative;
    top: 14px;
    -webkit-text-fill-color: green;
    /* -webkit-box-shadow: 0 0 0px 1000px
      #ccc inset; */
    transition: background-color 5000s
      ease-in-out 0s;
  }

  ${({ isFocused, isFilled }) =>
    (isFocused || isFilled) &&
    `
      border-color: #e91e63 !important;
      border-top-color: transparent !important;
      box-shadow: inset 1px 0 #e91e63,
        inset -1px 0 #e91e63,
        inset 0 -1px #e91e63;
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
  top: -0.375rem;
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
    margin-top: 0.375rem;
    box-sizing: border-box;
    display: block;
    height: 0.5rem;
    width: 0.625rem;
    border-width: 1px 0 0;
    border-color: transparent;
  }
  ${({ isFocused, isFilled }) =>
    (isFocused || isFilled) &&
    `
      width: 100%;
      height: 100%;
      font-size: 0.6875rem !important;
      color: #e91e63;
      display: flex;
      line-height: 1.25 !important;
      :before, :after {
        border-top-color: #e91e63;
        box-shadow: inset 0 1px #e91e63;
      }
    `}
`;
