import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const AdminLogin = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [currentAdmin, setCurrentAdmin] = useState([]);
  let adminData;
  let adminFlag = false;
  let adminDataFunc = async () => {
    adminData = await fetch(
      `https://busy-houndstooth-clam.cyclic.app/adminLogin`
    );
    adminData = await adminData.json();
    console.log(adminData);
    return adminData;
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const addAdmin = () => {
    adminData.filter((el) => {
      // console.log("el is ", el, "   ", el.email, " ", userData.email, "  ", el.password, "  ", userData.password);
      if (el.email == userData.email) {
        setCurrentAdmin(el);
        adminFlag = true;
        return;
      }
    });
  };
  const handleSubmit = () => {
    addAdmin();
    // console.log(currentAdmin)
    if (adminFlag === true) {
      if (
        currentAdmin.email == userData.email &&
        currentAdmin.password == userData.password
      ) {
        alert("Login Succesful");
      } else {
        alert("Please check credentials");
      }
    } else {
      alert("Not a valid admin");
    }
    //     return;
    //   }
    // };

    // if (currentAdmin.length===0) {
    //   alert("Not a Valid Admin");
    // }

    // }
  };
  const onChangeInput = (e) => {
    const { id, value } = e.target;

    setUserData({ ...userData, [id]: value });
  };
  //   const handleSubmit = () => {

  //     // console.log(userData.email);
  //   };
  useEffect(() => {
      adminDataFunc();
    //   addAdmin()
    //   console.log(adminData)
  }, []);

  return (
    <Stack border={"1px solid red"} height={"100vh"}>
      <Flex
        justify="evenly"
        align="center"
        direction="column"
        textAlign="center"
        pb={10}
        pt={30}
        w="35%"
        m="auto"
        mt={28}
      >
        <Image
          src="https://i.postimg.cc/SRtsB0dm/Whats-App-Image-2022-12-15-at-13-01-22.jpg"
          alt="logo"
          w="300px"
          m="auto"
        />
        <Text
          as={"h1"}
          fontSize={"4xl"}
          fontWeight={"bold"}
          color={"gray.600"}
          pt={5}
        >
          Admin Login
        </Text>
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
        </FormControl>
        <Text mt={10}>
          Don't have a Wrike account yet?{" "}
          <Link color="blue">Get started now</Link>
        </Text>
      </Flex>
    </Stack>
  );
};

export default AdminLogin;
