export const request = ({
  url,
  method = 'GET',
  body,
  callback,
}) => {
  const config = {
    method,
    // mode: 'no-cors',
    headers: {
      'Content-Type':
        'application/json',
      'Access-Control-Allow-Origin':
        '*',
      Authorization: `Bearer ${localStorage.getItem(
        'token'
      )}`,
    },
    body: body && JSON.stringify(body),
  };
  fetch(url, config)
    .then((res) => res.json())
    .then(
      (result) => {
        if (result.errors) {
          callback && callback(result);
          throw result.message;
        }

        if (result.message) {
          callback && callback(result);
          throw result.message;
        }

        if (result.token)
          localStorage.setItem(
            'token',
            result.token
          );

        // setIsLoaded(true);
        callback && callback(result);
      },
      // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
      // чтобы не перехватывать исключения из ошибок в самих компонентах.
      (error) => {
        callback && callback(error);

        // setIsLoaded(true);
        // setError(error);
      }
    );
};
