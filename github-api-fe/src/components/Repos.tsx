import React from 'react';
import { Box, DataTable, Text } from 'grommet';

function Repos(repos: any) {
  const columns = [
    {
      property: 'name',
      header: <Text>Repo</Text>,
      primary: true,
    },
    {
      property: 'stars',
      header: <Text>Stars</Text>,
    },
    {
      property: 'language',
      header: <Text>Language</Text>,
    },
    {
      property: 'description',
      header: <Text>Description</Text>,
    },
  ];

  return (
    <Box pad="large">
      <DataTable
        columns={columns}
        data={Array.from(repos.repos)}
        step={10}
        paginate
      ></DataTable>
    </Box>
  );
}

export default Repos;
