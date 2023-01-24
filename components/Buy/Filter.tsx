import React from "react";

import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";

const Filter: React.FC = () => {
    return (
        <VStack>
            <Text
                fontWeight='semibold'
                fontSize='xl'
            >
                Shop by Category
            </Text>
            <Box w={300}>
                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Appliances
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack gap={2}>
                                <Link href='/'>
                                    Refrigerators
                                </Link>
                                <Link href='/'>
                                    Microwaves
                                </Link>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Textbooks
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack gap={2}>
                                <Link href='/categories/MathTextbooks'>
                                    Math
                                </Link>
                                <Link href='/'>
                                    Science
                                </Link>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </VStack>
    )
};

export default Filter