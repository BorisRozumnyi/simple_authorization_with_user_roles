import React from 'react';
import { StyledHeader, List, NavItem, StyledLink } from '.';
import { frontend } from '../../urls';

export const Header = ({ prop }) => (
  <StyledHeader>
    <List>
      <NavItem>
        <StyledLink to={frontend.home}>
          Home
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to={frontend.login}>
          login
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to={frontend.users}>
          users
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink
          to={frontend.registration}
        >
          registration
        </StyledLink>
      </NavItem>
    </List>
  </StyledHeader>
);
