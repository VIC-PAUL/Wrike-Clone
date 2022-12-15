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


const Teammembers = ({ prevStep, nextStep, handleChange, values }) => {
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
              <Text fontSize="3xl" w="90%" m="auto" textAlign="left">Start building your team</Text>
              <Text w="90%" m="auto" textAlign="left">You can always invite more people later</Text>
           
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
                 <Input
                mb={4}
                value={values.email1}
                type="email"
                id="email"
                variant='filled'
                onChange={handleChange('email1')}
                placeholder="jamie@example.com"
              />
               <Input
                mb={4}
                value={values.email2}
                type="email"
                id="email"
                variant='filled'
                onChange={handleChange('email2')}
                placeholder="ashley@example.com"
              />
               <Input
                mb={4}
                value={values.email3}
                type="text"
                id="text"
                variant='filled'
                onChange={handleChange('email3')}
                placeholder="alex@example.com"
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

export default Teammembers;
