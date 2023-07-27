import React from "react";
import {
  StyledCard,
  LogoContainer,
  LogoImage,
  EducationInfo,
  SpinningLogoImage,
} from "./EducationCard.styles";
import Card from "react-bootstrap/Card";
import logo from "../../Assets/UniversityLogo.png";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";

const EducationCard = () => {
  return (
    <>
      {/* Second Education Card */}
      <StyledCard className="education-card">
        <Container>
          <Row>
            <Col xs={12} sm={2}>
              <LogoContainer>
                {/* Use the SpinningLogoImage component instead of LogoImage */}
                <SpinningLogoImage src={logo} alt="University Logo 2" />
              </LogoContainer>
            </Col>
            <Col xs={12} sm={8}>
              <EducationInfo>
                <Card.Text>
                  <strong>University of South Florida (2020-2022)</strong>
                  <br />
                  Degree: Bachelor of Science in{" "}
                  <span className="underline">Information Science</span> with a
                  Concentration in{" "}
                  <span className="underline">Information Security</span>
                </Card.Text>
              </EducationInfo>
            </Col>
          </Row>
        </Container>
        <Card.Text>
          <strong>Facts and Statistics:</strong>
          <br />
          ⦿ Comprehensive knowledge of programming languages and software
          development.
          <br />
          ⦿ Completed several projects, including web applications and mobile
          apps.
          <br />⦿ Honors Recognition: Cum Laude - 3.6 GPA
        </Card.Text>
      </StyledCard>

      {/* First Education Card */}
      <StyledCard className="education-card">
        <Container>
          <Row>
            <Col xs={12} sm={2}>
              <LogoContainer>
                {/* Use the SpinningLogoImage component instead of LogoImage */}
                <SpinningLogoImage src={logo} alt="University Logo" />
              </LogoContainer>
            </Col>
            <Col xs={12} sm={8}>
              <EducationInfo>
                <Card.Text>
                  <strong>University of South Florida (2015-2020)</strong>
                  <br />
                  Degree: Bachelor of Science in{" "}
                  <span className="underline"> Integrative Animal Biology</span>
                </Card.Text>
              </EducationInfo>
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
      </StyledCard>
    </>
  );
};

export default EducationCard;
