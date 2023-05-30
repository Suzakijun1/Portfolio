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
        <Dropdown.Item href="#action3">RESTful APIs</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyDropdown;
