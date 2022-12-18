import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Select,
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MenuDrawer } from "../../components/MenuDrawer/MenuDrawer";
import style from "./SingleProjectPage.module.css";
import { BiSearch, BiFilterAlt } from "react-icons/bi";
import { BsArrowDownUp, BsCircle } from "react-icons/bs";
import { FiUsers, FiMoreHorizontal } from "react-icons/fi";
import { MdAddTask, MdLeaderboard } from "react-icons/md";
import { GrTasks, GrCheckbox } from "react-icons/gr";
import { RxDotFilled } from "react-icons/rx";

import {
  AiOutlineQuestionCircle,
  AiOutlinePlusSquare,
  AiOutlineTable,
  AiOutlineCalendar,
  AiFillCloseCircle,
} from "react-icons/ai";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { AddTask, GetProjectDataById } from "../../axios";
import StatusBar from "../../components/StatusBar/StatusBar";
import RiskBar from "../../components/RiskBar/RiskBar";
const SingleProjectPage = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [project_Data, set_Project_Data] = useState({});
  const [task_Data, set_Task_Data] = useState([]);
  const [task_Data1, set_Task_Data1] = useState([]);
  const [AddStatus, UpdateStatus] = useState(false);
  const [Project_name, Set_Project_Name] = useState("Project1");
  const [input_text, Set_Input] = useState("");
  const [Risk, RiskStatus] = useState("Low");
  const [Priority, PriorityStatus] = useState("New");
  const params = useParams();
  let url_data = params.project_id.split("&");
  let project_id = url_data[0];
  let project_Number = url_data[1];
  const mydata = async () => {
    setLoading(true);
    let datais = await GetProjectDataById(project_id);
    set_Project_Data(datais);
    let data2 = datais.project.filter((el) => {
      if (project_Number == el.id) {
        return el;
      }
    });
    Set_Project_Name(data2[0].title);
    set_Task_Data(data2[0].data);
    set_Task_Data1(data2[0].data);
    setLoading(false);
    return;
  };
  useEffect(() => {
    mydata();
  }, [project_id,project_Number]);

  const Addtask = () => {
    const d = new Date();
    let date = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    let obj = {
      name: input_text,
      status: Priority,
      risk: Risk,
      date: date,
      assigne: "abc@xyz.com",
    };
    set_Task_Data([...task_Data, obj]);
    set_Task_Data1([...task_Data, obj]);
    task_Data.push(obj);
    let projectis = project_Data.project;
    let new_project_data = projectis.map((el) => {
      if (project_Number == el.id) {
        return { ...el, data: task_Data };
      } else {
        return el;
      }
    });
    console.log(new_project_data);
    AddTask(project_id, new_project_data);
  };

  const HLSort = () => {
    set_Task_Data(task_Data1);
    let new_sort1 = task_Data.filter((el) => {
      if (el.risk == "High" || el.risk == "high") {
        return el;
      }
    });
    let new_sort2 = task_Data.filter((el) => {
      if (el.risk == "Medium" || el.risk == "medium") {
        return el;
      }
    });
    let new_sort3 = task_Data.filter((el) => {
      if (el.risk == "Low" || el.risk == "low") {
        return el;
      }
    });
    set_Task_Data([...new_sort1, ...new_sort2, ...new_sort3]);
  };
  const LHSort = () => {
    set_Task_Data(task_Data1);
    let new_sort1 = task_Data.filter((el) => {
      if (el.risk == "High" || el.risk == "high") {
        return el;
      }
    });
    let new_sort2 = task_Data.filter((el) => {
      if (el.risk == "Medium" || el.risk == "medium") {
        return el;
      }
    });
    let new_sort3 = task_Data.filter((el) => {
      if (el.risk == "Low" || el.risk == "low") {
        return el;
      }
    });
    set_Task_Data([...new_sort3, ...new_sort2, ...new_sort1]);
  };

  const HFilter = () => {
    set_Task_Data(task_Data1);
    let new_sort1 = task_Data1.filter((el) => {
      if (el.risk == "High" || el.risk == "high") {
        return el;
      }
    });
    set_Task_Data([...new_sort1]);
  };

  const MFilter = () => {
    set_Task_Data(task_Data1);
    let new_sort1 = task_Data1.filter((el) => {
      if (el.risk == "medium" || el.risk == "Medium") {
        return el;
      }
    });
    set_Task_Data([...new_sort1]);
  };
  const LFilter = () => {
    set_Task_Data(task_Data1);
    let new_sort1 = task_Data1.filter((el) => {
      if (el.risk == "Low" || el.risk == "low") {
        return el;
      }
    });
    set_Task_Data([...new_sort1]);
  };
  const NFilter = () => {
    set_Task_Data(task_Data1);
    let new_sort1 = task_Data1.filter((el) => {
      if (el.status == "New" || el.status == "new") {
        return el;
      }
    });
    set_Task_Data([...new_sort1]);
  };
  const IFilter = () => {
    set_Task_Data(task_Data1);
    let new_sort1 = task_Data1.filter((el) => {
      if (el.status == "in progress" || el.status == "In progress") {
        return el;
      }
    });
    set_Task_Data([...new_sort1]);
  };
  const CFilter = () => {
    set_Task_Data(task_Data1);
    let new_sort1 = task_Data1.filter((el) => {
      if (el.status == "Completed" || el.status == "completed") {
        return el;
      }
    });
    set_Task_Data([...new_sort1]);
  };
  return (
    <Box>
      <Box className={style.Notification_Alert}>
      Congratulations ! ,You have successfully logged-in. 
      </Box>
      <Box className={style.Project_Details}>
        <MenuDrawer title={Project_name} />
        <Box className={style.Project_Details_Data}>
          <Box>
            <Tooltip label="Hover me" className={style.Project_Details_Data0}>
              <Box className={style.Project_Details_Data00}>7 days left</Box>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              label="Share With 1 Group"
              className={style.Project_Details_Data1}
            >
              <Box className={style.Project_Details_Data11}>
                <FiUsers />
                <Box>Share</Box>
              </Box>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              label="Search By task / Not Available"
              className={style.Project_Details_Data1}
            >
              <Box className={style.Project_Details_Data11}>
                <BiSearch />
                <Box>Search</Box>
              </Box>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip
              label="Pro-Flo Assistance / Not Available"
              className={style.Project_Details_Data1}
            >
              <Box className={style.Project_Details_Data11}>
                <AiOutlineQuestionCircle />
              </Box>
            </Tooltip>
          </Box>
          <Box
            onClick={() => {
              UpdateStatus(!AddStatus);
            }}
          >
            <Tooltip
              label="Crete Project"
              className={style.Project_Details_Data1}
            >
              <Box className={style.Project_Details_Data11}>
                <AiOutlinePlusSquare />
              </Box>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      {/* Table */}
      <Box className={style.Table_Data}>
        <Tabs>
          <TabList className={style.Table_Data_Tab}>
            <Tab className={style.Table_Data1}>
              <AiOutlineTable />
              <Box>Table</Box>
            </Tab>
            <Tab className={style.Table_Data1}>
              <MdLeaderboard />
              <Box>Board</Box>
            </Tab>
            <Tab className={style.Table_Data1}>
              <AiOutlineCalendar />
              <Box>Calender</Box>
            </Tab>
            <Box className={style.Table_Data2}>
              <BiFilterAlt />
              <Box className={style.Table_Data22}>
                <Menu>
                  <MenuButton
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    borderRadius="md"
                    borderWidth="1px"
                    _hover={{ bg: "gray.400" }}
                    _expanded={{ bg: "blue.400" }}
                    _focus={{ boxShadow: "outline" }}
                  >
                    Filter <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        HFilter();
                      }}
                    >
                      High-Risk
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        MFilter();
                      }}
                    >
                      Medium-Risk
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        LFilter();
                      }}
                    >
                      Low-Risk
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                      onClick={() => {
                        NFilter();
                      }}
                    >
                      New Task
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        IFilter();
                      }}
                    >
                      In-Progress Task
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        CFilter();
                      }}
                    >
                      Completed Task
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
            <Box className={style.Table_Data2}>
              <BsArrowDownUp />
              <Box className={style.Table_Data22}>
                <Menu>
                  <MenuButton
                    px={4}
                    py={2}
                    transition="all 0.2s"
                    borderRadius="md"
                    borderWidth="1px"
                    _hover={{ bg: "gray.400" }}
                    _expanded={{ bg: "blue.400" }}
                    _focus={{ boxShadow: "outline" }}
                    className={style.Table_Pri_Button}
                  >
                   <Box>Priority</Box> <Box> <ChevronDownIcon /></Box>
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        HLSort();
                      }}
                    >
                      High-Low
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        LHSort();
                      }}
                    >
                      Low-High
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
            <Box className={style.Table_Data2}>
              <Tooltip label="More" className={style.Project_Details_Data1}>
                <Box>
                  <FiMoreHorizontal />
                </Box>
              </Tooltip>
            </Box>
          </TabList>

          <TabPanels>
            <TabPanel>
              {/* Table data here-start */}
              <TableContainer>
                <Table variant="simple">
                  {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th style={{ paddingLeft: "35px" }}>Status</Th>
                      <Th style={{ paddingLeft: "35px" }}>Risk</Th>
                      <Th style={{ paddingLeft: "35px" }}>Date</Th>
                    </Tr>
                  </Thead>
                  {/* <GrTasks/> */}
                  <Tbody>
                    {task_Data.map((el) => {
                      return (
                        <Tr key={el.name}>
                          <Td display={"flex"} mr="5px">
                            <RxDotFilled />
                            {el.name}
                          </Td>
                          <Td>
                            <StatusBar
                              el={el}
                              project_Data={project_Data}
                              project_id={project_id}
                              task_Data={task_Data}
                              project_Number={project_Number}
                            />
                          </Td>
                          <Td>
                            <RiskBar
                              el={el}
                              project_Data={project_Data}
                              project_id={project_id}
                              task_Data={task_Data}
                              project_Number={project_Number}
                            />{" "}
                          </Td>
                          <Td>{el.date}</Td>
                        </Tr>
                      );
                    })}
                    {!AddStatus && (
                      <Tfoot>
                        <Tr>
                          <Th
                            onClick={() => {
                              UpdateStatus(!AddStatus);
                            }}
                          >
                            Add New Task
                          </Th>
                        </Tr>
                      </Tfoot>
                    )}

                    {AddStatus && (
                      <Tr>
                        <Td>
                          <Input
                            placeholder={"Enter Task Name"}
                            value={input_text}
                            w={"50%"}
                            onChange={(e) => {
                              Set_Input(e.target.value);
                            }}
                          />
                        </Td>
                        <Td>
                          <Menu>
                            {({ isOpen }) => (
                              <>
                                <MenuButton isActive={isOpen} as={Button}>
                                  {Priority}
                                </MenuButton>
                                <MenuList>
                                  <MenuItem
                                    onClick={() => {
                                      PriorityStatus("New");
                                    }}
                                  >
                                    <GrCheckbox
                                      style={{
                                        backgroundColor: "rgb(72 87 118)",
                                        marginRight: "5px",
                                      }}
                                    />
                                    New
                                  </MenuItem>
                                  <MenuItem
                                    onClick={() => {
                                      PriorityStatus("Planned");
                                    }}
                                  >
                                    <GrCheckbox
                                      style={{
                                        backgroundColor: "rgb(23 155 255)",
                                        marginRight: "5px",
                                      }}
                                    />
                                    Planned
                                  </MenuItem>
                                  <MenuItem
                                    onClick={() => {
                                      PriorityStatus("In progress");
                                    }}
                                  >
                                    <GrCheckbox
                                      style={{
                                        backgroundColor: "rgb(20 25 47)",
                                        marginRight: "5px",
                                      }}
                                    />
                                    In progress
                                  </MenuItem>
                                  <MenuItem
                                    onClick={() => {
                                      PriorityStatus("Review");
                                    }}
                                  >
                                    <GrCheckbox
                                      style={{
                                        backgroundColor: "rgb(255 238 7)",
                                        marginRight: "5px",
                                      }}
                                    />
                                    Review
                                  </MenuItem>
                                  <MenuItem
                                    onClick={() => {
                                      PriorityStatus("Completed");
                                    }}
                                  >
                                    <GrCheckbox
                                      style={{
                                        backgroundColor: "rgb(187 32 51)",
                                        marginRight: "5px",
                                      }}
                                    />
                                    Completed
                                  </MenuItem>
                                </MenuList>
                              </>
                            )}
                          </Menu>
                        </Td>
                        <Td>
                          <Menu>
                            {({ isOpen }) => (
                              <>
                                <MenuButton isActive={isOpen} as={Button}>
                                  {Risk}
                                </MenuButton>
                                <MenuList>
                                  <MenuItem
                                    onClick={() => {
                                      RiskStatus("Low");
                                    }}
                                  >
                                    <GrCheckbox
                                      style={{
                                        backgroundColor: "green",
                                        marginRight: "5px",
                                      }}
                                    />
                                    Low
                                  </MenuItem>
                                  <MenuItem
                                    onClick={() => {
                                      RiskStatus("Medium");
                                    }}
                                  >
                                    <GrCheckbox
                                      style={{
                                        backgroundColor: "rgb(255 238 7)",
                                        marginRight: "5px",
                                      }}
                                    />
                                    Medium
                                  </MenuItem>
                                  <MenuItem
                                    onClick={() => {
                                      RiskStatus("High");
                                    }}
                                  >
                                    <GrCheckbox
                                      style={{
                                        backgroundColor: "rgb(187 32 51)",
                                        marginRight: "5px",
                                      }}
                                    />
                                    High
                                  </MenuItem>
                                </MenuList>
                              </>
                            )}
                          </Menu>
                        </Td>
                        <Td>
                          <Button
                            colorScheme="white"
                            backgroundColor={"gray"}
                            onClick={() => {
                              Addtask();
                              Set_Input("");
                              myTost(toast);
                            }}
                          >
                            Add
                          </Button>
                        </Td>
                        <Td
                          onClick={() => {
                            UpdateStatus(!AddStatus);
                          }}
                        >
                          <AiFillCloseCircle size={30} />
                        </Td>
                      </Tr>
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
              {/* Table data here-end */}
            </TabPanel>
            <TabPanel>
              <Heading>Coming soon....</Heading>
              <Heading>We are working On It :-</Heading>
              <Image
                w={"50%"}
                m="auto"
                src="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif"
              />
            </TabPanel>
            <TabPanel>
              <Heading>Coming soon....</Heading>
              <Heading>We are working On It :-</Heading>
              <Image
                w={"50%"}
                m="auto"
                src="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif"
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default SingleProjectPage;

const myTost = (toast) =>
  toast({
    title: "Successfully Added.",
    description: "New Task Has Been Added.",
    status: "success",
    duration: 4000,
    isClosable: true,
    position: "top",
  });
