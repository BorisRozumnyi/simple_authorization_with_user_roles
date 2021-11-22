import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  background: linear-gradient(
    #fbfbfb -20%,
    #313a39 15%,
    black,
    #313a39 95%,
    #fbfbfb 120%
  );
`;

export const StyledLink = styled(Link)`
  padding: 1.375rem;
  height: 100%;
  display: block;

  color: ${({ theme }) =>
    theme.color.white};
  text-decoration: none;
  text-transform: capitalize;
  &:after {
    content: '';
    display: flex;
    width: 0%;
    height: 3px;
    background: white;
    transition: width 0.3s;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  :hover {
    ${StyledLink} {
      :after {
        width: 100%;
      }
    }
  }
`;
