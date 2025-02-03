import {Container, Flex, Text, HStack, Button, useColorMode, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { PlusSquareIcon } from '@chakra-ui/icons'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'


const Navbar = () => {
  
  const { colorMode, toggleColorMode } = useColorMode();
  return (

    <Box
    as="nav"
    bg={colorMode === "light" ? "teal.800" : "gray.900"}
    color={colorMode === "light" ? "white" : "gray.100"}
    boxShadow="md"
    >
      <Container maxW={"1140px"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{
            base: "column",
            sm: "row",
          }}
        >

        <Text
          color={colorMode === "light" ? "teal.100" : "teal.300"}
          fontSize= {{ base: "20", sm: "24" }}
          fontWeight="bold"
          textTransform={"uppercase"}
          textAlign={ "center"}
        >
          <Link to={"/"}> TechNova Store </Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button colorScheme={colorMode === "light" ? "teal" : "orange"}>
              <PlusSquareIcon fontSize={20}/>
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}

          </Button>
        </HStack>
        </Flex>
      </Container>
    </Box>

  )
}

export default Navbar
