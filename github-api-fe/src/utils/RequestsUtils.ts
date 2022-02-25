export const fetchRequest = async (url: string) => {
  let api_token = process.env.REACT_APP_API_TOKEN;

  return fetch(url, {
    headers: {
      Authorization: `token ${api_token}`,
    },
  })
    .then(response => {
      if(response.status === 404) {
        console.log("User Not Found")
      }
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
