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
      body: JSON.stringify(data),
    },
  };

  dispatch({
    type: 'POST_REGISTRATION_START',
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
            type: 'SHOW_NOTIFICATION',
            payload: result.message,
          });
          // throw result.message;
        }
        console.log(result);
        if (result.length) {
          dispatch({
            type: 'POST_REGISTRATION_FINISH',
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
