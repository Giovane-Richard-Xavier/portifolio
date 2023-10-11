import {
  Box,
  Center,
  Flex,
  SimpleGrid,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";

export const Apresentation = () => {
  return (
    <SimpleGrid columns={2} w="100%" h="100vh">
      <Center color="#fff">
        <Flex justify="center" w="70%" direction="column">
          <Text fontSize="1.8rem" fontWeight={400} color="#fec544">
            Olá, eu sou
          </Text>
          <Text
            fontSize={["3rem", "5rem", "6rem", "7rem"]}
            fontWeight={700}
            lineHeight={["3rem", "5rem", "8rem"]}
          >
            Giovane Richard
          </Text>
          <Text fontSize="2rem" fontWeight={100} mt={7}>
            Desenvolvedor Full Stack
          </Text>
        </Flex>

        {/* </Box> */}
      </Center>
      <Box>
        <Image src="/images/apresentation-img.jpg" alt="" />
      </Box>
    </SimpleGrid>
  );
};
