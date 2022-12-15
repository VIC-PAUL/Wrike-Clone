import React from 'react'

import { useState, useEffect } from "react";
import {
  Input,
  FormControl,
  Button,
  Flex,
  SimpleGrid,
  Image,
  Text,
  Spinner,
 
} from "@chakra-ui/react";


const Space = ({ prevStep, nextStep, handleChange, values }) => {
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
              <Text fontSize="3xl" pb={5} w="75%" m="auto" textAlign="left">Let's name your first space</Text>
              <Text pb={2} textAlign="left" w="75%" m="auto">This is where you'll keep your team's project and tasks</Text>
              <Text pb={10} textAlign="left" w="75%" m="auto">Don't worry you can change everything later</Text>
              <Text textAlign="left" w="75%" m="auto">Space</Text>
              <Input
                mb={4}
                w="75%"
                m="auto"
                value={values.space}
                type="text"
                id="text"
                variant='filled'
                onChange={handleChange('space')}
                placeholder="e.g. First space"
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
                src="https://i.postimg.cc/664WN5Ws/wrike.png"
                alt="signup"
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

export default Space;
