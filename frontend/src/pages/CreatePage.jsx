import { Container, VStack, Heading, Box, useColorModeValue, Input, Button, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useProductStore } from '../store/product';


const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast()

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);

    // using Chakra Toast for the message
    if(!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        // duration: 5000, // 5 seconds
        isClosable: true
      })
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      })
    }

    setNewProduct({ name: "", price: "", image: "" });


    // without destructuring writting
    // const response = await createProduct(newProduct);
    // console.log("Success: ", response.success);
    // console.log("Message: ", response.message);

  }

  return (
    <Container maxW={"container.sm"} py={12}>
      <VStack spacing={5}>
        <Heading
        as={"h1"} size={"xl"} textAlign={"center"} mb={3} mt={5}
        color={useColorModeValue("gray.800", "gray.200")}
        >
          Create a new product
        </Heading>

        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} shadow={"md"} rounded={"md"} p={8}
        >
          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />

            <Input
              placeholder='Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />

            <Input
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />

            <Button colorScheme={useColorModeValue("teal", "orange")} onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>


          </VStack>


        </Box>

      </VStack>

    </Container>
  )
}

export default CreatePage
