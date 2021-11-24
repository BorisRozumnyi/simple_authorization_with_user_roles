const initialState = {
  username: '',
  loading: false,
  errors: {
    fields: [],
    message: '',
  },
};

export const loginReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'UPDATE_USER_REQUEST':
      console.info(
        'UPDATE_USER_REQUEST',
        action
      );
      return {
        ...state,
        loading: true,
      };
    case 'UPDATE_USER_SUCCESS':
      console.info(
        'UPDATE_USER_SUCCESS',
        action
      );
      return {
        ...state,
        loading: false,
        username: action.payload,
        errors: initialState.errors,
      };
    case 'UPDATE_USER_ERROR':
      console.log(
        'UPDATE_USER_ERROR',
        action
      );
      return {
        ...state,
        username: '',
        errors: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
