import { api } from '../urls';

export const postRegistration = (
  dispatch,
  data
) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type':
        'application/json',
      'Access-Control-Allow-Origin':
        '*',
    },
    body: JSON.stringify(data),
  };

  dispatch({
    type: 'POST_REGISTRATION_REQUEST',
  });

  fetch(api.registration, config)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.errors) {
          dispatch({
            type: 'POST_REGISTRATION_ERROR',
            payload: result,
          });
          // throw result;
        }

        if (result.message) {
          dispatch({
            type: 'POST_REGISTRATION_SUCCESS',
            payload: result.message,
          });
          // throw result.message;
        }
        if (result.length) {
          dispatch({
            type: 'POST_REGISTRATION_SUCCESS',
            payload: result,
          });
        }
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        dispatch({
          type: 'POST_REGISTRATION_ERROR',
          payload: error,
        });
      }
    );
};
