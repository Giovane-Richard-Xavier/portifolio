import { Box, Center, Flex, SimpleGrid, Text, VStack, Image, Button } from '@chakra-ui/react'
import { TitleSeparation } from '../TitleSepation'
import { CardServices } from '../Organism/shared/components/CardServices'
import { ListServices } from './utils'

export const Services = () => {
  return (
    <Box maxW="1200px" w="100%" mb="3rem">

      <TitleSeparation title='SERVIÇOS' bgTitle='SERVIÇOS' />

      <SimpleGrid columns={3} w="100%" h="78vh" mt="3rem" spacing={2}>
        {ListServices.map((service) => (
          <Box key={service.id} w="100%">
            <CardServices service={service} />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
