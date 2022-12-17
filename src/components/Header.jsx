import React, { useEffect, useState } from "react";
import style from "./Header.module.css";
import {
  border,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../Images/Logo.png";
import { FiChevronDown } from "react-icons/fi";
import { MdMenu, MdOutlineLanguage } from "react-icons/md";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // const [cheronIcon, setChironIcon] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  // const { Open, oOpen, Close } = useDisclosure()
  const btnRef = React.useRef();
  // const btnRef1 = React.useRef()
  const handleSize = () => {
    setWidth(window.innerWidth);
    // console.log(width)
  };

  const small = () => {
    return (
      <Stack
        direction={"row"}
        align={"center"}
        // className="relative font-bold items-center h-20 w-[87%]  m-auto pt-2 pb-2  "
        position={"relative"}
        fontSize={"bold"}
        height={"80px"}
        width={"87%"}
        pt={"0.5rem"}
        pb={"0.5rem"}
        // border={"1px solid cyan"}
        margin={"auto"}
        alignItems={"center"}

        // style={{
        //   position:"relative",
        //   fontWeight:"bold",
        //   height: "80px",
        //   width:"87%",
        //   paddingTop:"0.5rem",
        //   border:"1px solid cyan",
        // }}
      >
        <Box
          // className="w-[50%] h-[100%] "
          w={"50%"}
          h={"100%"}
        >
          <Image
            // className="relative h-[80%] w-[40%] md:w-[30%] md:h-[90%] lg:w-[20%] lg:h-[100%] "
            position={"relative"}
            h={{ base: "80%", md: "90%", lg: "100%" }}
            w={{ base: "40%", md: "30%", lg: "20%" }}
            src={logo}
          />
        </Box>
        <Box
          // className=" absolute right-2 top-3 md:right-4 md:top-5 text-[30px]"
          position={"absolute"}
          top={{ base: "0.75rem", md: "1.25rem" }}
          right={{ base: "0.5rem", md: "1rem" }}
          fontSize={"30px"}
          ref={btnRef}
          onClick={onOpen}
        >
          <MdMenu />
        </Box>
        <Drawer
          size={{base:"full",md:"sm"}}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
          // className="bg-red-500 w-[300px]"
          bgColor={"#181f38"} color={"white"}
          >
            <DrawerCloseButton />
            <DrawerHeader><Image src={logo } /></DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Stack>
    );
  };

  const large = () => {
    return (
      <Flex
        // className=" font-bold items-center h-18 w-[87%] m-auto pt-2 pb-2 "
        fontWeight={"bold"}
        alignItems={"center"}
        w={"87%"}
        height={"5rem"}
        // border={"1px solid cyan"}
        margin={"auto"}
        pt={"0.5rem"}
        pb={"0.5rem"}
      >
        <Stack
          className={style.headLeft}
          direction={"row"}
          align={"center"}
          // className="h-16 w-[50%] justify-around "
          height={"4rem"}
          width={"50%"}
          justify={"space-around"}
        >
          <Image
            // className="relative h-[100%] w-[20%] "
            position={"relative"}
            height={"100%"}
            width={"20%"}
            src={logo}
            mr={"0.5rem"}
          />
          {/* <Text 
        className='text-2xl font-semibold absolute left-12 top-3'
        >
            wrike
        </Text> */}
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiChevronDown />}
              // colorScheme={"red"}
              // backgroundColor="green"
              // onClick={oOpen}
              // className={style.menuButton}
              // className=" rounded-md hover:backdrop-blur-sm hover:bg-white/10 h-10 w-28 text-center p-1"
              // rounded="md"
              // style={{hover:{color:"green}}}
              // style={{
              //   backgroundColor:"transparent",
              //   height:"100px",
              //   width:"100px",
              //   textAlign:"center"
              //   // hover:{backgroundColor:"green"}

              // }}

              // _hover={{ backgroundColor: "red", color: "black", height: "10px" }}
            >
              Why ProFlo
            </MenuButton>
            <MenuList
              style={{
                width: "100vw",
                // position:"absolute",
                // left:"0",
                height: "fit-content",
                border: "1px solid #181f38",
                color: "black",
                backgroundColor: "#181f38",
                marginTop: "10px",
              }}
            >
              <motion.div
              // initial={{
              //   y:-200,
              //   opacity:0
              // }}
              // whileInView={{
              //   y:1,
              //   opacity:1
              // }}
              // transition={{duration:2}}
              >
                <MenuItem
                  style={{ width: "100%", display: "flex row" }}
                  gap={14}
                >
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      For Teams
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-marketing.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Marketing</h1>
                        <p style={{ fontSize: "16px" }}>
                          Streamline proofing and reporting for seamless
                          campaigns.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-case.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Professional Services
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Take control of billable hours and increase client
                          satisfaction.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-project-1.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Project Managers</h1>
                        <p style={{ fontSize: "16px" }}>
                          Plan Agile projects, track deadlines, and deliver
                          results.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-palette.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Creative & Design
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Create high-quality assets and get them approved in
                          record time.
                        </p>
                      </Box>
                    </Box>
                  </div>
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Use cases
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-dependency.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Workflow Management
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Use custom statuses and automate your team workflows.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-board.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Task Management</h1>
                        <p style={{ fontSize: "16px" }}>
                          Organize incoming requests and eliminate repetitive
                          tasks.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-pie-chart.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Project Tracking</h1>
                        <p style={{ fontSize: "16px" }}>
                          Track progress and monitor multiple projects with
                          dashboards.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-folder.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Resource Management
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          View team workloads and reallocate tasks to avoid
                          burnout.
                        </p>
                      </Box>
                    </Box>
                  </div>
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      APPS & INTEGRATIONS
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-slack.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Slack</h1>
                        <p style={{ fontSize: "16px" }}>
                          Turn a casual Slack chat into an actionable Wrike
                          task.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-salesforce.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Salesforce</h1>
                        <p style={{ fontSize: "16px" }}>
                          Integrate client data seamlessly between Wrike and
                          Salesforce.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-microsoft-teams.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}> Microsoft Teams</h1>
                        <p style={{ fontSize: "16px" }}>
                          Collaborate on Wrike projects without leaving
                          Microsoft Teams.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab1-inregration-adobe.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Adobe</h1>
                        <p style={{ fontSize: "16px" }}>
                          Accelerate Wrike design tasks from Adobe Creative
                          Cloud.
                        </p>
                      </Box>
                    </Box>
                  </div>
                </MenuItem>
                <MenuItem></MenuItem>
                {/* <MenuItem onClick={() => console.log("hi")}>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem> */}
              </motion.div>
            </MenuList>
          </Menu>

          {/* <Menu className="">
            <MenuButton
              // className=" rounded-md hover:backdrop-blur-sm hover:bg-white/10 h-10 w-28 p-2"
              as={Button}
              rightIcon={<FiChevronDown />}
            >
              Features
            </MenuButton>
            <MenuList
            //  className="h-[500px] w-[1000px] bg-red-500 absolute left-[-300px]"
             >
              <MenuItem onClick={() => console.log("hi")}>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu> */}
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Features
            </MenuButton>
            <MenuList
              style={{
                width: "100vw",
                height: "fit-content",
                border: "1px solid #181f38",
                color: "black",
                backgroundColor: "#181f38",
                marginTop: "10px",
              }}
            >
              <motion.div
              // initial={{
              //   y:-200,
              //   opacity:0
              // }}
              // whileInView={{
              //   y:1,
              //   opacity:1
              // }}
              // transition={{duration:2}}
              >
                <MenuItem
                  style={{ width: "100%", display: "flex row" }}
                  gap={14}
                >
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      For Teams
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-dashboard.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Dashboards</h1>
                        <p style={{ fontSize: "16px" }}>
                          Visualize tasks, processes, analytics, and more.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-speech.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Proofing</h1>
                        <p style={{ fontSize: "16px" }}>
                          Streamlined proofing and collaboration in one place.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-user-group.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Project Resource Planning
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Plan and allocate resources for timely delivery.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-items.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Custom Item Types
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Tailor work items to fit your specific workplace.
                        </p>
                      </Box>
                    </Box>
                  </div>
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Use cases
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab3-settings.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Automation</h1>
                        <p style={{ fontSize: "16px" }}>
                          Define and trigger automated workflows to eliminate
                          manual efforts.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-subtasks.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Cross-Tagging</h1>
                        <p style={{ fontSize: "16px" }}>
                          Unparalleled visibility across multiple work streams.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-dependency.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Gantt Charts</h1>
                        <p style={{ fontSize: "16px" }}>
                          Interactive project scheduling across teams.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-form.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Dynamic Request Forms
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Custom forms powered by conditional logic.
                        </p>
                      </Box>
                    </Box>
                  </div>
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      APPS & INTEGRATIONS
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-mobile.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Mobile & Desktop Apps
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Work from anywhere with our robust app experience.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-board.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}> Kanban Boards</h1>
                        <p style={{ fontSize: "16px" }}>
                          Instantly view project progress and create customized
                          workflows.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-check-circle.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}> Approvals</h1>
                        <p style={{ fontSize: "16px" }}>
                          Keep approvers in the loop from start to finish.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-intersection.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Integrations</h1>
                        <p style={{ fontSize: "16px" }}>
                          Over 400 popular apps plus custom integrations.
                        </p>
                      </Box>
                    </Box>
                  </div>
                </MenuItem>
                <MenuItem></MenuItem>
                {/* <MenuItem onClick={() => console.log("hi")}>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem> */}
              </motion.div>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Resources
            </MenuButton>
            <MenuList
              style={{
                width: "100vw",
                height: "fit-content",
                border: "1px solid #181f38",
                color: "black",
                backgroundColor: "#181f38",
                marginTop: "10px",
              }}
            >
              <motion.div
              // initial={{
              //   y:-200,
              //   opacity:0
              // }}
              // whileInView={{
              //   y:1,
              //   opacity:1
              // }}
              // transition={{duration:2}}
              >
                <MenuItem
                  style={{ width: "100%", display: "flex row" }}
                  gap={14}
                >
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      For Teams
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-dashboard.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Dashboards</h1>
                        <p style={{ fontSize: "16px" }}>
                          Visualize tasks, processes, analytics, and more.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-speech.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Proofing</h1>
                        <p style={{ fontSize: "16px" }}>
                          Streamlined proofing and collaboration in one place.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-user-group.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Project Resource Planning
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Plan and allocate resources for timely delivery.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-items.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Custom Item Types
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Tailor work items to fit your specific workplace.
                        </p>
                      </Box>
                    </Box>
                  </div>
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      Use cases
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab3-settings.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Automation</h1>
                        <p style={{ fontSize: "16px" }}>
                          Define and trigger automated workflows to eliminate
                          manual efforts.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-subtasks.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Cross-Tagging</h1>
                        <p style={{ fontSize: "16px" }}>
                          Unparalleled visibility across multiple work streams.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-dependency.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Gantt Charts</h1>
                        <p style={{ fontSize: "16px" }}>
                          Interactive project scheduling across teams.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-form.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Dynamic Request Forms
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Custom forms powered by conditional logic.
                        </p>
                      </Box>
                    </Box>
                  </div>
                  <div
                    style={{
                      width: "23%",
                      marginTop: "30px",
                      marginLeft: "80px",
                    }}
                  >
                    <h6
                      style={{
                        textTransform: "uppercase",
                        color: "gray",
                        fontSize: "14px",
                        fontWeight: "bold",
                        marginBottom: "20px",
                      }}
                    >
                      APPS & INTEGRATIONS
                    </h6>

                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-mobile.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>
                          Mobile & Desktop Apps
                        </h1>
                        <p style={{ fontSize: "16px" }}>
                          Work from anywhere with our robust app experience.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-board.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}> Kanban Boards</h1>
                        <p style={{ fontSize: "16px" }}>
                          Instantly view project progress and create customized
                          workflows.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-check-circle.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}> Approvals</h1>
                        <p style={{ fontSize: "16px" }}>
                          Keep approvers in the loop from start to finish.
                        </p>
                      </Box>
                    </Box>
                    <Box
                      style={{
                        color: "white",
                        display: "flex",
                        position: "relative",
                        marginBottom: "20px",
                      }}
                      gap={5}
                      _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      className={style.menuDiv}
                    >
                      <Image
                        style={{}}
                        src="https://web-static.wrike.com/tp/storage/uploads/62538033-1d86-410b-bef8-73a09a6c52be/icon-header-tab2-intersection.svg"
                      />
                      <Box>
                        <h1 style={{ fontWeight: "bold" }}>Integrations</h1>
                        <p style={{ fontSize: "16px" }}>
                          Over 400 popular apps plus custom integrations.
                        </p>
                      </Box>
                    </Box>
                  </div>
                </MenuItem>
                <MenuItem></MenuItem>
                {/* <MenuItem onClick={() => console.log("hi")}>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem> */}
              </motion.div>
            </MenuList>
          </Menu>
          <Button
          // className=" rounded-md hover:backdrop-blur-sm hover:bg-white/10 h-10 w-20 p-2"
          >
            Pricing
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          // className=" w-[35%] items-center ml-[12%] h-[100%] justify-evenly align-center "
          className={style.headRight}
        >
          <Box
          // className="hover:backdrop-blur-sm hover:bg-white/10 h-10 w-32 items-center text-center rounded-md "
          >
            <Button
              // className=" w-[100%] h-[100%] "
              bg={"transparent"}
              _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              Contact Sales
            </Button>
          </Box>
          <Box
          // className="hover:backdrop-blur-sm hover:bg-white/10 h-10 w-16 items-center text-center rounded-md "
          >
            {/* <MdOutlineLanguage fontSize={24} /> */}

            <Text
              // className=" w-[100%] h-[100%] "

              // border={"1px solid red"}
              backgroundColor={"transparent"}
              as={Button}
              leftIcon={<MdOutlineLanguage fontSize={22} />}
              _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              En
            </Text>
            {/* <Button className=" w-[100%] h-[100%] ">En</Button> */}
          </Box>
          <Box
          // className="hover:backdrop-blur-sm hover:bg-white/10 h-10 w-16 items-center text-center rounded-md text-green-500 "
          >
            <Button
              // className="w-[100%] h-[100%] "
              backgroundColor={"transparent"}
              _hover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              Login
            </Button>
          </Box>
          <Box
          // className="hover:backdrop-blur-sm hover:bg-green-500/80 h-10 w-32 items-center text-center rounded-md bg-green-500"
          >
            <Button
              bg={"rgb(34 197 94)"}
              _hover={{ bg: "rgba(34,197,94,0.8)" }}
            >
              Start for free
            </Button>
          </Box>
        </Stack>
      </Flex>
    );
  };
  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return <div>{width > 1280 ? large() : small()}</div>;
};

export default Header;
