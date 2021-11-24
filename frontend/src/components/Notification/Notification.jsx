import React, {
  useEffect,
  useState,
  useContext,
} from 'react';
import { Context } from '../../App';
import { Notification as StyledNotification } from './Notification.styles';

export const Notification = ({
  isError = true,
}) => {
  const [state] =
    useContext(Context);

  const [isShow, setIsShow] =
    useState(false);

  useEffect(() => {
    state.loginError && setIsShow(true);
    state.usersListError && setIsShow(true);
    state.registrationErrors && setIsShow(true);
  }, [state]);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 15000);
  }, [isShow]);

  if (isShow) {
    return (
      <StyledNotification
        isError={isError}
      >
        <button
          onClick={() =>
            setIsShow(false)
          }
        >
          X
        </button>
        <hr className="horizontal dark m-0" />
        <div className="toast-body">
          {state.loginError}
          {state.usersListError}
          {state.registrationErrors.message}
        </div>
      </StyledNotification>
    );
  }
  return null;
};
