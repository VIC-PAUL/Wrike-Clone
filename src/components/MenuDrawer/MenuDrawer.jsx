import {
  Accordion,
  AccordionButton,
  Image,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
  GenericAvatarIcon,
  Tooltip,
  CardBody,
  Card,
  Text,
  Input,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { ArrowLeftIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import style from "./MenuDrawer.module.css";
import logo from "../../Images/Logo.png";
import { AiOutlineHome, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineSpaceDashboard, MdPersonAddAlt1 } from "react-icons/md";
import { CgClipboard } from "react-icons/cg";
import { useEffect } from "react";
import { GetProjectData } from "../../axios";
import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { AddProject } from "../../axios";
import { NavLink } from "react-router-dom";
export function MenuDrawer({ title = "Home" }) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [inputis, changeinput] = useState(false);
  const [value, setvalue] = useState("");
  const [project_Data, set_Project_Data] = useState([]);
  const [project_id, set_Project_id] = useState(0);
  const [count, setcount] = useState(0);
  const toast = useToast();
  let localdata=JSON.parse(localStorage.getItem("Users"));
  // let email = localdata[localdata.length-1].email ;
   let email = "pantuugurjar@gmail.com";
  console.log(email)
  useEffect(async () => {
    setLoading(true);
    let datais = await GetProjectData(email);
    set_Project_Data(datais.project);
    set_Project_id(datais.id);
    setLoading(false);
    return;
  }, []);
  return (
    <>
      <Box className={style.drawer_Box}>
        <HamburgerIcon
          className={style.drawer_menu}
          boxSize={8}
          onClick={onOpen}
        />
        <h2>{title}</h2>
      </Box>

      <Drawer placement={"left"} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent className={style.drawer_Content}>
          <DrawerHeader className={style.drawer_Header}>
            <Image src={logo} w={"160px"} pt="20px" />
            <ArrowLeftIcon
              className={style.drawer_Header_CloseIcon}
              onClick={onClose}
            />
          </DrawerHeader>
          <DrawerBody className={style.drawer_Body}>
            <Box className={style.drawer_Body_Child1}>
              <AiOutlineHome />
              <h2>Home</h2>
            </Box>
            <Box className={style.drawer_Body_Child1}>
              <MdOutlineSpaceDashboard />
              <h2>DashBaord</h2>
            </Box>
            <Box className={style.drawer_Body_Child1}>
              <Accordion defaultIndex={[0]} allowMultiple ml="-7px">
                <AccordionItem>
                  {/* w={'270px'} */}
                  <h2>
                    <AccordionButton className={style.drawer_Body_Child1}>
                      <AccordionIcon />
                      <Box as="span" flex="1" textAlign="left">
                        Projects
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Box style={{ marginLeft: "30px", height: "70%" }}>
                      {loading && (
                        <Spinner
                          thickness="4px"
                          speed="0.65s"
                          emptyColor="gray.200"
                          color="blue.500"
                          size="xl"
                        />
                      )}
                      {project_Data.map((el) => (
                        <p key={el.id}>
                          <NavLink
                            onClick={() => { onClose()}}
                            className={style.drawer_Body_Box}
                            to={`/Projects/${project_id}&${el.id}`}
                          >
                            <CgClipboard className={style.drawer_Body_Box1} />{" "}
                            {el.title}
                          </NavLink>
                        </p>
                      ))}
                      <p
                        className={style.drawer_Body_Box}
                        onClick={() => {
                          changeinput(!inputis);
                        }}
                      >
                        <AiOutlinePlus className={style.drawer_Body_Box1} />
                        Project
                      </p>
                      {inputis && (
                        <Card>
                          <CardBody marginTop="-15px" gap="10px" w={"220px"}>
                            <Input
                              onChange={(e) => {
                                setvalue(e.target.value);
                              }}
                              value={value}
                              className={style.drawer_Body_input}
                              placeholder="Enter Project Name"
                              size="sm"
                              htmlSize={2}
                              width="100%"
                            />
                            <Box>
                              <Button
                                className={style.drawer_Body_inputbutton}
                                size="sm"
                                onClick={() => {
                                  Adddata(
                                    project_id,
                                    value,
                                    project_Data,
                                    count,
                                    setcount
                                  );
                                  myTost(toast);
                                  setvalue("");
                                }}
                              >
                                
                                Submit
                              </Button>
                            </Box>
                          </CardBody>
                        </Card>
                      )}
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box className={style.drawer_Body_Child1} id={style.invite}>
              <span style={{ marginLeft: "30%" }}>
                <MdPersonAddAlt1 />
              </span>
              <h2>
                <Tooltip
                  label="This Feature is Comeing soon"
                  aria-label="A tooltip"
                >
                  Invite
                </Tooltip>
              </h2>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const Adddata = (project_id, value, project_Data, count, setcount) => {
  AddProject(project_id, value, project_Data);
  setcount(count + 1);
};

const myTost = (toast) =>
  toast({
    title: "Successfully Added.",
    description: "New Project Has Been Added.",
    status: "success",
    duration: 4000,
    isClosable: true,
    position: "top",
  });
