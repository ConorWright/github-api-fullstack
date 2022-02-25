import React from 'react';
import { Avatar, Box, Heading, Text } from 'grommet';

function User(user: any) {
  return (
    <Box>
      <Box direction="row" gridArea="avatar" justify="center">
        <Avatar align="center" size="xlarge" src={user.user.avatar_url} />
      </Box>
      <Box direction="row" gap="medium" gridArea="name" justify="center">
        <Heading size="small">{user.user.login}</Heading>
      </Box>
      <Box direction="row" gridArea="metadata" justify="center">
        <Text>{user.user.name} | </Text>
        <Text>{user.user.location} | </Text>
        <Text>{user.user.company}</Text>
      </Box>
    </Box>
  );
}

export default User;
