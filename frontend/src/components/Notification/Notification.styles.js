import styled from 'styled-components';

export const Notification = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 2;
  background: ${({ theme, isError }) =>
    isError ? theme.color.red : theme.color.primary};
  border: 2px solid black;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 0 5px;
`;
