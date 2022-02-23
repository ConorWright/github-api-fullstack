import React, { useContext, useEffect, useRef, useState } from 'react';
import { Box, Header, ResponsiveContext, Text } from 'grommet';
import { Hpe } from 'grommet-icons';

function AppHeader() {
  const size = useContext(ResponsiveContext);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<any>();

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused, setFocused]);

  return (
    <Header
      fill="horizontal"
      pad={{ horizontal: 'medium', vertical: 'small' }}
      background="background-front"
    >
      <Box
        direction="row"
        align="start"
        gap="medium"
        pad={{ vertical: 'small' }}
        responsive={false}
      >
        <Hpe color="brand" />
        {(size !== 'small' || (size === 'small' && !focused)) && (
          <Box direction="row" gap="xsmall" wrap>
            <Text color="text-strong" weight="bold">
              HPE
            </Text>
          </Box>
        )}
      </Box>
    </Header>
  );
}

export default AppHeader;
