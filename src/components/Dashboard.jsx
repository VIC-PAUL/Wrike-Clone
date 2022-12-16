import React, { useEffect, useRef } from "react";
import style from "./dashboard.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
  Icon,
} from "@chakra-ui/react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Dashboard = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
      <div>
        <div className={style.compoent1}>
          <div>
            <h3>
              {" "}
              <Icon
                as={BsArrowLeftShort}
                fontSize="1.9rem"
                marginRight={"1px"}
                paddingTop="4px"
              />
              All features{" "}
            </h3>
          </div>

          <div className={style.compoent1_2}>
            <h1>
              Drive Results With Project Dashboards for Project Management
              Software
            </h1>
          </div>

          <div className={style.compoent1_3}>
            <p>
              Wrike’s project dashboard gathers everything teams need to succeed
              in one place: plans, progress, analytics, and more.
            </p>
          </div>

          <div className={style.compoent1_4}>
            <FormControl isRequired style={{ width: "22rem" }}>
              <Input placeholder="Enter your business email" size="lg" />
            </FormControl>

            <Button colorScheme="teal" size="lg">
              Get Started
            </Button>
          </div>

          <div className={style.compoent1_5}>
            <video
              style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
              playsInline
              loop
              muted
              controls
              alt="All the devices"
              src="https://cdn.wrike.com/video/LP_Animation_Reports.mp4"
              ref={videoEl}
            />
          </div>

          <div className={style.compoent1_6}>
            <div className={style.compoent1_6_1}>
              <h1>TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</h1>
            </div>
            <div className={style.compoent1_6_2}>
              <img
                src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-white-google.svg"
                alt="google"
              />
              <img
                src="https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos-white.svg"
                alt="syneos"
              />
              <img
                style={{ width: "40px" }}
                src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-lyft-white.svg"
                alt="lyft"
              />
              <img
                src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-white-siemens.svg"
                alt="simens"
              />
              <img
                src="https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon-white.svg"
                alt="nickldeon"
              />
              <img
                style={{ width: "55px" }}
                src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-white-oglivy.svg"
                alt="ogilvy"
              />
              <img
                src="https://web-static.wrike.com/tp/storage/uploads/5ce76ec8-86e1-42ce-9a8e-acafa4cdd82e/1440-logoroll-logo-snowflake-white.svg"
                alt="anowwfalke"
              />
            </div>
          </div>
        </div>

        <div className={style.compoent2}>
          <div className={style.compoent2_1}>
            <h1>
              <span className={style.underlineColour}>
                Prioritize instantly
              </span>
              with project dashboards
            </h1>
            <p>
              Get a detailed overview of project and team progress in real time
              with Wrike’s project dashboard. Here’s a look at the features
              you’ll have at your fingertips with Wrike:
            </p>
          </div>
        </div>

        <div className={style.compoent3}>
          <div className={style.compoent3_tab}>
            <Accordion
              color="#fff"
              backgroundColor="#04454d"
              // backgroundColor="#ebf5f3"
              borderRadius="10px"
              padding="5px"
            >
              <AccordionItem>
                <h2>
                  <AccordionButton borderRadius="12px">
                    <Box as="h1" flex="1" textAlign="left">
                      Access real-time data
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  as="p"
                  textAlign="left"
                  borderBottom="4px solid #08cf65"
                >
                  When you're planning a complex project,you need instant
                  updates on project progress. Wrike;s project dashboards allow
                  you a real-time glimps into every elemnt of your project, as
                  well as a widget builder to add new item to reack as you need.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton borderRadius="12px">
                    <Box as="h1" flex="1" textAlign="left">
                      View project progress
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  as="p"
                  textAlign="left"
                  borderBottom="4px solid #08cf65"
                >
                  Wrike's dynmic dashboards enable teams to build custom
                  workflow to suit their processes.Use Kanban boards to to
                  manage task progress,plans widtg project timelines,schedule
                  with shared calenders,and share update using tables.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton borderRadius="12px">
                    <Box as="h1" flex="1" textAlign="left">
                      Visualize key metrics
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  as="p"
                  textAlign="left"
                  borderBottom="4px solid #08cf65"
                >
                  With Wrike's dashboard tools,you can measure key performnce
                  indicators all in one place. Use our timelinestracker to help
                  manage billable hours,view cost and budget caluclations,assess
                  project risk with our business intelligance, and much more.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton borderRadius="12px">
                    <Box as="h1" flex="1" textAlign="left">
                      Utilize Wrike Insights
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  as="p"
                  textAlign="left"
                  borderBottom="4px solid #08cf65"
                >
                  Import data from over 50 digtal marketing tools with Wrike
                  Insights.Switching between tool can disrupt your team's flow,
                  so Wrike enables teams to assess performance of assets and
                  campaigns across channels using just one interface.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton borderRadius="12px">
                    <Box as="h1" flex="1" textAlign="left">
                      Enable Workload view
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  as="p"
                  textAlign="left"
                  borderBottom="4px solid #08cf65"
                >
                  Wrike's intuitive Workload view is fully interactive allowing
                  you to easily optmize your team's schedule with the
                  drag-and-drop function. It can be used for resource planning,
                  adjusting your team's workload, or creating a project
                  schedule.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton borderRadius="12px">
                    <Box as="h1" flex="1" textAlign="left">
                      Customization
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  as="p"
                  textAlign="left"
                  borderBottom="4px solid #08cf65"
                >
                  Sucessful projects require robuust performance reports to
                  avoid cost overrun and bottlencks.Custom fields can be used to
                  create anay reports, from budget spend to campaign
                  reach.Provide real-time insights to stakeholders at your
                  peferred cadence.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>

          <div className={style.compoent3_image}>
            <img
              src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=513,dpr=2/tp/storage/uploads/ae5f4bc3-c6da-4bc2-81e9-5d5bf504d8d6/rebrand-screenshot-dashboards-resized-shadow-2x.png"
              alt="img"
            />
          </div>
        </div>

        <div className={style.compoent4}>
          <div className={style.compoent4_1}>
            <Button colorScheme="teal" size="lg">
              Get Started
            </Button>
          </div>
          <div className={style.compoent4_2}>
            <h1>Maximize output with project management dashboards</h1>
            <p>
              Use Wrike’s project management dashboard to get a detailed
              overview of progress at an individual, team, and department level
              with a shareable project status dashboard.
            </p>
          </div>
        </div>

        <div className={style.compoent5}>
          <div className={style.compoent5_1}>
            <img
              src="https://web-static.wrike.com/tp/storage/uploads/9a630f3b-764c-4d28-9aac-fb26f46479f5/refresh-icon-changes-scale.svg"
              alt="as"
            />
            <h1>Auto-organize your intake</h1>
            <p>
              Save time and keep important details at your teams’ fingertips —
              Wrike’s project dashboard automatically prioritizes tasks for you.
            </p>
          </div>

          <div className={style.compoent5_1}>
            <img
              src="https://web-static.wrike.com/tp/storage/uploads/rebrand-icon-manage-anything.svg"
              alt="a1"
            />
            <h1>Custom-build for your teams</h1>
            <p>
              Pin important projects and decide exactly what to monitor in your
              project dashboard, including tasks by custom status.
            </p>
          </div>

          <div className={style.compoent5_1}>
            <img
              src="https://web-static.wrike.com/tp/storage/uploads/eecf8e71-a63b-433e-88c6-80a3a549644f/rebrand-icon-visibility-binoculars-1.svg"
              alt="ao"
            />
            <h1>Gain big picture visibility</h1>
            <p>
              Wrike’s program management dashboard helps you assess ongoing work
              at any level: team, project, department, or organization‑wide.
            </p>
          </div>
        </div>

        <div className={style.compoent6}>
          <div className={style.compoent6_1}>
            <Button colorScheme="teal" size="lg">
              Try for Free
            </Button>
          </div>

          <div className={style.compoent6_2}>
            <h1>Customer success stories</h1>
          </div>
        </div>

        <div className={style.compoent7}>
          <div>
            <div className={style.compoent7_1}>
              <img
                src="https://web-static.wrike.com/tp/storage/uploads/dd28e924-4e80-4cbe-ad67-a7939aa06bad/rebrand-quote-slider-logo-aerotek.svg"
                alt="ar"
              />
              <h1>Aerotek</h1>
            </div>

            <div className={style.compoent7_2}>
              <h2>90%</h2>
              <p>decrese in emails</p>
              <h3>
                Read customer story{" "}
                <Icon as={BsArrowRightShort} mt={"0.8rem"} ml={"0.8rem"} />
              </h3>
            </div>
          </div>

          <div>
            <div className={style.compoent7_1}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVpWE1vHhvY-Vc7NBbl9wZmfQVeQAWrPGfo2XbOUxH&s"
                alt="ar"
              />
            </div>

            <div className={style.compoent7_2}>
              <h2>400</h2>
              <p>hours of meeting saved</p>
              <h3>
                Read customer story{" "}
                <Icon as={BsArrowRightShort} mt={"0.8rem"} ml={"0.8rem"} />
              </h3>
            </div>
          </div>
          <div>
            <div className={style.compoent7_1}>
              <img
                src="https://web-static.wrike.com/tp/storage/uploads/rebrand-quote-slider-logo-inspiration-cruises-tours.svg"
                alt="ar"
              />
            </div>

            <div className={style.compoent7_2}>
              <h2>15%</h2>
              <p>increse in productivity</p>
              <h3>
                Read customer story{" "}
                <Icon as={BsArrowRightShort} mt={"0.8rem"} ml={"0.8rem"} />
              </h3>
            </div>
          </div>
        </div>

        <div className={style.compoent8_heading}>
          <h1>Hit the ground running with our pre-built templates</h1>
        </div>

        <div className={style.compoent8}>
          <div>
            <div className={style.compoent8_img}>
              <img
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/6d1a2f11-9e35-4e96-b3b7-ed488fc50c58/rebrand-cover-templates-project-performance-2x.png"
                alt="dev"
              />
            </div>
            <p>PROJECT MANAGEMENT</p>
            <h1>Prject Performance Template</h1>
            <p>
              Use Wrike’s project management dashboard to get a detailed
              overview of progress at an individual, team, and department level
              with a shareable project status dashboard.
            </p>
          </div>

          <div>
            <div className={style.compoent8_img}>
              <img
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/6d1a2f11-9e35-4e96-b3b7-ed488fc50c58/rebrand-cover-templates-project-performance-2x.png"
                alt="dev"
              />
            </div>
            <p>PROJECT MANAGEMENT</p>
            <h1>Prject Performance Template</h1>
            <p>
              Use Wrike’s project management dashboard to get a detailed
              overview of progress at an individual, team, and department level
              with a shareable project status dashboard.
            </p>
          </div>

          <div>
            <div className={style.compoent8_img}>
              <img
                src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=297,dpr=2/tp/storage/uploads/6d1a2f11-9e35-4e96-b3b7-ed488fc50c58/rebrand-cover-templates-project-performance-2x.png"
                alt="dev"
              />
            </div>
            <p>PROJECT MANAGEMENT</p>
            <h1>Prject Performance Template</h1>
            <p>
              Use Wrike’s project management dashboard to get a detailed
              overview of progress at an individual, team, and department level
              with a shareable project status dashboard.
            </p>
          </div>
        </div>

        <div className={style.compoent9}>
          <div className={style.compoent9_1}>
            <h1>Combine project dashboards with these robust features</h1>
            <p>
              Project dashboards are just one part of Wrike’s powerful features.
              Collaborate seamlessly, improve time management, and visualize
              projects to achieve results with Wrike.
            </p>
          </div>

          <div className={style.compoent9_2}>
            <div>
              <p>FEATURE</p>
              <h1>Improve time management</h1>
              <p>
                Wrie's time tracking software enables teams to improve their
                planning and resourse management and focus on billable
                work.Input houres manually or use our handy time tracker
              </p>
              <h2>
                Read more
                <Icon as={BsArrowRightShort} p="10px" />
              </h2>
            </div>

            <div>
              <p>FEATURE</p>
              <h1>Improve time management</h1>
              <p>
                Wrie's time tracking software enables teams to improve their
                planning and resourse management and focus on billable
                work.Input houres manually or use our handy time tracker
              </p>
              <h2>
                Read more
                <Icon as={BsArrowRightShort} p="10px" />
              </h2>
            </div>

            <div>
              <p>FEATURE</p>
              <h1>Improve time management</h1>
              <p>
                Wrie's time tracking software enables teams to improve their
                planning and resourse management and focus on billable
                work.Input houres manually or use our handy time tracker
              </p>
              <h2>
                Read more
                <Icon as={BsArrowRightShort} p="10px" />
              </h2>
            </div>
          </div>

          <div className={style.compoent9_3}>
            <h1>
              See All Fetures
              <Icon
                as={BsArrowRightShort}
                mt={"20px"}
                ml={"1rem"}
                paddingTop="rem"
                border={"1px solid black"}
              />
            </h1>
          </div>
        </div>

        <div className={style.compoent10}>
          <div>
            <img
              src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=432,dpr=2/tp/storage/uploads/0abf3e11-2ba9-49e1-97e8-6f1a107a9039/cta-backgrounds-updated-1.png"
              alt=""
            />
          </div>

          <div className={style.Component10_Secound_Div}>
            <h1>Project dashboards favored by 2.3 million</h1>

            <h2>Unlock better results with project dashboards</h2>

            <div className={style.compoent10_input_Main_div}>
              <input placeholder="Enter your business email  " />
              <button colorScheme="teal" size="lg">
                Start Free Trial
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=432,dpr=2/tp/storage/uploads/743aff5a-1853-4425-9d1c-ebe8deb33427/cta-backgrounds-updated.png"
              alt=""
            />
          </div>
        </div>

        <div className={style.compoent11}>
          <div>
            <Accordion>
              <AccordionItem className={style.compoent11_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      How do you create a project dashboard?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.compoent11_2}
                  textAlign="left"
                >
                  Wrike’s dashboard tool is incredibly user-friendly. There are
                  several pre-built widgets you can insert into your dashboard,
                  separated into work, personal, and project categories. If you
                  want to personalize your widgets further to show specific
                  tasks, you can easily create a custom widget. You can include
                  tasks from multiple folders and add filters to ensure your
                  widget shows exactly which tasks you need to see. You can even
                  choose to show the names of the folders on the tasks. This is
                  especially helpful if you're showing tasks from folders that
                  relate to different users or even clients.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className={style.compoent11_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      What is a project management dashboard?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.compoent11_2}
                  textAlign="left"
                >
                  A project dashboard is a data center that contains detailed
                  KPIs on tracked projects. It shows metrics like overall
                  progress and highlights problematic areas.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className={style.compoent11_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      What should be included in a project management dashboard?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.compoent11_2}
                  textAlign="left"
                >
                  A project dashboard should ideally contain the following
                  features: an activity tracker, an area for progress reports
                  and status, an area to track milestones, a personal to-do
                  list, a task status tracker, a team workload monitor, and a
                  resource allocation widget.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className={style.compoent11_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      How do Wrike’s dashboards help with reporting?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.compoent11_2}
                  textAlign="left"
                >
                  All teams on every Wrike paid plan can view Wrike’s project
                  dashboards when you start a free trial.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem className={style.compoent11_1}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontweight="bold"
                      fontSize={"18px"}
                    >
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  as="p"
                  pb={4}
                  className={style.compoent11_2}
                  textAlign="left"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
