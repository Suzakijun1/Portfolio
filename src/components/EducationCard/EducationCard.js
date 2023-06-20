import React from "react";
import { StyledCard } from "./EducationCard.styles";
import Card from "react-bootstrap/Card";

const EducationCard = () => {
  return (
    <StyledCard className="education-card">
      <Card.Body>
        <Card.Title>Education</Card.Title>
        <Card.Text>
          <strong>University Name</strong>
          <br />
          Degree: Bachelor of Science in Computer Science
          <br />
          Year: 2022 - 2026
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
};

export default EducationCard;
