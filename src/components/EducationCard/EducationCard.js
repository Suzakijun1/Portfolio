import React from "react";
import {
  StyledCard,
  LogoContainer,
  LogoImage,
  YearText,
  EducationInfo,
} from "./EducationCard.styles";
import Card from "react-bootstrap/Card";
import logo from "../../Assets/UniversityLogo.png";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

const EducationCard = () => {
  return (
    <StyledCard className="education-card">
      <Card.Body>
        <Container>
          <Row>
            <Col xs={2}>
              <LogoContainer>
                <LogoImage src={logo} alt="University Logo" />
              </LogoContainer>
            </Col>
            <Col xs={8}>
              <EducationInfo>
                {/* <Card.Title>Education</Card.Title> */}
                <Card.Text>
                  <strong>University of South Florida</strong>
                  <br />
                  Degree: Bachelor of Science in Integrative Animal Biology
                </Card.Text>
              </EducationInfo>
            </Col>
            <Col xs={2}>
              <YearText>Year: 2015 - 2020</YearText>
            </Col>
          </Row>
        </Container>
        <Card.Text>
          <strong>Facts and Statistics:</strong>
          <br />
          ⦿ Strong foundation in the biological sciences, including genetics,
          cell biology, and physiology.
          <br />
          ⦿ Over 120 degree hours of coursework, including 30 hours of upper
          level biology courses.
          <br />⦿ 3.0 GPA
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
};

export default EducationCard;
