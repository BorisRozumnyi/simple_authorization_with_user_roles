export const Reducer = (
  state,
  action
) => {
  switch (action.type) {
    // case 'UPDATE_USER_REQUEST':
    //   console.info(
    //     'UPDATE_USER_REQUEST',
    //     action
    //   );
    //   return {
    //     ...state,
    //     loginLoading: true,
    //   };
    // case 'UPDATE_USER_SUCCESS':
    //   console.info(
    //     'UPDATE_USER_SUCCESS',
    //     action
    //   );
    //   return {
    //     ...state,
    //     loginLoading: false,
    //     username: action.payload,
    //     loginError: '',
    //   };
    // case 'UPDATE_USER_ERROR':
    //   console.log(
    //     'UPDATE_USER_ERROR',
    //     action
    //   );
    //   return {
    //     ...state,
    //     username: '',
    //     loginError: action.payload,
    //     loginLoading: false,
    //   };

    case 'GET_USERS_LIST_START':
      console.info(
        'GET_USERS_LIST_START',
        action
      );
      return {
        ...state,
        loading: true,
      };
    case 'GET_USERS_LIST_FINISH':
      console.info(
        'GET_USERS_LIST_FINISH',
        action
      );
      return {
        ...state,
        usersList: action.payload,
        loading: false,
      };
    case 'GET_USERS_LIST_ERROR':
      console.info(
        'GET_USERS_LIST_ERROR',
        action
      );
      return {
        ...state,
        usersListError: action.payload,
        loading: false,
      };
    case 'CLEAR_USERS_LIST_ERROR':
      console.info(
        'CLEAR_USERS_LIST_ERROR',
        action
      );
      return {
        ...state,
        usersListError: '',
      };

    case 'POST_REGISTRATION_START':
      console.info(
        'POST_REGISTRATION_START',
        action
      );
      return {
        ...state,
        registrationLoading: true,
      };
    case 'POST_REGISTRATION_FINISH':
      console.info(
        'POST_REGISTRATION_FINISH',
        action
      );
      return {
        ...state,
        registrationLoading: false,
      };
    case 'POST_REGISTRATION_ERROR':
      console.info(
        'POST_REGISTRATION_ERROR',
        action
      );
      return {
        ...state,
        registrationLoading: false,
        registrationErrors:
          action.payload,
      };

    case 'SHOW_NOTIFICATION':
      console.info(
        'SHOW_NOTIFICATION',
        action
      );
      return {
        ...state,
        notificationMessage:
          action.payload,
      };
    default:
      return state;
  }
};
