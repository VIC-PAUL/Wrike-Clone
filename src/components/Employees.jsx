import React, { useState, useEffect } from "react";
import {
  FormControl,
  Button,
  Flex,
  Box,
  SimpleGrid,
  Image,
  Text,
  Spinner,
  Stack,
  Radio,
  RadioGroup 
} from "@chakra-ui/react";



const Employees = ({ prevStep, nextStep, handleChange, values }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  const [value, setValue] = React.useState('0')
  return (
    <>
      {isLoading ? (
        <Flex justify="center" mt={"5"}>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#3182ce"
            size="lg"
          />
        </Flex>
      ) : (
        <SimpleGrid columns={['1','1','1','2','2','2']} w="90%" m="auto" mt={10}>
          <Flex justify="center" align="center">
            <SimpleGrid>
              <Image
                src="https://i.postimg.cc/SRtsB0dm/Whats-App-Image-2022-12-15-at-13-01-22.jpg"
                alt="logo"
                w="300px"
                m="auto"
              />
              <Text fontSize="3xl" w="80%" m="auto">Great! Just a few quick questions...</Text>
            </SimpleGrid>
            </Flex>
          <Flex
            justify="center"
            align="center"
            direction="column"
            textAlign="center"
            pb={10}
            pt={10}
          >
            <FormControl borderRadius="lg" p={"3"} cursor="pointer" mt={5}>
              {/* <FormLabel htmlFor="firstName">First Name</FormLabel> */}
              <Image
                src="https://cdn.wrike.com/static/reg_flow/forms/general_info/reg_form_image--m.png"
                alt="signup"
                mb={10}
              />
               <RadioGroup onChange={setValue} value={value}>
                
            <Stack  direction={['row']} mb={4}>
            
              <Box  borderWidth='1px' w={80} mr={10}  textAlign="left" pl={4} pt={2} pb={2} borderRadius="lg" borderColor="green">
              <Radio size="md" name="1" value='1' colorScheme="green">
                2-20 employees
              </Radio>
              </Box>
              <Box borderWidth='1px'w={80} mr={10} textAlign="left" pl={4} pt={2} pb={2} borderRadius="lg" borderColor="green">
              <Radio size="md" name="1"  value='2'colorScheme="green">
              21-50 employees
              </Radio>
              </Box>
              </Stack>

              <Stack  direction={['row']} mb={4}>
              <Box  borderWidth='1px' w={80} mr={10} textAlign="left" pl={4} pt={2} pb={2} borderRadius="lg" borderColor="green">
              <Radio size="md" name="1" value='3' colorScheme="green">
              51-100 employees
              </Radio>
             </Box>
             <Box  borderWidth='1px' w={80} mr={10} textAlign="left" pl={4} pt={2} pb={2} borderRadius="lg" borderColor="green">
              <Radio size="md" name="1" value='4' colorScheme="green">
              101-200 employees
              </Radio>
            </Box>
               </Stack>

            <Stack  direction={['row']} mb={4}>
            <Box  borderWidth='1px' w={80} mr={10} textAlign="left" pl={4} pt={2} pb={2} borderRadius="lg" borderColor="green">
              <Radio size="md" name="1"  value='5'colorScheme="green">
              201-500 employees
              </Radio>
              </Box>
              <Box  borderWidth='1px' w={80} mr={10} textAlign="left" pl={4} pt={2} pb={2} borderRadius="lg" borderColor="green">
              <Radio size="md" name="1" value='6' colorScheme="green">
              501-1000 employees
              </Radio>
              </Box>
              </Stack>


              <Stack  direction={['row']} mb={4}>
              <Box  borderWidth='1px' w={80} mr={10} textAlign="left" pl={4} pt={2} pb={2} borderRadius="lg" borderColor="green">
              <Radio size="md" name="1" value='7' colorScheme="green">
              1000+ employees
              </Radio>
              </Box>
              <Box  borderWidth='1px' w={80} mr={10} textAlign="left" pl={4} pt={2} pb={2} borderRadius="lg" borderColor="green">
              <Radio size="md" name="1"  value='8'colorScheme="green">
              It's just me
              </Radio>
              </Box>
            </Stack>
            </RadioGroup>
            
              <Button
                w={["20", "20", "20", "20", "20", "20"]}
                mt={20}
                bgColor="#2F855A"
                type="submit"
                colorScheme="green"
                onClick={Previous}
                mr={150}
              >
                Previous
              </Button>
              <Button
                w={["20", "20", "20", "20", "20", "20"]}
                mt={20}
                bgColor="#2F855A"
                type="submit"
                colorScheme="green"
                onClick={Continue}
                ml={180}
              >
                Next
              </Button>
            </FormControl>
           
          </Flex>
        </SimpleGrid>
      )}
    </>
  );
};

export default Employees;
