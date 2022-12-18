import React, { useEffect, useState } from "react";
import {
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Box,
  StackDivider,
  Text,
  Image,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);
  const [count,setCount]=useState(0)
  const getUsers = async () => {
    try {
      let res = await fetch(`https://busy-houndstooth-clam.cyclic.app/users`);
      let data = await res.json();
      setUserData(data);
      console.log(userData);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  //   getUsers()
  const addCount=()=>{
    setCount(count + 1);
}
console.log(count);

  const toggleStatus = async (el) => {
    // https://busy-houndstooth-clam.cyclic.app/users/2
    addCount()
    let res = await fetch(
      `https://busy-houndstooth-clam.cyclic.app/users/${el}`
    );
    let data1 = await res.json();
    console.log(data1);
    let tActive = { isactive: !data1.isactive };
    // console.log(data1)
    // console.log(`https://busy-houndstooth-clam.cyclic.app/users/${el}`)
    try {
      let res = await fetch(
        `https://busy-houndstooth-clam.cyclic.app/users/${el}`,
        {
          method: "PATCH",
          body: JSON.stringify(tActive),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      let data = await res.json();
      console.log(data);
    //   getUsers();

      return data;
    } catch (e) {
      console.log(e);
    }
  };
  const deleteUser = async (el) => {
    let res = await fetch(
      `https://busy-houndstooth-clam.cyclic.app/users/${el}`,
      {
        method: "DELETE",
      }
    );
    // getUsers();
  };
  useEffect(() => {
    getUsers();
  }, []);
  //   console.log(getUsers());
  return (
    <Stack bg={"gray.500"} color={"white"} minHeight={"100vh"} height={"fit-content"}>
      <Text color={""} textAlign={"center"} fontSize={"40px"} fontWeight={"bolder"} mt={8} mb={16}>All User Data</Text>
      <Stack color={"white"} p={7} gap={2} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)",  }}>
        {userData &&
          userData.map((el) => (
            <Card maxW="sm" key={el.id} zIndex={100} bg={"white"}>
              <CardBody>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Kv4XRwLbX9Ecj0mqFDkNgawaJT7EBsv-SOSGmcg&s"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Name : {el.name}</Heading>
                  <Text>Email : {el.email}</Text>
                  <Text color="blue.600" fontSize="2xl">
                    Status :{" "}
                    {el.isactive === true ? "Activated" : "Deactivated"}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => {
                      toggleStatus(el.id);
                    }}
                  >
                    {el.isactive === true
                      ? "Deactivate this User"
                      : "Activate this User"}
                  </Button>
                  <Button
                    variant="ghost"
                    colorScheme="blue"
                    onClick={() => {
                      deleteUser(el.id);
                    }}
                  >
                    Delete This User
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
      </Stack>
    </Stack>
  );
};

export default AdminDashboard;
