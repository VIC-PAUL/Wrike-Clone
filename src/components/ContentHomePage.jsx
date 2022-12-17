import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";
import React from "react";
import style from "./ContentHomePage.module.css";
import HomepageTop from "../Images/HomepageTop.png";

const ContentHomePage = () => {
  return (
    <div>
      <Stack width={"100%"} direction={"column"} gap={0}>
        <Box
          // position={"relative"}
          className={style.firstBox}
          display={{ base: "inline", lg: "flex" }}
          paddingLeft={{ base: "15%", lg: "5%", xl: "8%" }}
          paddingTop={{ base: "20px", lg: "30px" }}
          paddingRight={{ base: "15%", lg: "5%", xl: "8%" }}
          textAlign={{ base: "center", lg: "left" }}
          justifyContent={"space-between"}
          borderRadius="0% 100% 0% 100% / 98% 10% 90% 2%   "
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
              // right={{ base: "10%", lg: "0" }}
              // left={{ base: "10%", lg: "50%" }}
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
            _hover={{cursor: "pointer"}}
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
        <Box
          backgroundColor="#181f38"
          borderRadius={{ base: "0", lg: "0% 100% 0% 100% / 95% 10% 90% 5%  " }}
        >
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
        <Box
          direction={{ base: "row", lg: "column" }}
          borderRadius={{ base: "0", lg: "0% 100% 0% 100% / 95% 10% 90% 5%  " }}
          style={{
            backgroundColor: "#181f38",
            marginTop: "50px",
          }}
        >
          <Box
            width={"80%"}
            // border="1px solid red"
            style={{ margin: "auto", height: "fit-content" }}
          >
            <Box>
              {/* <Box border={"1px solid cyan"} pt={6} margin={"auto"}> */}
              <Text
                width={"60%"}
                color={"white"}
                textAlign={"center"}
                pt={6}
                margin={"auto"}
                fontWeight={"bold"}
                fontSize={{ base: "16px", md: "20px", lg: "25px", xl: "32px" }}
              >
                The Most Versatile Work Management Platform™
              </Text>
              <Text
                width={"60%"}
                color={"white"}
                textAlign={"center"}
                pt={6}
                margin={"auto"}
                mt={4}
                fontWeight={"semibold"}
                fontSize={{ base: "18px" }}
              >
                Maximize your team's performance, accelerate growth, and improve
                customer experience with Wrike's robust and extensive features
              </Text>
              {/* </Box> */}
            </Box>
            <Flex
              direction={"row"}
              // overflow={"scroll"}
              width={{ base: "100%", md: "80%", lg: "60%" }}
              gap={4}
              margin={"auto"}
              justifyContent={"space-between"}
              color={"gray.500"}
              fontSize={"20px"}
              mt={4}
            >
              <Text
                _hover={{ color: "green.500", cursor: "pointer" }}
                onClick={() => {
                  const img = document.getElementById("imageClick");
                  const text1 = document.getElementById("text1");
                  const text2 = document.getElementById("text2");
                  const text3 = document.getElementById("text3");
                  text1.innerText = "Customizable dashboards";
                  text2.innerText =
                    "Never miss a task with personalized dashboards. See what your team is working on in a comprehensive view and share progress across the organization.";
                  text3.innerText =
                    "Get a detailed overview of workloads, pin important to-dos, follow important tasks, and choose exactly what you want to see to keep a close eye on progress.";
                  img.src =
                    "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/ef0e5d1a-124a-4508-80f6-950b3b129a48/rebrand-screenshot-dashboards-resized-2x.png";
                }}
              >
                Dashboard
              </Text>
              <Text
                _hover={{ color: "green.500", cursor: "pointer" }}
                onClick={() => {
                  const img = document.getElementById("imageClick");
                  const text1 = document.getElementById("text1");
                  const text2 = document.getElementById("text2");
                  const text3 = document.getElementById("text3");
                  text1.innerText = "Collaborative cross-tagging";
                  text2.innerText =
                    "Cross-tagging allows teams to gain visibility into tasks, folders, milestones, phases, and entire projects across multiple work streams and organizational structures.";
                  text3.innerText =
                    "Tasks, folders, and projects can now live in multiple places without being duplicated. This means you spend less time managing documentation, more time creating great work.";
                  img.src =
                    "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/772ccef9-5cc8-498d-81d3-c4dae398dfb3/product-screenshot-cross-tagging-holiday-campaign.png";
                }}
              >
                Cross-tagging
              </Text>
              <Text
                _hover={{ color: "green.500", cursor: "pointer" }}
                onClick={() => {
                  const img = document.getElementById("imageClick");
                  const text1 = document.getElementById("text1");
                  const text2 = document.getElementById("text2");
                  const text3 = document.getElementById("text3");
                  text1.innerText = "Seamless integrations";
                  text2.innerText =
                    "Connect your existing apps and workflows with pre-made integrations available for over 400 popular apps, plus custom integrations for more advanced users.";
                  text3.innerText =
                    "Easily integrate apps like Salesforce, Tableau, Dropbox, Microsoft Teams, and others with just a few clicks.";
                  img.src =
                    "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/ef0e5d1a-124a-4508-80f6-950b3b129a48/rebrand-screenshot-dashboards-resized-2x.png";
                }}
              >
                Integration
              </Text>
              <Text
                _hover={{ color: "green.500", cursor: "pointer" }}
                onClick={() => {
                  const img = document.getElementById("imageClick");
                  const text1 = document.getElementById("text1");
                  const text2 = document.getElementById("text2");
                  const text3 = document.getElementById("text3");
                  text1.innerText = "Streamlined proofing software";
                  text2.innerText =
                    "Organize your feedback, files, and approvals all in one place with Wrike’s proofing feature. Automatically notify approvers when documents are ready to view.";
                  text3.innerText =
                    "Work with external collaborators and accelerate publishing with DAM integrations. With our proofing capabilities, you can even add comments directly to assets.";
                  img.src =
                    "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/772ccef9-5cc8-498d-81d3-c4dae398dfb3/product-screenshot-cross-tagging-holiday-campaign.png";
                }}
              >
                Proofing
              </Text>
              <Text
                _hover={{ color: "green.500", cursor: "pointer" }}
                onClick={() => {
                  const img = document.getElementById("imageClick");
                  const text1 = document.getElementById("text1");
                  const text2 = document.getElementById("text2");
                  const text3 = document.getElementById("text3");
                  text1.innerText = "Easy-to-Use Gantt charts";
                  text2.innerText =
                    "See the big picture of your project’s progress with a complete view of work scope and dependencies using our industry-leading Gantt charts.";
                  text3.innerText =
                    "Control multiple projects from a single platform and update timelines with our seamless drag-and-drop functionality. Collaborate with teams in real time so nobody misses a step.";
                  img.src =
                    "https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/ef0e5d1a-124a-4508-80f6-950b3b129a48/rebrand-screenshot-dashboards-resized-2x.png";
                }}
              >
                Gantt Charts
              </Text>
            </Flex>
            <Flex
              direction={{ base: "column", lg: "row" }}
              height={{ base: "fit-content", lg: "500px" }}
              style={{
                width: "100%",
                // border: "1px solid red",
                margin: "auto",
                marginBottom: "20px",

                justifyContent: "space-between",
              }}
              textAlign={"left"}
            >
              <Box width={{ base: "100%", lg: "50%" }} p={20}>
                <Text
                  id="text1"
                  as={"h2"}
                  fontSize="32px"
                  fontWeight={"bold"}
                  color="white"
                  pb={6}
                >
                  Customizable dashboards
                </Text>
                <Text
                  id="text2"
                  as={"h2"}
                  fontSize={"18px"}
                  fontWeight={""}
                  color="white"
                  pb={4}
                >
                  Never miss a task with personalized dashboards. See what your
                  team is working on in a comprehensive view and share progress
                  across the organization.
                </Text>
                <Text
                  id="text3"
                  as={"h3"}
                  fontSize={"18px"}
                  fontWeight={""}
                  color="white"
                >
                  Get a detailed overview of workloads, pin important to-dos,
                  follow important tasks, and choose exactly what you want to
                  see to keep a close eye on progress.
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
                width={{ base: "100%", lg: "50%" }}
                height={{ base: "700px", lg: "90%" }}
                mt={10}
                // border={"1px solid cyan"}
              >
                <Image
                  width={"100%"}
                  height={"100%"}
                  id="imageClick"
                  src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/ef0e5d1a-124a-4508-80f6-950b3b129a48/rebrand-screenshot-dashboards-resized-2x.png"
                />
              </Box>
            </Flex>
          </Box>
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
            <Box
              width={{ base: "100%", lg: "60%" }}
              height={{ base: "700px", lg: "100%" }}
            >
              <Image
                width={"100%"}
                height={"100%"}
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=2/tp/storage/uploads/46b5c5fb-dfa2-4aae-a1d0-3e5c7220944c/rebrand-screenshot-lock-scheme-white.png"
              />
            </Box>
          </Flex>
        </Box>
        <Box bg={"#181f38"} color={"white"} textAlign={"center"} pt={10}>
          <Text
            w={"50%"}
            margin={"auto"}
            as={"h1"}
            fontSize={"40px"}
            fontWeight={"bold"}
            pb={5}
          >
            Try our powerful work management software for free
          </Text>
          <Text
            w={"50%"}
            margin={"auto"}
            as={"h4"}
            fontSize={"20px"}
            fontWeight={"semibold"}
            pb={10}
          >
            Sign up for a free two-week trial of Wrike today — no credit card
            required.{" "}
          </Text>
          <Button
            height={{ base: "60px", lg: "50px" }}
            bg={"rgb(34 197 94)"}
            _hover={{ bg: "rgba(34,197,94,0.8)" }}
            width={{ base: "100%", lg: "30%" }}
            mb={10}
          >
            Get Started
          </Button>
        </Box>
        <Box
          bg={"#0c3245"}
          pt={10}
          pb={10}
          // border={"1px solid red"}
          margin={"auto"}
        >
          <Flex
          direction={{base:"column", md:"row"}}
          alignItems={{base:"center", md:"left"}}
          fontSize={{base:"larger",md:"large"}}
          gap={10}
            style={{
              width: "80%",
              margin: "auto",
              justifyContent: "space-between",
            }}
          >
            <Box className={style.boxFooter}
            width={{base:"100%", md:"20%"}}
            // border={"1px solid red"}

            textAlign={{base:"center",md:"left"}}
            >
              <Text color={"white"} fontWeight={"bold"} fontSize={"larger"}>
                Product
              </Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Product Tour</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Pricing</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Templates</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>App and Integration</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Task Management</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Gantt Charts</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Wrike Status</Text>
            </Box>
            <Box className={style.boxFooter} width={{base:"100%", md:"20%"}}
            // border={"1px solid red"}

            textAlign={{base:"center",md:"left"}}>
              <Text color={"white"} fontWeight={"bold"} fontSize={"larger"}>
                Solutions
              </Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>All Teams</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Marketing</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Creative</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Project Management</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Project Development</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Business Operations</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Professional Service</Text>
            </Box>
            <Box className={style.boxFooter} width={{base:"100%", md:"20%"}}
            // border={"1px solid red"}

            textAlign={{base:"center",md:"left"}}>
              <Text color={"white"} fontWeight={"bold"} fontSize={"larger"}>
                Resources
              </Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Help Center</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Community</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Webinars</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Interactive Training</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Support</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Google project management tools</Text>
              {/* <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Wrike Status</Text> */}
            </Box>
            <Box className={style.boxFooter} width={{base:"100%", md:"20%"}}
            // border={"1px solid red"}

            textAlign={{base:"center",md:"left"}}>
              <Text color={"white"} fontWeight={"bold"} fontSize={"larger"}>
              Company
              </Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>About Us</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Careers</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Our Customers</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Blog</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Events</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Newsroom</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Partner Program</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>User Conference</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Contact Us</Text>
            </Box>
            <Box className={style.boxFooter} width={{base:"100%", md:"20%"}}
            // border={"1px solid red"}

            textAlign={{base:"center",md:"left"}}>
              <Text color={"white"} fontWeight={"bold"} fontSize={"larger"}>
              Guides
              </Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Project Management Guide</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Kanban Guide</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Go-to-Market Guide</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Remote Work Guide</Text>
              {/* <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Task Management</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Gantt Charts</Text>
              <Text className={style.textFooter} width={{base:"100%",md:"20%"}}>Wrike Status</Text> */}
            </Box>
          </Flex>
          {/* <hr width={"80%"} style={{margin:"auto",marginTop:"20px", color:"#04454d"}} /> */}
          <Flex
            width={"80%"}
            margin={"auto"}
            mt={"30px"}
            // border={"1px solid green"}
            borderTop={"2px solid #04454d"}
            justifyContent={"space-between"}
          >
            <Flex
              direction={{ base: "coloumn", lg: "row" }}
              gap={10}
              style={{
                width: "20%",
                margin: "auto",
                // border: "1px solid cyan",
                justifyContent: "space-around",
              }}
            >
              <Image
                h={"100%"}
                w={"40%"}
                src="https://web-static.wrike.com/tp/static/assets/img/footer/apple_en.svg"
              />
              <Image
                h={"100%"}
                w={"40%"}
                src="https://web-static.wrike.com/tp/static/assets/img/footer/google_play_en.svg"
              />
            </Flex>
            <Flex  width={"20%"} justifyContent={"space-around"} margin={"auto"}>
              <SocialIcon
                url="https://twitter.com/wrike"
                fgColor="white"
                bgColor="transparent"
                className={style.socialIcons}
                // _hover={{backgroundColor:"rgba(47, 176, 47, 0.757)"}}
              />
              <SocialIcon
                url="https://www.facebook.com/Wrike"
                fgColor="white"
                bgColor="transparent"
                className={style.socialIcons}
              />
              <SocialIcon
                url="https://www.linkedin.com/company/wrike"
                fgColor="white"
                bgColor="transparent"
                className={style.socialIcons}
              />
              <SocialIcon
                url="https://www.youtube.com/user/WrikeTeam"
                fgColor="white"
                bgColor="transparent"
                className={style.socialIcons}
              />
              <SocialIcon
                url="https://www.instagram.com/wriketeam/"
                fgColor="white"
                bgColor="transparent"
                className={style.socialIcons}
              />
            </Flex>
            <Box width={"30%"}>
              <Text color={"rgba(174, 174, 174, 0.85)"}>©2006-2022 Wrike, Inc. All rights reserved. Patented.</Text>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </div>
  );
};

export default ContentHomePage;
