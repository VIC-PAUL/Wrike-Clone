import { Menu, MenuButton, MenuItem, MenuList, Button } from "@chakra-ui/react";
import { GrCheckbox } from "react-icons/gr";
import React, { useState } from "react";
import { AddTask } from "../../axios";
import { useEffect } from "react";

const StatusBar = ({
  el,
  project_Data,
  project_id,
  task_Data,
  project_Number,
}) => {
  const [Priority, PriorityStatus] = useState(el.status);
  let taken_data = {
    ...el,
    status: Priority,
  };
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
  }, [Priority]);
  console.log("taken_data", taken_data);
  return (
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
  );
};

export default StatusBar;

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
