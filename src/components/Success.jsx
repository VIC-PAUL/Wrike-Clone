
import React, { useState, useEffect } from "react";

import {
  Input,
  FormControl,
  Button,
  Flex,
  SimpleGrid,
  Select,
  Image,
  Text,
  Spinner,
  Link,
  Box,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthContext";

function Success({nextStep,handleChange,values}) {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  //   const { SignUp } = useContext(AuthContext);
  //   const toast = useToast();
  //   const Navigate = useNavigate();
  //   const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (
    //   userData.email == "" ||
    //   userData.firstName == "" ||
    //   userData.lastName == "" ||
    //   userData.password == ""
    // )
    //   return toast({
    //     title: "Fill all the details !!!",
    //     status: "error",
    //     duration: 1500,
    //     isClosable: true,
    //     position: "top",
    //   });
    // SignUp(userData);
    // setTimeout(() => {
    //   Navigate("/signin");
    // }, 2000);
    // setUserData({
    //   email: "",
    //   firstName: "",
    //   lastName: "",
    //   password: "",
    // });
    // toast({
    //   title: "Signup Successfull !!!",
    //   status: "success",
    //   duration: 1500,
    //   isClosable: true,
    //   position: "top",
    // });

  };

  const[country,setCountry]=useState([]);

 useEffect(()=>{
  const getcountry=async ()=>{
    const res = await fetch("https://serverapp-wwy8.onrender.com/countries");
    const getcon = await res.json()
    setCountry(await getcon)

    }
   getcountry();
 },[])
 const Continue = e => {
  e.preventDefault();
  nextStep();
}

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
        <SimpleGrid columns={['1','1','2','2','2','2']} w="90%" m="auto">
         <Flex justify="center" align="center">
            <SimpleGrid>
              <Image
                src="https://i.postimg.cc/SRtsB0dm/Whats-App-Image-2022-12-15-at-13-01-22.jpg"
                alt="logo"

              />
              <Text fontSize="3xl">Welcome!</Text>
              <Text>Let’s create your account</Text>
            </SimpleGrid>
          </Flex>
          <Flex
            justify="center"
            align="center"
            direction="column"
            textAlign="center"
            pb={10}
            pt={10}
            // w="0%"
          >
            
          
            <FormControl borderRadius="lg" p={"3"} cursor="pointer" >
              {/* <FormLabel htmlFor="firstName">First Name</FormLabel> */}
              <Image
                src="https://cdn.wrike.com/static/reg_flow/forms/general_info/reg_form_image--m.png"
                alt="signup"
                mb={10}
              />
              <Input
                mb={4}
                value={userData.firstName}
                type="text"
                id="firstName"
                variant='filled'
                onChange={(e) => {
                  onChangeInput(e);
                }}
                placeholder="Enter first name"
              />
              {/* <FormLabel htmlFor="lastName">Last Name</FormLabel> */}
              <Input
                mb={4}
                value={userData.lastName}
                type="text"
                id="lastName"
                variant='filled'
                onChange={(e) => {
                  onChangeInput(e);
                }}
                placeholder="Enter last name"
              />
              {/* <FormLabel htmlFor="email">Email address</FormLabel> */}
              <Input
                mb={4}
                value={userData.number}
                type="number"
                id="number"
                variant='filled'
                onChange={(e) => {
                  onChangeInput(e);
                }}
                placeholder="Phone number"
              />
              {/* <FormLabel htmlFor="password">Password</FormLabel> */}
              <Input
                mb={4}
                value={userData.company}
                id="company"
                variant='filled'
                onChange={(e) => {
                  onChangeInput(e);
                }}
                type="text"
                placeholder="Your company name"
              />
              <Select placeholder="Select Country">
                { country.map((dat)=>(
                  <option key={dat.country_id}>{dat.country_name}</option>
                ))

                }
              </Select>
              
              <Checkbox defaultChecked pt={10} w="80%" m="auto" mr="40px">
                <Text fontSize="sm">
                  I agree to <Link color="blue">Terms of Service</Link> and the 
                  <Link color="blue"> Privacy Policy</Link>
                </Text>
              </Checkbox>
              <Button
                w={["20","20","20","20","20","20"]}
                mt={20}
                bgColor="#2F855A"
                type="submit"
                colorScheme="green"
                onClick={Continue}
              >
                Next
              </Button>
            </FormControl>
          </Flex>
        </SimpleGrid>
      )}
    </>
  );
}

export default Success;

