import React from "react";
import { Dropdown } from "react-bootstrap";

function MyDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Technologies Used
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#action1">HTML</Dropdown.Item>
        <Dropdown.Item href="#action2">CSS</Dropdown.Item>
        <Dropdown.Item href="#action3">JavaScript</Dropdown.Item>
        <Dropdown.Item href="#action3">Tailwind</Dropdown.Item>
        <Dropdown.Item href="#action3">Two Server-side APIs</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
function MyDropdown2() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Technologies Used
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#action1">Node.JS</Dropdown.Item>
        <Dropdown.Item href="#action2">Express.JS</Dropdown.Item>
        <Dropdown.Item href="#action3">JavaScript</Dropdown.Item>
        <Dropdown.Item href="#action3">MongoDB</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export { MyDropdown, MyDropdown2 };
