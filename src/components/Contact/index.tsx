import { Box, Center, Flex, SimpleGrid, Text, VStack, Image, Button, HStack } from '@chakra-ui/react'
import { TitleSeparation } from '../TitleSepation'
import { Stepper } from '../Organism/shared/components/Stepper'
import { ListEducation, ListExperience } from '../Organism/shared/components/Stepper/utils'
import { FormContact } from '../Organism/shared/components/FormContact'


export const Contact = () => {
  return (
    <Box maxW="1200px" w="100%" color="#fff">

      <TitleSeparation title='CONTACTE-ME' bgTitle='CONTACTE-ME' />

      <SimpleGrid columns={2} w="100%" h="70vh" mt="3rem" spacing={2}>
        <Box>
          <FormContact />
        </Box>
        <Box>
          <HStack spacing={5} mb="3rem">
            <Image src="/images/resume-icon2.png" />
            <Text fontSize="2.3rem">Formação</Text>
          </HStack>
          <Stepper steps={ListEducation} />
        </Box>
      </SimpleGrid>
    </Box>
  )
}
