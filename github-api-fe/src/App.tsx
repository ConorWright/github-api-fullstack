import React, { useEffect, useState } from 'react';
import { Grommet, Box } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import AppHeader from './components/AppHeader';
import User from './components/User';
import Repos from './components/Repos';
import { fetchRequest } from './utils/RequestsUtils';

function App() {
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // let username = 'ConorWright';
    let username = 'webpack';
    let ghUserResponse = fetchRequest(
      `https://api.github.com/users/${username}`
    );

    ghUserResponse.then((result) => {
      setUser(result);
    });

    // let ghLinkHeader = ghUserResponse.headers().get('link');
    let ghRepoResponse = fetchRequest(
      `https://api.github.com/users/${username}/repos`
    );

    ghRepoResponse.then((results) => {
      setRepos(
        results.map((result: any) => {
          return {
            name: result.full_name,
            stars: result.stargazers_count,
            language: result.language,
            description: result.description,
          };
        })
      );
    });
  }, []);

  return (
    <Grommet theme={hpe}>
      <Box fill={true}>
        <AppHeader></AppHeader>
        <User user={user}></User>
        <Repos repos={repos}></Repos>
      </Box>
    </Grommet>
  );
}

export default App;
