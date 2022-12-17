import { ReactNode } from "react";
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import style from "./pricing.module.css";

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function ThreeTierPricing() {
  return (
    <>
      <Box py={12}>
        <VStack spacing={2} textAlign="center">
          <Heading as="h1" fontSize="4xl">
            Plans For Every Team
          </Heading>
          <Text fontSize="lg" color={"gray.500"}>
            Start with 14-day free trial. No credit card needed. Cancel at
            anytime.
          </Text>
        </VStack>
        <Stack
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justify="center"
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <PriceWrapper>
            <Box py={4} px={12}>
              <Text fontWeight="500" fontSize="3xl">
                Free
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  0
                </Text>
                <Text fontSize="1xl" color="gray.500">
                  user/month
                </Text>
              </HStack>
            </Box>
            <VStack
              bg={useColorModeValue("blue.50", "blue.700")}
              py={5}
              borderBottomRadius={"xl"}
            >
              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="#08cf65" fontSize="1xl" />
                  Centralized task mangement
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
                <Button
                  w="full"
                  colorScheme="green"
                  variant="outline"
                  color="#08cf65"
                  mt={20}
                  p={7}
                >
                  Get Started
                </Button>
              </Box>

              <List spacing={3} textAlign="left" px={12} pt={5} fontSize="2xl">
                <ListItem>Key Feature</ListItem>
              </List>

              <List spacing={3} textAlign="start" px={12} pt={5}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="#08cf65" fontSize="1xl" />
                  Web,desktopt and mobile
                </ListItem>
              </List>

              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="#08cf65" fontSize="1xl" />
                  Project &task management
                </ListItem>
              </List>

              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="#08cf65" fontSize="1xl" />
                  Board & Table view
                </ListItem>
              </List>

              <List spacing={3} textAlign="start" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="#08cf65" fontSize="1xl" />
                  Compare all Feature
                </ListItem>
              </List>

              <Box w="80%" pt={7}>
                <Button
                  w="full"
                  colorScheme="green"
                  variant="outline"
                  color="#08cf65"
                  mt={80}
                  p={7}
                >
                  Get Started
                </Button>
              </Box>

              <List spacing={2} textAlign="start" px={12} fontWeight={300}>
                <ListItem>No credit card required</ListItem>
              </List>
            </VStack>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("#08cf65")}
                  px={3}
                  py={1}
                  color={useColorModeValue("white.900", "white.300")}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  Most Popular
                </Text>
              </Box>
              <Box py={4} px={12} mt={5}>
                <Text fontWeight="500" fontSize="2xl">
                  Business
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    24
                  </Text>
                  <Text fontSize="1xl" color="gray.500">
                    user/month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    unlimited build minutes
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Effective Team Management
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    5TB Lorem, ipsum dolor.
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="green.300"
                    color="#08cf65"
                    variant="outline"
                    mt={26.5}
                    p={7}
                  >
                    Get Started
                  </Button>
                </Box>

                <List
                  spacing={3}
                  textAlign="left"
                  px={12}
                  pt={5}
                  fontSize="2xl"
                >
                  <ListItem>Everything in Free </ListItem>
                </List>

                <List spacing={3} textAlign="start" px={12} pt={5}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    unlimited Project
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Unlimted tasks & substak
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    unlimted request forms
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    20 free collbrators
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Custome OverFlow
                  </ListItem>

                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Analytics view
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Compare all Feature
                  </ListItem>
                </List>

                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="green"
                    variant="outline"
                    color="#08cf65"
                    mt={80}
                    p={7}
                  >
                    Get Started
                  </Button>
                </Box>

                <List spacing={2} textAlign="start" px={12} fontWeight={300}>
                  <ListItem>No credit card required</ListItem>
                </List>
              </VStack>
            </Box>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("#5690CA")}
                  px={3}
                  py={1}
                  color={useColorModeValue("blue.900", "blue.300")}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  NEW
                </Text>
              </Box>
              <Box py={4} px={12} mt={5}>
                <Text fontWeight="500" fontSize="2xl">
                  Entrprice
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    30
                  </Text>
                  <Text fontSize="1xl" color="gray.500">
                    user/month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Enterprices Grade Security
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Enter prices Stablilty
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    unlimited build minutes
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="green.300"
                    color="#08cf65"
                    variant="outline"
                    mt={26.5}
                    p={7}
                  >
                    Get Started
                  </Button>
                </Box>

                <List
                  spacing={3}
                  textAlign="left"
                  px={12}
                  pt={5}
                  fontSize="2xl"
                >
                  <ListItem>All in Entrprice </ListItem>
                </List>

                <List spacing={3} textAlign="start" px={12} pt={5}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Loked Spaces
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Advance Reporting & Bi
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Team Utilization
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Performance Dashboard
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Job Roles
                  </ListItem>

                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Sharepoint & HTML
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Automation Action
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    10 GB Storage per user
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Compare All Feature
                  </ListItem>
                </List>

                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="green"
                    variant="outline"
                    color="#08cf65"
                    mt={60}
                    p={7}
                  >
                    Get Started
                  </Button>
                </Box>

                <List spacing={2} textAlign="start" px={12} fontWeight={300}>
                  <ListItem>No credit card required</ListItem>
                </List>
              </VStack>
            </Box>
          </PriceWrapper>

          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-16px"
                left="50%"
                style={{ transform: "translate(-50%)" }}
              >
                <Text
                  textTransform="uppercase"
                  bg={useColorModeValue("#08cf65")}
                  px={3}
                  py={1}
                  color={useColorModeValue("Yellow.900", "Yellow.300")}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl"
                >
                  MOST ENHANCED
                </Text>
              </Box>
              <Box py={4} px={12} mt={5}>
                <Text fontWeight="500" fontSize="2xl">
                  Pinnacle
                </Text>
                <HStack justifyContent="center">
                  <Text fontSize="3xl" fontWeight="600">
                    $
                  </Text>
                  <Text fontSize="5xl" fontWeight="900">
                    40
                  </Text>
                  <Text fontSize="1xl" color="gray.500">
                    user/month
                  </Text>
                </HStack>
              </Box>
              <VStack
                bg={useColorModeValue("gray.50", "gray.700")}
                py={4}
                borderBottomRadius={"xl"}
              >
                <List spacing={3} textAlign="start" px={12}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Advanced Tools
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    Analytics for complex work
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    For Teams work needs
                  </ListItem>
                </List>
                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="green.300"
                    color="#08cf65"
                    variant="outline"
                    mt={26.5}
                    p={7}
                  >
                    Get Started
                  </Button>
                </Box>

                <List
                  spacing={3}
                  textAlign="left"
                  px={12}
                  pt={5}
                  fontSize="2xl"
                >
                  <ListItem>Everything in Free </ListItem>
                </List>

                <List spacing={3} textAlign="start" px={12} pt={5}>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    unlimited Project
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Unlimted tasks & substak
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    unlimted request forms
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    20 free collbrators
                  </ListItem>
                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Custome OverFlow
                  </ListItem>

                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Analytics view
                  </ListItem>

                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Team Utilization
                  </ListItem>

                  <ListItem>
                    <ListIcon as={FaCheckCircle} color="#08cf65" />
                    Compare all Feature
                  </ListItem>
                </List>

                <Box w="80%" pt={7}>
                  <Button
                    w="full"
                    colorScheme="green"
                    variant="outline"
                    color="#08cf65"
                    mt={60}
                    p={7}
                  >
                    Get Started
                  </Button>
                </Box>

                <List spacing={2} textAlign="start" px={12} fontWeight={300}>
                  <ListItem>No credit card required</ListItem>
                </List>
              </VStack>
            </Box>
          </PriceWrapper>
        </Stack>
      </Box>

      <div>
        <div className={style.middleTag}>
          <h1>Compare features across our plans</h1>
          <p>Take a closer look </p>
        </div>

        <div className={style.onlyText}>
          <h1>
            The pricing outlined herein is valid only as to new purchases
            occurring on or after October 25, 2022, and is not offered and does
            not apply to any prior purchases. Wrike reserves the
          </h1>
          <p>
            right to adjust its packaging and pricing at any time. Amount shown
            is price per month and billed on an annual per user basis.
          </p>
        </div>

        <div className={style.compnylogo}>
          <div className={style.compnylogo_1}>
            <h1>TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</h1>
          </div>
          <div className={style.compnylogo_2}>
            <img
              src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-google.svg"
              alt="google"
            />
            <img
              src="https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos.svg"
              alt="syneos"
            />
            <img
              style={{ width: "40px" }}
              src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-lyft.svg"
              alt="lyft"
            />
            <img
              src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-siemens.svg"
              alt="simens"
            />
            <img
              src="https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon.svg"
              alt="nickldeon"
            />
            <img
              style={{ width: "55px" }}
              src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-oglivy.svg"
              alt="ogilvy"
            />
            <img
              src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-snowflake.svg"
              alt="anowwfalke"
            />
          </div>
        </div>

        <div className={style.headerpard}>
          <div>
            <div className={style.headerpard_1}>
              <h1>Add-on Features</h1>
              <p>
                An add-on is a set of premium features that you can add to your
                Wrike account for an additional fee. Enhance your plan to unlock
                more value for your team.
              </p>
            </div>
          </div>

          <div className={style.gridTag}>
            <div className={style.gridTag_div1}>
              <img
                src="https://web-static.wrike.com/tp/storage/uploads/9a630f3b-764c-4d28-9aac-fb26f46479f5/refresh-icon-changes-scale.svg"
                alt="as"
              />
              <h3>Auto-organize your intake</h3>
              <h4>
                Save time and keep important details at your teams’ fingertips —
                Wrike’s project dashboard automatically prioritizes tasks for
                you.
              </h4>
            </div>

            <div className={style.gridTag_div1}>
              <img
                src="https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-manage-anything.svg"
                alt="a1"
              />
              <h3>Custom-build for your teams</h3>
              <h4>
                Pin important projects and decide exactly what to monitor in
                your project dashboard, including tasks by custom status.
              </h4>
            </div>

            <div className={style.gridTag_div1}>
              <img
                src="https://web-static.wrike.com/tp/storage/uploads/eecf8e71-a63b-433e-88c6-80a3a549644f/rebrand-icon-visibility-binoculars-1.svg"
                alt="ao"
              />
              <h3>Gain big picture visibility</h3>
              <h4>
                Wrike’s program management dashboard helps you assess ongoing
                work at any level: team, project, department, or
                organization‑wide.
              </h4>
            </div>

            <div className={style.gridTag_div1}>
              <img
                src="https://web-static.wrike.com/tp/storage/uploads/eecf8e71-a63b-433e-88c6-80a3a549644f/rebrand-icon-visibility-binoculars-1.svg"
                alt="ao"
              />
              <h3>Gain big picture visibility</h3>
              <h4>
                Wrike’s program management dashboard helps you assess ongoing
                work at any level: team, project, department, or
                organization‑wide.
              </h4>
            </div>
          </div>
        </div>

        <div className={style.faq}>
          <div>
            <Accordion>
              <AccordionItem className={style.faq_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      What are the different types of licenses?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.faq_2}
                  textAlign="left"
                >
                  Wrike has a variety of different options available to suit
                  your team, including three types of user licenses – regular
                  users, external users, and collaborators. For regular and
                  external users, there is a charge per user. You’ll get 20
                  collaborator invites or 15% of your license count (whichever
                  is greater) with no additional charge included with your
                  subscription. If this is not enough, please speak with your
                  Wrike representative to discuss other options. Within these,
                  there are full and guest licenses. A full license (regular
                  users and external users) gives you access to every feature
                  within your plan but external users are limited to certain
                  access rights. However, a guest license (collaborators) only
                  gives you some basic functions.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className={style.faq_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      What happens when my trial has expired?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.faq_2}
                  textAlign="left"
                >
                  Your account will be blocked until you choose what you’d like
                  to do with it. From here, you can either downgrade it to the
                  free version or reach out to your Wrike representative. They
                  will be able to discuss the next steps for choosing a plan and
                  whether a trial extension is possible.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className={style.faq_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      How do i purchase a subscriptiion?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.faq_2}
                  textAlign="left"
                >
                  If you are a first-time user, enter your business email at the
                  top of the page to get your 14-day free trial. You can give us
                  a call to get set up or wait for one of our representatives to
                  get in touch to find the right solution for your team. If
                  you've completed a trial, you can purchase the Team plan for
                  up to 25 users and the Business plan for up to 15 users with
                  no add-ons in the Account section of your workspace. For a
                  larger number of users, you'll need to contact your Wrike
                  representative. Wrike is sold in groups of users. For accounts
                  of up to 30 seats, subscriptions are sold in groups of five.
                  For accounts of 30 to 100 seats, subscriptions are sold in
                  groups of 10. For accounts above 100 seats, subscriptions are
                  sold in groups of 25. Wrike Business and above are only
                  available as an annual subscription.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className={style.faq_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      How do Wrike’s dashboards with reporting?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.faq_2}
                  textAlign="left"
                >
                  Professional Services refers to the consultancy service that
                  we offer (see the question below). Wrike offers a selection of
                  Professional Services packages designed to successfully
                  onboard your team. Our consultancy team will make sure you get
                  the most from the Wrike solution that you have selected. To
                  learn more about Wrike’s consultancy options, please see our
                  Professional Services page.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className={style.faq_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      What is professional Service?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.faq_2}
                  textAlign="left"
                >
                  Wrike is an intuitive collaboration solution. However,
                  aligning your entire team on a consistent way of working,
                  configuring Wrike, and ensuring long-term adoption can be
                  tricky. Our Professional Services team specializes in
                  understanding and onboarding teams of all sizes, no matter
                  their challenges. We recommend all new teams work with a
                  consultant during onboarding, and insist that teams of 20+
                  utilize a guided deployment.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className={style.faq_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      What is professional Service explain?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.faq_2}
                  textAlign="left"
                >
                  Wrike is an intuitive collaboration solution. However,
                  aligning your entire team on a consistent way of working,
                  configuring Wrike, and ensuring long-term adoption can be
                  tricky. Our Professional Services team specializes in
                  understanding and onboarding teams of all sizes, no matter
                  their challenges. We recommend all new teams work with a
                  consultant during onboarding, and insist that teams of 20+
                  utilize a guided deployment.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className={style.faq_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      What is professional Service has expired?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.faq_2}
                  textAlign="left"
                >
                  Wrike is an intuitive collaboration solution. However,
                  aligning your entire team on a consistent way of working,
                  configuring Wrike, and ensuring long-term adoption can be
                  tricky. Our Professional Services team specializes in
                  understanding and onboarding teams of all sizes, no matter
                  their challenges. We recommend all new teams work with a
                  consultant during onboarding, and insist that teams of 20+
                  utilize a guided deployment.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className={style.faq_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      What is about your Service?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.faq_2}
                  textAlign="left"
                >
                  Wrike is an intuitive collaboration solution. However,
                  aligning your entire team on a consistent way of working,
                  configuring Wrike, and ensuring long-term adoption can be
                  tricky. Our Professional Services team specializes in
                  understanding and onboarding teams of all sizes, no matter
                  their challenges. We recommend all new teams work with a
                  consultant during onboarding, and insist that teams of 20+
                  utilize a guided deployment.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
