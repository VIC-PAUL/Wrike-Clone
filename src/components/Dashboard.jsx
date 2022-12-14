import React, { useEffect, useRef } from "react";
import style from "./dashboard.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { BsArrowLeftShort } from "react-icons/bs";

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
      </div>
    </>
  );
};

export default Dashboard;
