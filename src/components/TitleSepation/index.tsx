import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

interface ITitleSeparationProps {
  title: string;
  bgTitle: string;
}

export const TitleSeparation = ({
  title,
  bgTitle,
}: ITitleSeparationProps) => {
  return (
    <Center
      px="2rem"
      py="3rem"
      position="relative"
      w="100%"
      mb="5rem"
    >
      <Text
        fontSize="8rem"
        fontWeight={500}
        color="#595e6b"
        position="absolute"
        opacity="8%"
        zIndex="-1"
      >{bgTitle}</Text>

      <Text
        fontSize="1.8rem"
        fontWeight={500}
        color="#fec544"
        borderBottom="2px solid #595e6b"
        position="absolute"
        bottom="-2px"
        px="2rem"
        pb={3}
      >{title}</Text>

      <Box borderBottom="2px solid #fec544"
        position="absolute"
        w="5rem"
        bottom="-2px"

      ></Box>
    </Center>
  )
}
