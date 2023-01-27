import React from "react";

import { Text, VStack } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <VStack h="100%" justifyContent="space-between">
      <Text
        fontSize='4xl'
        fontWeight='extrabold'
      >
        The #1 Site For Buying and Selling College Items
      </Text>
      <Text
        fontSize='xl'
        fontWeight='semi'
      >
        Buy good-as-new items for a whole lot less.
        Sell things you don&apos;t use anymore.
        No fees.
      </Text>
    </VStack>
  );
};

export default Header;