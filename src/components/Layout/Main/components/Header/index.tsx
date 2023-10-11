import { Box, Flex, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons'
import { IHeaderProps } from "./types";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavBar } from "./utils";

export const Header: React.FC<IHeaderProps> = () => {
  const router = useRouter();

  return (
    <Flex
      bg="#070d1a"
      color="#FFF"
      h="80px"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="1200px" w="100%"
        margin="auto"
        color="#fff"
      >
        <Link href="#">
          <HStack w="400px">
            <Box mx="15px" w="54px" h="54px">
              <Image src="/images/logo2.png" alt="" />
            </Box>
            <Text fontSize="28px" fontWeight="500"><Box as="span" color="#fec544">G</Box>IOVANE RICHARD</Text>
          </HStack>
        </Link>
        <HStack spacing={4}>
          {NavBar.map((item) => (
            <Box key={item.label} px={2}
              _hover={{
                color: "#fec544",
              }}
            >
              <Link href="#">{item.label}</Link>
            </Box>
          ))}
        </HStack>
        <Box color="#3f4551">|</Box>
        <HStack spacing={4}>
          <PhoneIcon />
          <Link href="#"><Box color="#fec544" fontSize="17px">(38) 99928-3546</Box></Link>
        </HStack>
      </Flex>

    </Flex >
  );
}
