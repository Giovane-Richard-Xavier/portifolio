import { Box, Center, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { IListServices } from '../../../../Sevices/types';

interface CardServiceProps {
  service: IListServices;
}

export const CardServices = ({ service }: CardServiceProps) => {
  const { id } = service;

  return (
    <Center>
      <Box
        w="370px"
        h="330px"
        // bg="#101624"
        border="1px solid #595e6b"
        borderRadius="lg"
        px="1rem"
        py="2rem"
        color="#fff"
      >
        <VStack align="center">
          <Box
            w="80px"
            h="80px"
            border="1px solid #595e6b"
            _hover={{
              border: "1px solid #fec544"
            }}
            borderRadius="50%"
            mb={2}
          >
            <Image src={service.image} alt="logo" />
          </Box>

          <Text
            color="#fff"
            mb={5}
            fontSize="1.4rem"
            _hover={{
              color: "#fec544"
            }}
          >{service.title}</Text>

          <Text align="center" textAlign="center" fontWeight={300} fontSize="1.1rem">{service.desciption}</Text>
        </VStack>
      </Box>
    </Center>
  );
};
