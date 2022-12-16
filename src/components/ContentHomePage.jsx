import {
  Box,
  Button,
  Center,
  Grid,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import style from "./ContentHomePage.module.css";
import HomepageTop from "../Images/HomepageTop.png";

const ContentHomePage = () => {
  return (
    <div>
      <Stack width={"100%"}>
        <Box
          // position={"relative"}
          className={style.firstBox}
          display={{ base: "inline", lg: "flex" }}
          paddingLeft={{ base: "15%", lg: "5%", xl: "8%" }}
          paddingTop={{ base: "20px", lg: "30px" }}
          paddingRight={{ base: "15%", lg: "5%", xl: "8%" }}
          textAlign={{ base: "center", lg: "left" }}
          justifyContent={"space-between"}
          // border={"1px solid red"}
        >
          <Box
            className={style.firstFBox}
            width={{ base: "100%", lg: "40%" }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Text
              as={"h1"}
              fontSize={{ base: "30px", md: "40px", lg: "55px" }}
              fontWeight={"bold"}
              marginBottom={{ base: "10px", lg: "20px" }}
              textAlign={"left"}
            >
              <Text>
                Remove barriers, <br /> find clarity, <br /> exceed goals
              </Text>
            </Text>
            <Text
              fontSize={{ base: "14px", md: "16px", lg: "18px" }}
              marginBottom={"20px"}
              fontWeight={"semibold"}
            >
              Anything is possible with the most powerful work management
              software at your fingertips.
            </Text>
            {/* <Box
              display={{base:"inline",lg:"flex"}}
              width={{base:"100%"}}
              justifyContent={"space-around"}
              // border={"1px solid red"}
            > */}
            {/* <Input
                placeholder="Enter Your Business Email"
                bg={"white"}
                color={"black"}
                _placeholder={{color:"black"}}
                width={{base:"100%",lg:"60%"}}
                height={{ base: "60px", lg: "50px" }}

              /> */}
            <Button
              height={{ base: "60px", lg: "50px" }}
              bg={"rgb(34 197 94)"}
              _hover={{ bg: "rgba(34,197,94,0.8)" }}
              width={{ base: "100%", lg: "30%" }}
            >
              Get Started
            </Button>
            {/* </Box> */}
          </Box>
          <Box width={{ base: "100%", lg: "50%" }} height={"100%"}>
            <Image
              width={"100%"}
              // position={"absolute"}
              right={{ base: "10%", lg: "0" }}
              left={{ base: "10%", lg: "50%" }}
              height={"100%"}
              src={HomepageTop}
            />
          </Box>
        </Box>
        <Box
          // border={"1px solid red"}
          height={"fit-content"}
          p={"auto"}
          pt={""}
          // position={"relative"}
        >
          <SimpleGrid
            columns={{ base: "1", md: "3", lg: "5", xl: "7" }}
            // columns={{sm: 2, md: 3}}
            // columns={[1, 3, 5, 7]}
            // border={"1px solid cyan"}
            height={"fit-content"}
            width={"80%"}
            // mb={"30%"}
            m={"auto"}
            mt={"5%"}
            alignContent={"center"}
            // position={"absolute"}
            // justifyContent={"space-around"}
            left={"10%"}
            top={"30%"}
            // display={{ base: "flex" }}
            justifyContent={{ base: "center", lg: "space-between" }}
          >
            <Box width={"90%"} height={"90%"}>
              <Image
                h={"70%"}
                w={"90%"}
                src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-google.svg"
              />
            </Box>
            <Box width={"90%"} height={"90%"}>
              <Image
                h={"70%"}
                w={"90%"}
                src="https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos.svg"
              />
            </Box>
            <Box width={"90%"} height={"90%"}>
              <Image
                h={"70%"}
                w={"90%"}
                src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-lyft.svg"
              />
            </Box>
            <Box width={"90%"} height={"90%"}>
              <Image
                h={"70%"}
                w={"90%"}
                src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-siemens.svg"
              />
            </Box>
            <Box width={"90%"} height={"90%"}>
              <Image
                h={"70%"}
                w={"90%"}
                src="https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon.svg"
              />
            </Box>
            <Box width={"90%"} height={"90%"}>
              <Image
                h={"70%"}
                w={"90%"}
                src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-oglivy.svg"
              />
            </Box>
            <Box width={"90%"} height={"90%"}>
              <Image
                h={"70%"}
                w={"90%"}
                src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-snowflake.svg"
              />
            </Box>
          </SimpleGrid>
          <Text
            textAlign={"center"}
            color={"black"}
            position={"absolute"}
            width={{ base: "90%", lg: "60%" }}
            left={{ base: "5%", lg: "20%" }}
            fontWeight={"semibold"}
            fontSize={{ base: "12px", lg: "16px" }}
          >
            TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
          </Text>
        </Box>
        <Box pb={"30px"}>
          <Box
            // border={"1px solid red"}
            width={"80%"}
            margin={"auto"}
            mt={"50px"}
            textAlign={"center"}
            alignItems={"center"}
          >
            <Text as={"h1"} fontSize="30px" fontWeight={"bold"}>
              Transform the way your teams work
            </Text>
            <Text
              margin={"auto"}
              width={{ base: "100%", lg: "60%" }}
              alignItems={"center"}
              // border={"1px solid cyan"}
            >
              Empower your teams to do the best work of their lives with 360°
              visibility, true cross-departmental collaboration, and powerful
              automation.
            </Text>
          </Box>
        </Box>
        <Box pb={"30px"}>
          <Flex
            // border={"1px solid red"}
            direction={{ base: "column", md: "row" }}
            width={"80%"}
            margin={"auto"}
            mt={"50px"}
            textAlign={"center"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              className={style.flex1}
              height={"500px"}
              width={{ base: "100%", lg: "23%" }}
              p={5}
              // border={"1px solid cyan"}
              borderRadius={"lg"}
              bg={"white"}
              z={10}
              color={"#181f38"}
              textAlign={"left"}
              _hover={{ backgroundColor: "green.800", color: "white" }}
            >
              <Box>
                <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=2/tp/storage/uploads/f12bf685-64af-4413-a42e-80e58ed088ee/evo-icp-hp-ps-light.png" />
              </Box>
              <Box pt={10}>
                <Text as={"h5"} fontWeight={"bold"} fontSize={"20px"}>
                  Professional Services
                </Text>
                <Text>
                  Take service delivery to the next level with Wrike’s powerful
                  platform. Manage resources, track billable hours, and make
                  informed decisions with ease.
                </Text>
                <Text
                  pt={3}
                  fontSize={"20px"}
                  fontWeight={"semibold"}
                  color={"#0a615a"}
                >
                  Learn More -&#62;
                </Text>
              </Box>
            </Box>
            <Box
              height={"500px"}
              width={{ base: "100%", lg: "23%" }}
              p={5}
              // border={"1px solid cyan"}
              className={style.flex1}
              borderRadius={"lg"}
              bg={"white"}
              z={10}
              color={"#181f38"}
              textAlign={"left"}
              _hover={{ backgroundColor: "green.800", color: "white" }}
            >
              <Box>
                <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=2/tp/storage/uploads/8b283fef-6bd1-4513-8398-228095b64833/evo-icp-hp-marketing-light.png" />
              </Box>
              <Box pt={10}>
                <Text as={"h5"} fontWeight={"bold"} fontSize={"20px"}>
                  Marketing
                </Text>
                <Text>
                  Empower your marketing team with customizable workflows,
                  leading DAM tools, and dynamic reporting to help create
                  high-performing campaigns.
                </Text>
                <Text
                  pt={3}
                  fontSize={"20px"}
                  fontWeight={"semibold"}
                  color={"#0a615a"}
                >
                  Learn More -&#62;
                </Text>
              </Box>
            </Box>
            <Box
              height={"500px"}
              width={{ base: "100%", lg: "23%" }}
              p={5}
              // border={"1px solid cyan"}
              className={style.flex1}
              borderRadius={"lg"}
              bg={"white"}
              z={10}
              color={"#181f38"}
              textAlign={"left"}
              _hover={{ backgroundColor: "green.800", color: "white" }}
            >
              <Box>
                <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=2/tp/storage/uploads/4486fa19-a0c3-4f16-8d12-60ddfefec7c8/evo-icp-hp-pm-light.png" />
              </Box>
              <Box pt={10}>
                <Text as={"h5"} fontWeight={"bold"} fontSize={"20px"}>
                  Project Management
                </Text>
                <Text>
                  Be the collaborative force that unifies your business with
                  improved planning, risk management, and automation software to
                  deliver better results.
                </Text>
                <Text
                  pt={3}
                  fontSize={"20px"}
                  fontWeight={"semibold"}
                  color={"#0a615a"}
                >
                  Learn More -&#62;
                </Text>
              </Box>
            </Box>
            <Box
              height={"500px"}
              width={{ base: "100%", lg: "23%" }}
              p={5}
              // border={"1px solid cyan"}
              className={style.flex1}
              borderRadius={"lg"}
              bg={"white"}
              z={10}
              color={"#181f38"}
              textAlign={"left"}
              _hover={{ backgroundColor: "green.800", color: "white" }}
            >
              <Box>
                <Image src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=2/tp/storage/uploads/0eadfaae-5c62-44fe-a375-cfdaab468ac0/evo-icp-hp-it-light.png" />
              </Box>
              <Box pt={10}>
                <Text as={"h5"} fontWeight={"bold"} fontSize={"20px"}>
                  IT
                </Text>
                <Text>
                  Be the collaborative force that unifies your business with
                  improved planning, risk management, and automation software to
                  deliver better results.
                </Text>
                <Text
                  pt={3}
                  fontSize={"20px"}
                  fontWeight={"semibold"}
                  color={"#0a615a"}
                >
                  Learn More -&#62;
                </Text>
              </Box>
            </Box>
          </Flex>
          <Text
            textAlign={"center"}
            color={"#0a615a"}
            fontWeight={"bold"}
            fontSize="18px"
            pt={10}
          >
            See all teams -&#62;
          </Text>
          <Flex pt={10} alignContent={"center"}>
            <Button
              margin="auto"
              color={"white"}
              bg={"rgb(34 197 94)"}
              _hover={{ bg: "rgba(34,197,94,0.8)" }}
              textAlign="center"
            >
              Get Started
            </Button>
          </Flex>
        </Box>
        <Box backgroundColor="#181f38">
          <Flex
            direction={{ base: "column", lg: "row" }}
            height={{ base: "fit-content", lg: "500px" }}
            style={{
              width: "80%",
              // border: "1px solid red",
              margin: "auto",
              marginBottom: "20px",

              justifyContent: "space-between",
            }}
          >
            <Box width={{ base: "100%", lg: "50%" }} p={20}>
              <Text
                as={"h4"}
                fontSize="14px"
                fontWeight={"bold"}
                color="gray.500"
                pb={10}
              >
                HOLIDAY PROMOTION
              </Text>
              <Text
                as={"h2"}
                fontSize={"22px"}
                fontWeight={"bold"}
                color="white"
                pb={8}
              >
                Get your free gift!
              </Text>
              <Text
                as={"h3"}
                fontSize={"18px"}
                fontWeight={"bold"}
                color="white"
              >
                For a limited time only, Wrike is offering a free gift to new
                customers! Sign up with a qualifying subscription before
                December 31 to claim your prize.
              </Text>
              <Text
                color={"green.400"}
                cursor={"pointer"}
                pt={10}
                fontSize={20}
              >
                Learn More -&#62;
              </Text>
            </Box>
            <Box
              width={{ base: "100%", lg: "40%" }}
              height={{ base: "700px", lg: "100%" }}
            >
              <Image
                width={"100%"}
                height={"100%"}
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/24da2538-075d-4fa9-9a78-b73af61d7628/gift-by-wrike-promo-2x.png"
              />
            </Box>
          </Flex>
        </Box>
        <Box backgroundColor="#ffff">
          <Flex
            direction={{ base: "column", lg: "row" }}
            height={{ base: "fit-content", lg: "500px" }}
            textAlign={{ base: "center", lg: "left" }}
            style={{
              width: "80%",
              // border: "1px solid red",
              margin: "auto",
              marginBottom: "20px",

              justifyContent: "space-between",
            }}
          >
            <Box
              width={{ base: "100%", lg: "35%" }}
              pt={20}
              // border={"1px solid red"}
            >
              <Text
                as={"h4"}
                fontSize="14px"
                fontWeight={"bold"}
                color="gray.500"
                pb={10}
              >
                BE THE MASTER OF YOUR DATA
              </Text>
              <Text as={"h2"} fontSize={"22px"} fontWeight={"bold"} pb={8}>
                Robust, industry-leading security
              </Text>
              <Text as={"h3"} fontSize={"18px"} fontWeight={"bold"}>
                Ensure peace of mind for your organization with Wrike’s
                enterprise-grade security, including user authentication,
                role-based access control, and 99.9% uptime.
              </Text>
              <Text as={"h3"} fontSize={"18px"} fontWeight={"bold"}>
                Add an extra layer of security with the Wrike Lock add-on. Own
                and manage your encryption keys for maximum control of your
                cloud data.
              </Text>
              <Text
                color={"green.400"}
                cursor={"pointer"}
                pt={10}
                fontSize={20}
              >
                Learn More -&#62;
              </Text>
            </Box>
            <Box width={{base:"100%",lg:"60%"}} height={{ base: "700px", lg: "100%" }}>
              <Image
                width={"100%"}
                height={"100%"}
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/46b5c5fb-dfa2-4aae-a1d0-3e5c7220944c/rebrand-screenshot-lock-scheme-white.png"
              />
            </Box>
          </Flex>
        </Box>
      </Stack>
    </div>
  );
};

export default ContentHomePage;
