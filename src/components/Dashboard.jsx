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
            <h3> All features</h3>
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
              <Input placeholder="First name" size="lg" />
            </FormControl>

            <Button colorScheme="teal" size="lg">
              Button
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
      </div>
    </>
  );
};

export default Dashboard;
