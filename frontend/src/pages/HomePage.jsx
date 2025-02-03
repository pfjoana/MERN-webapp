import ProductCard from "@/components/ProductCard";
import { useProductStore } from "@/store/product";
import { Container, SimpleGrid, Text, Heading, VStack, useColorModeValue } from "@chakra-ui/react"
import { useEffect } from "react";
import { Link } from "react-router-dom"

const HomePage = () => {

  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products:", products)


  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        {/* <Heading
          as={"h1"} size={"xl"} HeadingAlign={"center"} mb={3} mt={5}
          color={useColorModeValue("teal.600", "teal.300")}
        >
          Available Products
        </Heading> */}

        <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold"
        color={useColorModeValue("gray.800", "gray.200")}>
          Welcome to TechNova Store
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.500">
          Browse our latest selection of top-tier gadgets and accessories.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w={"full"}
          mt={6}
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}

        </SimpleGrid>


        {products.length === 0 && (

        <Text fontSize= "2xl" textAlign={"center"} fontWeight={"bold"} color="gray.500">
          No products found! {""} <br/>
          <Link to= {"/create"}>
            <Text as="span" color="blue.500" _hover={{textDecoration: "underline"}}>
              Create a new product
            </Text>
          </Link>
        </Text>

        )}

      </VStack>
    </Container>
  )
}

export default HomePage
