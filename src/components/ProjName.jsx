import React from 'react'
import { useState, useEffect } from "react";
import {
  Input,
  FormControl,
  Button,
  Flex,
  useMediaQuery,
  Box,
  useToast,
  SimpleGrid,
  Select,
  Image,
  Text,
  Spinner,
  Link,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

const ProjName = ({ prevStep, nextStep, handleChange, values }) => {
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
        <SimpleGrid columns={['1','1','1','2','2','2']} w="90%" m="auto">
          <Flex justify="center" align="center">
            <SimpleGrid>
              <Image
                src="https://i.postimg.cc/SRtsB0dm/Whats-App-Image-2022-12-15-at-13-01-22.jpg"
                alt="logo"
                w="300px"
                m="auto"
              
              />
              <Text fontSize="3xl" pb={10} w="75%" m="auto" textAlign="left">What's your team working on?</Text>
              <Text w="75%" m="auto" textAlign="left">Project name</Text>
              <Input
                mb={4}
                w="75%"
                m="auto" 
                value={values.proj}
                type="text"
                id="text"
                variant='filled'
                onChange={handleChange('proj')}
                placeholder="e.g. First project"
              />
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
                src="https://i.postimg.cc/zGgKb1S4/Screenshot-7371.png"
                alt="signup"
                mb={10}
              />
              

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

export default ProjName;
