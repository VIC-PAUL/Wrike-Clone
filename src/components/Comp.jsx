import React from "react";
import { Box } from "@chakra-ui/react";
import { Button, Flex, Text, Link, SimpleGrid, Image } from "@chakra-ui/react";

const Comp = () => {
  return (
    <>
      <SimpleGrid columns={2} spacing={15} mt="20px">
        <Box border="1px solid #BDBDBD" borderRadius="10px" mx="10px">
          <Box
            textAlign={"left"}
            pl="10px"
            borderBottom="1px solid #BDBDBD"
            py={10}
            color="#485776"
          >
            Inbox
          </Box>
          <Box textAlign={"left"} pl="10px" py={10} color="grey">
            Today
          </Box>
          <Box
            _hover={{ backgroundColor: "#E6FFFA" }}
            py={10}
            textAlign={"left"}
            pl="15px"
          >
            <Flex>
              <Text fontSize={"small"} color="grey">
                2h{" "}
              </Text>
              <Text fontSize={"small"} color="grey" pl="45px">
                First Project{" "}
              </Text>
            </Flex>
            <Flex>
              <Image
                src="https://i.postimg.cc/SRtsB0dm/Whats-App-Image-2022-12-15-at-13-01-22.jpg"
                alt=""
                boxSize="40px"
              />
              <Text fontWeight={"bold"} fontSize={"small"} pl="20px">
                Wrike Bot:-{" "}
              </Text>
              <Text fontSize={"small"}>
                {" "}
                Hello and welcome! Here's a project to help you get started
              </Text>
            </Flex>
            <Button
              size="md"
              borderRadius="5px"
              border="0px"
              py="6px"
              alignItems="left"
              ml="60px"
            >
              Go to full details
            </Button>
          </Box>
          <Box
            py={10}
            textAlign={"left"}
            pl="15px"
            bg="#f5f2eb"
            mx={10}
            borderRadius="10px"
          >
            <Flex>
              <Image
                src="https://i.postimg.cc/85r8R109/Screenshot-7376-fsdfdsf.png"
                alt=""
                boxSize="40px"
              />
              <Text fontWeight={"bold"} fontSize={"small"} pl="20px">
                Inbox helps you stay updated. You’ll get notifications when:
              </Text>
            </Flex>
            <Text fontSize={"small"} pl="60px">
              1. You’re assigned a new task or project
            </Text>
            <Text fontSize={"small"} pl="60px">
              2. You’re mentioned by someone
            </Text>
            <Text fontSize={"small"} pl="60px">
              3. You’re giveb access to some new info
            </Text>
            <Text fontSize={"small"} pl="60px" mb="20px">
              4. When you need to be in the loop
            </Text>

            <Link pl="60px" color="blue">
              Read more about inbox
            </Link>
          </Box>
          <Box
            py={10}
            textAlign={"left"}
            pl="15px"
            bg="#ebf5f3"
            mx={10}
            borderRadius="10px"
            mt="20px"
            mb="20px"
          >
            <Flex>
              <Image
                src="https://i.postimg.cc/sDfcb3Yh/vhvh.png"
                alt=""
                boxSize="40px"
                borderRadius="6px"
              />
              <Text fontWeight={"bold"} fontSize={"small"} pl="20px">
                Get our mobile app to see all notifications directly on your
                phone
              </Text>
            </Flex>
            <Button
              size="md"
              borderRadius="5px"
              border="0px"
              py="6px"
              alignItems="left"
              ml="60px"
              bg="#00398012"
            >
              Try mobile
            </Button>
          </Box>
        </Box>
        <Box border="1px solid #BDBDBD" borderRadius="10px" mx="10px">
          <Box
            textAlign={"left"}
            pl="10px"
            borderBottom="1px solid #BDBDBD"
            py={10}
            color="#485776"
          >
            Assigned to me
          </Box>
          <Box textAlign={"left"} pl="10px" py={10}>
            <Image
              src="https://i.postimg.cc/y8skLNcM/Screenshot-7376.png"
              alt=""
              width="680px"
              margin="auto"
            />
          </Box>
          <Box></Box>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Comp;
