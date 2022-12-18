import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { GrCheckbox } from "react-icons/gr";
import { AddTask } from "../../axios";
const RiskBar = ({
  el,
  project_Data,
  project_id,
  task_Data,
  project_Number,
}) => {
  const [Risk, RiskStatus] = useState(el.risk);
  let project_name = el.name;
  useEffect(() => {
    Updatetask(
      project_Data,
      project_id,
      task_Data,
      project_Number,
      taken_data,
      project_name
    );
  }, [Risk]);
  let taken_data = {
    ...el,
    risk: Risk,
  };
  return (
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
  );
};

export default RiskBar;

const Updatetask = (
  project_Data,
  project_id,
  task_Data,
  project_Number,
  taken_data,
  project_name
) => {
  const d = new Date();
  let date = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
  let task_Data1 = task_Data.map((el) => {
    if (el.name == project_name) {
      return taken_data;
    } else {
      return el;
    }
  });
  let projectis = project_Data.project;
  let new_project_data = projectis.map((el) => {
    if (project_Number == el.id) {
      return { ...el, data: task_Data1 };
    } else {
      return el;
    }
  });
  console.log(new_project_data);
  AddTask(project_id, new_project_data);
};
