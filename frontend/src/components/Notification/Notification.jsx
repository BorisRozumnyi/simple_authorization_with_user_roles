import React, {
  useEffect,
  useState,
} from 'react';
import { Notification as StyledNotification } from './Notification.styles';

export const Notification = ({
  isError = true,
  msg = 'error message',
}) => {
  const [isShow, setIsShow] =
    useState(true);

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
          {msg}
        </div>
      </StyledNotification>
    );
  }
  return null;
};
