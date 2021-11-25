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
    .then((res) => {
      if (res.ok) {
        dispatch({
          type: 'SHOW_NOTIFICATION',
          notificationType: 'success',
        });
      }
      return res.json();
    })
    .then(
      (result) => {
        if (result.errors) {
          dispatch({
            type: 'POST_REGISTRATION_ERROR',
            payload: result,
          });
        }

        if (
          result.message ===
          'Пользователь с таким именем уже существует'
        ) {
          dispatch({
            type: 'POST_REGISTRATION_ERROR',
            payload: result,
          });
          dispatch({
            type: 'SHOW_NOTIFICATION',
            payload: result.message,
          });
        }

        if (
          result.message ===
          'Пользователь успешно зарегистрирован'
        ) {
          dispatch({
            type: 'POST_REGISTRATION_SUCCESS',
            payload: result,
          });
          dispatch({
            type: 'SHOW_NOTIFICATION',
            payload: result.message,
            notificationType: 'success',
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
