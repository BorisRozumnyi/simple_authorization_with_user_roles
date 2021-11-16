import React from 'react';
import { Profile as StyledProfile } from './Profile.styles';

export const Profile = ({ username }) => (
  <StyledProfile>{username}</StyledProfile>
);
