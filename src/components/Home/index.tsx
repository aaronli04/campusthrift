import React from "react";

import { Flex } from "@chakra-ui/react";

import Header from "./Header";

const Home: React.FC = () => {
  return (
    <Flex direction="column" w="100%" gap={12} flex={1} justifyContent="center" alignItems='center'>
      <Header />
    </Flex>
  );
};

export default Home;