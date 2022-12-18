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
  useToast,
  Link,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";



function SignUp({nextStep,handleChange,values}) {
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);


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
  if (
    values.email == "" ||
    values.fullName == "" ||
    values.number == "" ||
    values.company == "" ||
    values.country== ""
  )
    return toast({
      title: "Fill all the details !!!",
      status: "error",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
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
      <SimpleGrid columns={['1','1','2','2','2','2']} w="90%" m="auto" mt={10}>
       <Flex justify="center" align="center">
          <SimpleGrid>
            <Image
              src="https://i.postimg.cc/SRtsB0dm/Whats-App-Image-2022-12-15-at-13-01-22.jpg"
              alt="logo"
              w="300px"
              m="auto"
            />
            <Text fontSize="3xl"  w="80%" m="auto">Welcome!</Text>
            <Text  w="80%" m="auto">Let’s create your account</Text>
          </SimpleGrid>
        </Flex>
        <Flex
          justify="center"
          align="center"
          direction="column"
          textAlign="center"
          pb={10}
          pt={30}
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
              value={values.fullName}
              type="text"
              id="fullName"
              variant='filled'
              onChange={handleChange("fullName")}
              placeholder="Enter full name"
            />
            {/* <FormLabel htmlFor="lastName">Last Name</FormLabel> */}
            <Input
              mb={4}
              value={values.email}
              type="email"
              id="email"
              variant='filled'
              onChange={handleChange("email")}
              placeholder="Enter email"
              
            />
            {/* <FormLabel htmlFor="email">Email address</FormLabel> */}
            <Input
              mb={4}
              value={values.password}
              type="password"
              id="password"
              variant='filled'
              onChange={handleChange("password")}
              placeholder="Enter password"
            />
            <Input
              mb={4}
              value={values.number}
              type="number"
              id="number"
              variant='filled'
              onChange={handleChange("number")}
              placeholder="Phone number"
            />
            {/* <FormLabel htmlFor="password">Password</FormLabel> */}
            <Input
              mb={4}
              value={values.company}
              id="company"
              variant='filled'
              onChange={handleChange("company")}
              type="text"
              placeholder="Your company name"
            />
            <Select placeholder="Select Country" onChange={handleChange("country")} value={values.country}>
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

export default SignUp;

