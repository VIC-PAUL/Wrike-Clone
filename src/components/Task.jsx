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
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Task = ({ prevStep, nextStep, handleChange, values }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const { SignUp } = useContext(AuthContext);

  const  Continue=(e) => {
    e.preventDefault();
    nextStep();
    SignUp(values);
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
              <Text fontSize="3xl" w="90%" m="auto" textAlign="left">What needs to be done?</Text>
              <Input
                w="90%" 
                m="auto" 
                mb={4}
                value={values.task1}
                type="text"
                id="text"
                variant='filled'
                onChange={handleChange('task1')}
                placeholder="First task"
              />
               <Input
                w="90%" 
                m="auto" 
                mb={4}
                value={values.task2}
                type="text"
                id="text"
                variant='filled'
                onChange={handleChange('task2')}
                placeholder="Second task"
              />
               <Input
                w="90%" 
                m="auto" 
                value={values.task3}
                type="text"
                id="text"
                variant='filled'
                onChange={handleChange('task3')}
                placeholder="Third task"
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
                src="https://i.postimg.cc/rpz1VtZC/Screenshot-7372.png"
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
                mr={['50','120','150','150','150','150']}
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
                ml={['50','120','150','150','150','150']}
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

export default Task;
