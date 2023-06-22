import React from "react";
import {
  StyledCard,
  LogoContainer,
  LogoImage,
  YearText,
  EducationInfo,
  SpinningLogoImage,
} from "./EducationCard.styles";
import Card from "react-bootstrap/Card";
import logo from "../../Assets/UniversityLogo.png";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

// const EducationCard = () => {
//   return (
//     <>
//       <StyledCard className="education-card">
//         <Card.Body>
//           <Container>
//             <Row>
//               <Col xs={2}>
//                 <LogoContainer>
//                   <LogoImage src={logo} alt="University Logo" />
//                 </LogoContainer>
//               </Col>
//               <Col xs={8}>
//                 <EducationInfo>
//                   {/* <Card.Title>Education</Card.Title> */}
//                   <Card.Text>
//                     <strong>University of South Florida</strong>
//                     <br />
//                     Degree: Bachelor of Science in Integrative Animal Biology
//                   </Card.Text>
//                 </EducationInfo>
//               </Col>
//               <Col xs={2}>
//                 <YearText>Year: 2015 - 2020</YearText>
//               </Col>
//             </Row>
//           </Container>
//           <Card.Text>
//             <strong>Facts and Statistics:</strong>
//             <br />
//             ⦿ Strong foundation in the biological sciences, including genetics,
//             cell biology, and physiology.
//             <br />
//             ⦿ Over 120 degree hours of coursework, including 30 hours of upper
//             level biology courses.
//             <br />⦿ 3.0 GPA
//           </Card.Text>
//         </Card.Body>
//       </StyledCard>

//       {/* Second Education Card */}
//       <StyledCard className="education-card">
//         <Card.Body>
//           <Container>
//             <Row>
//               <Col xs={2}>
//                 <LogoContainer>
//                   <LogoImage src={logo} alt="University Logo 2" />
//                 </LogoContainer>
//               </Col>
//               <Col xs={8}>
//                 <EducationInfo>
//                   {/* <Card.Title>Education</Card.Title> */}
//                   <Card.Text>
//                     <strong>Another University</strong>
//                     <br />
//                     Degree: Bachelor of Science in Information Science with a
//                     Concentration in Information Security
//                   </Card.Text>
//                 </EducationInfo>
//               </Col>
//               <Col xs={2}>
//                 <YearText>Year: 2021 - 2025</YearText>
//               </Col>
//             </Row>
//           </Container>
//           <Card.Text>
//             <strong>Facts and Statistics:</strong>
//             <br />
//             ⦿ Comprehensive knowledge of programming languages and software
//             development.
//             <br />
//             ⦿ Completed several projects, including web applications and mobile
//             apps.
//             <br />⦿ 3.8 GPA
//           </Card.Text>
//         </Card.Body>
//       </StyledCard>
//     </>
//   );
// };

const EducationCard = () => {
  return (
    <>
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
                  <strong>University of South Florida</strong>
                  <br />
                  Degree: Bachelor of Science in Integrative Animal Biology
                </Card.Text>
              </EducationInfo>
            </Col>
            <Col xs={12} sm={2}>
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
      </StyledCard>

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
                  <strong>University of South Florida</strong>
                  <br />
                  Degree: Bachelor of Science in Information Science with a
                  Concentration in Information Security
                </Card.Text>
              </EducationInfo>
            </Col>
            <Col xs={12} sm={2}>
              <YearText>Year: 2021 - 2025</YearText>
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
          <br />⦿ 3.8 GPA
        </Card.Text>
      </StyledCard>
    </>
  );
};

export default EducationCard;
