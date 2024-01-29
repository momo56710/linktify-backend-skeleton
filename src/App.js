import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import RouteRoot from './routes';
import Nav from './Nav';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
     
         
          <BrowserRouter>
          <Nav />
          <RouteRoot />
        </BrowserRouter>
         
      </Box>
    </ChakraProvider>
  );
}

export default App;
