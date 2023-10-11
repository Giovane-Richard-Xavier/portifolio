import { Box, Center, Flex, SimpleGrid, Text, VStack, Image, Button } from '@chakra-ui/react'
import { TitleSeparation } from '../TitleSepation'
import { Stepper } from '../Organism/shared/components/Stepper'
import { SkillBar } from '../Organism/shared/components/SkillBar'
import { ListSkills } from './utils'


export const Skills = () => {
  return (
    <Box maxW="1200px" w="100%" color="#fff">

      <TitleSeparation title='HABILIDADES' bgTitle='HABILIDADES' />

      <SimpleGrid columns={2} w="100%" h="60vh" mt="3rem" spacing={5}>
        <VStack spacing={10}>
          <Text fontSize="2rem" >
            Algumas das competências que possuo nessa área de trabalho são.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            At vero eos et accusam et justo duo dolores..
          </Text>
          <Text>
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
          </Text>
        </VStack>

        <Box>
          {ListSkills.map((skills) => (
            <Box key={skills.id} w="100%">
              <SkillBar skills={skills} />
            </Box>
          ))}
        </Box>
      </SimpleGrid>
    </Box >
  )
}
