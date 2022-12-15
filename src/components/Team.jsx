import React from "react";
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


const Team = ({ prevStep, nextStep, handleChange, values }) => {
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
        <SimpleGrid columns={['1','1','1','2','2','2']} w="90%" m="auto" mt={10}>
          <Flex justify="center" align="center">
            <SimpleGrid>
              <Image
                src="https://i.postimg.cc/SRtsB0dm/Whats-App-Image-2022-12-15-at-13-01-22.jpg"
                alt="logo"
                w="300px"
                m="auto"
              />
              <Text fontSize="3xl"  w="80%" m="auto">Tell us a bit about what you do</Text>
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
              <Text textAlign="left" pb={2}>Which team are you on?</Text>
              <Input
                mb={4}
                value={values.dept}
                type="text"
                id="text"
                variant='filled'
                onChange={handleChange('dept')}
                placeholder="Department"
              />
              <Text textAlign="left" pb={2}>What's your job role?</Text>
              <Input
                mb={4}
                value={values.role}
                type="text"
                id="text"
                variant='filled'
                onChange={handleChange('role')}
                placeholder="Job role"
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

export default Team;
