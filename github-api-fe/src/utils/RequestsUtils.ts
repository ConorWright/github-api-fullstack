export const fetchRequest = async (url: string) => {
  return fetch(url, {
    headers: {
      Authorization: 'token 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',
    },
  })
    .then(response => response.json())
    .catch((error) => {
      console.log(error);
    });
};
