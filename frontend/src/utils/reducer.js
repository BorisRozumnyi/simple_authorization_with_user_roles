export const Reducer = (
  state,
  action
) => {
  switch (action.type) {
    case 'UPDATE_USER_REQUEST':
      console.info('UPDATE_USER_REQUEST');
      return {
        ...state,
        loginLoading: true,
      };
    case 'UPDATE_USER_SUCCESS':
      console.info('UPDATE_USER_SUCCESS');
      return {
        ...state,
        loginLoading: false,
        username: action.payload,
        loginError: '',
      };
    case 'UPDATE_USER_ERROR':
      console.log('UPDATE_USER_ERROR', action);
      return {
        ...state,
        username: '',
        loginError: action.payload,
        loginLoading: false,
      };


    case 'GET_USERS_LIST_START':
      console.info('GET_USERS_LIST_START');
      return {
        ...state,
        loading: true,
      };
    case 'GET_USERS_LIST_FINISH':
      console.info('GET_USERS_LIST_FINISH');
      return {
        ...state,
        usersList: action.payload,
        loading: false,
      };
    case 'GET_USERS_LIST_ERROR':
      console.info('GET_USERS_LIST_ERROR');
      return {
        ...state,
        usersListError: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
