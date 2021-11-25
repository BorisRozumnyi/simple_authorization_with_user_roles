const initialState = {
  message: '',
  notificationType: 'error', // error | success | warning | info
};

export const notificationReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      console.info(
        'SHOW_NOTIFICATION',
        action
      );
      return {
        ...state,
        message: action.payload,
        notificationType:
          action.notificationType ||
          initialState.notificationType,
      };
    case 'HIDE_NOTIFICATION':
      console.info(
        'HIDE_NOTIFICATION',
        action
      );
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
