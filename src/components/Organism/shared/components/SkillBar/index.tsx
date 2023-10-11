import { ISkills } from '@/components/Skills/types'
import { VStack, Text, Box, Center, HStack } from '@chakra-ui/react'
import React from 'react'

interface SkillBarProps {
  skills: ISkills,
}

export const SkillBar = ({ skills }: SkillBarProps) => {

  return (
    <Box>
      <Text fontSize="1.1rem" fontWeight={500}>{skills.language}</Text>
      <VStack align="start" spacing={4} mb="1rem">
        <Box w="100%" borderBottom="4px solid #595e6b" position="relative" borderRightRadius="lg">
          <Box w={skills.progress} borderBottom="4px solid #fec544" position="absolute" borderRadius="lg"></Box>
          <Box position="absolute" zIndex={100} right="0" top="-25px" color="#fec544">{skills.progress}</Box>
        </Box>
      </VStack>
    </Box>

  )
}
