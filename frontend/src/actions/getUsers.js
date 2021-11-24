import { api } from '../urls';

export const getUsers = (dispatch) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type':
        'application/json',
      'Access-Control-Allow-Origin':
        '*',
      Authorization: `Bearer ${localStorage.getItem(
        'token'
      )}`,
    },
  };

  dispatch({
    type: 'GET_USER_LIST_REQUEST',
  });

  fetch(api.users, config)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.errors) {
          dispatch({
            type: 'GET_USER_LIST_ERROR',
            payload: result.errors,
          });
          throw result.errors;
        }

        if (result.message) {
          dispatch({
            type: 'GET_USER_LIST_ERROR',
            payload: result.message,
          });
          throw result.message;
        }
        console.log(result);
        if (result.length) {
          dispatch({
            type: 'GET_USER_LIST_SUCCESS',
            payload: result,
          });
        }

        // setIsLoaded(true);
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        // setIsLoaded(true);
        // setError(error);
      }
    );
};
