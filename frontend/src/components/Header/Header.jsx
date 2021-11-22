import React from 'react';
import { StyledHeader, List, NavItem, StyledLink } from '.';
import { frontend } from '../../urls';
import { Profile } from '../Profile';

export const Header = () => (
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
    <Profile />
  </StyledHeader>
);
