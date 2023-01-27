import React from "react";
import currentListings from "../utility/itemData";

import {
    Accordion,
    AccordionButton,
    AccordionIcon, 
    AccordionItem, 
    AccordionPanel, 
    Box,
    Link,
    Text, 
    VStack
} from "@chakra-ui/react";

const Filter: React.FC = () => {
    return (
        <VStack h='100%'>
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
                                <Link href='/categories/Refrigerators'>
                                    Refrigerators
                                </Link>
                                <Link href='/categories/Microwaves'>
                                    Microwaves
                                </Link>
                                <Link href='/categories/Lamps'>
                                    Lamps
                                </Link>
                                <Link href='/categories/Fans'>
                                    Fans
                                </Link>
                                <Link href='/categories/Monitors and Television'>
                                    Monitors and Television
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
                                <Link href='/categories/Math Textbooks'>
                                    Math
                                </Link>
                                <Link href='/categories/Science Textbooks'>
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