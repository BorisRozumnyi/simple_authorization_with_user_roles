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
  const { response } =
    useContext(Context);

  const [isShow, setIsShow] =
    useState(false);

  useEffect(() => {
    response.message && setIsShow(true);
  }, [response]);

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
          {response.message}
        </div>
      </StyledNotification>
    );
  }
  return null;
};
