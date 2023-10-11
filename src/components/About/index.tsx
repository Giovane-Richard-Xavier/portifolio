import { Box, Center, Flex, SimpleGrid, Text, VStack, Image, Button, HStack } from '@chakra-ui/react'
import { TitleSeparation } from '../TitleSepation'

export const About = () => {
  return (
    <Box maxW="1200px" w="100%" mb="5rem">

      <TitleSeparation title='SOBRE MIM' bgTitle='SOBRE MIM' />
      <SimpleGrid columns={2} w="100%" h="80vh">
        <Center>
          <Box>
            {/* <Image src="/images/apresentation-img.jpg" alt='' /> */}
            <Image src="/images/about.png" alt='' />
          </Box>
        </Center>
        <Center color="#fff">
          <Flex justify="center" w="90%" direction="column">
            <Text fontSize="2.5rem" fontWeight={400} mb={2}>Olá! eu sou Giovane Richard</Text>
            <Text fontSize="1.8rem" fontWeight={200} color="#fec544" mb={2}>Desenvolvedor Full Stack</Text>
            <Text fontSize="1.2rem" fontWeight={100} lineHeight="2rem" mb={10}>
              Sou Bacharel em Ciência da Computação e no momento estou atuando como desenvolvedor Full Stack com experiência sólida em React com Next.js no front-end e Node.js
              com o framework Nest.js no back-end. Combinando minhas habilidades em ambas as áreas, meu foco é criar
              soluções tecnológicas abrangentes e eficientes que impulsionem a experiência do usuário e a funcionalidade dos aplicativos.
              Seja criando interfaces intuitivas no front-end ou desenvolvendo robustos serviços no back-end, estou comprometido em criar
              soluções que resolvam problemas e alcancem resultados impactantes. Minha paixão pela programação e pelo desenvolvimento de
              software me impulsiona a buscar constantemente novos desafios e aprimorar minhas habilidades técnicas. Estou ansioso para contribuir
              de forma significativa em projetos inovadores e dinâmicos.
            </Text>
            <HStack spacing={10}>
              <VStack align="start" spacing={3} mb={10}>
                <Text fontWeight={100}  >Telefone: (38) 99928-3546</Text>
                <Text fontWeight={100}  >E-mail: giovanerichard@gmail.com</Text>
                <Text fontWeight={100}  >Disponibilidade para Freelance: Sim</Text>
              </VStack>

              <Button
                w="180px"
                bg="#fec544"
                borderRadius="3xl"
              >
                Visualizar CV
              </Button>
            </HStack>
          </Flex>

        </Center>
      </SimpleGrid>
    </Box>
  )
}
