import React, { useEffect, useState } from "react";

import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Flex,
  Text,
  Link,
  Image,
  useMediaQuery,
  useToast,
  Stack,
  Spinner,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthContext";
function LogIn() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  //   const { SignIn } = useContext(AuthContext);
    const Navigate = useNavigate();
  //   const toast = useToast();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");
  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    // var a = JSON.parse(localStorage.getItem("Users") || "[]");
    // var login = false;
    // let loogedInUserName = null;
    // a.forEach((elem) => {
    //   if (elem.email == userData.email && elem.password == userData.password) {
    //     login = true;
    //     loogedInUserName = elem;
    //     return;
    //   } else {
    //     login = false;
    //   }
    // });
    // if (login) {
    //   localStorage.setItem("loginUser", JSON.stringify(loogedInUserName));
    //   SignIn();
    //   setTimeout(() => {
    //     Navigate("/");
    //   }, 2000);
    //   toast({
    //     title: "Login Successfull !!!",
    //     status: "success",
    //     duration: 2000,
    //     isClosable: true,
    //     position: "top",
    //   });
    //   setUserData({
    //     email: "",
    //     password: "",
    //   });
    // } else {
    //   toast({
    //     title: "Login Failed !!!",
    //     status: "error",
    //     duration: 1500,
    //     isClosable: true,
    //     position: "top",
    //   });
    // }
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
        
        <Flex
          justify="center"
          align="center"
          direction="column"
          textAlign="center"
          pb={10}
          pt={30}
          w="35%"
          m="auto"
          mt={40}
        >
          <Image
            src="https://i.postimg.cc/SRtsB0dm/Whats-App-Image-2022-12-15-at-13-01-22.jpg"
            alt="logo"
            w="300px"
            m="auto"
          />
          <FormControl
            borderRadius="lg"
            boxShadow="xl"
            p={"3"}
            cursor="pointer"
            mt={5}
          >
            <Input
              value={userData.email}
              variant="filled"
              type="email"
              id="email"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="Email or corporate ID"
              w="80%"
              mb={5}
            />
              <Input
              value={userData.password}
              variant="filled"
              type="password"
              id="password"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="Password"
              w="80%"
            />
            <Button
              w="80%"
              mt={4}
              mb={5}
              bgColor="#2F855A"
              color="white"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Login
            </Button>
            <FormHelperText color="blue" mb={5}>
              <Link>Forgot password?</Link>
            </FormHelperText>
            <FormHelperText mb={5}>or login with</FormHelperText>
            <Stack spacing={4} direction="row" align="center" justifyContent="space-evenly" pb={10}>
              <Button colorScheme="gray"  size="sm" fontWeight={80} w="auto">
                <Image src="https://i.postimg.cc/vTM3bBWb/download-4.png" w={7} h={4} bg="grey"/>
                Google
              </Button>
              <Button colorScheme="gray"  size="sm" fontWeight={80} w="auto">
              <Image src="https://i.postimg.cc/pXZRNGwn/download-5.png" w={5} h={5} mr={1}/>
                Sign in with Apple
              </Button>
              <Button colorScheme="gray"  size="sm" fontWeight={80} w="auto">
              <Image src="https://i.postimg.cc/tCCCgGtz/download-4.jpg" w={5} h={4} mr={1}/>
                Office
              </Button>
            </Stack>
          </FormControl>
          <Text mt={10} >Don't have a Wrike account yet? <Link color="blue">Get started now</Link></Text>
        </Flex>
    
      )}
    </>
  );
}

export default LogIn;
