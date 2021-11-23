import { api } from '../urls';

export const postLogin = (
  data,
  dispatch
) => {
  const config = {
    method: 'Post',
    headers: {
      'Content-Type':
        'application/json',
      // 'Access-Control-Allow-Origin':
      //   '*',
    },
    body: JSON.stringify(data),
  };

  dispatch({
    type: 'UPDATE_USER_REQUEST',
  });

  fetch(api.login, config)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.errors) {
          dispatch({
            type: 'UPDATE_USER_ERROR',
            payload: result.error,
          });
          throw result.errors;
        }

        if (result.message) {
          dispatch({
            type: 'UPDATE_USER_ERROR',
            payload: result.message,
          });
          throw result.message;
        }

        if (result.token) {
          localStorage.setItem(
            'token',
            result.token
          );
          localStorage.setItem(
            'username',
            data.username
          );
          dispatch({
            type: 'UPDATE_USER_SUCCESS',
            payload: data.username,
          });
        }
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        dispatch({
          type: 'UPDATE_USER_ERROR',
          payload: error,
        });
      }
    );
};
