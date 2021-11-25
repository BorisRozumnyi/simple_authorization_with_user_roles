import React, {
  useEffect,
  useState,
  useContext,
} from 'react';
import { Context } from '../../state';
import { Notification as StyledNotification } from './Notification.styles';

export const Notification = () => {
  const [state, dispatch] =
    useContext(Context);

  const [isShow, setIsShow] =
    useState(false);

  useEffect(() => {
    state.notification?.message &&
      setIsShow(true);
  }, [state]);

  useEffect(() => {
    state.notification?.message &&
      setTimeout(() => {
        setIsShow(false);
        dispatch({
          type: 'HIDE_NOTIFICATION',
        });
      }, 15000);
  }, [state, isShow, dispatch]);

  if (isShow) {
    return (
      <StyledNotification
        isError={
          state.notification
            ?.notificationType ===
          'error'
        }
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
          {state.notification?.message}
        </div>
      </StyledNotification>
    );
  }
  return null;
};
