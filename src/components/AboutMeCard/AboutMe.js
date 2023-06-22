import React from "react";
import { Card, Image, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import ProfileImage1 from "../../Assets/crop-pic-of-me2.jpg";
// Styled components
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled(Image)`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const AboutMeCard = () => {
  return (
    <CardContainer>
      <Card className="w-100" style={{ maxwidth: "500px" }}>
        <CardContent>
          <ProfileImage src={ProfileImage1} roundedCircle />
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Name: Dylan Yong</ListGroup.Item>
              <ListGroup.Item>Age: 26</ListGroup.Item>
              <ListGroup.Item>Location: Orlando, Florida</ListGroup.Item>
              <ListGroup.Item>
                Description: I am a highly skilled full-stack developer with a
                dual bachelor's degree. With a strong passion for continuous
                learning, I have acquired over 8 years of extensive college
                education in various fields. In 2020, I completed my Bachelor of
                Science degree in Integrative Animal Biology from the University
                of South Florida. Building upon my knowledge, I pursued a second
                bachelor's degree in Information Science with a concentration in
                Information Security, which I completed in 2022 from the same
                university. Additionally, I graduated from the University of
                Central Florida Coding Bootcamp in 2023. My expertise lies in a
                wide range of technologies and frameworks, including Javascript,
                node.js, express.js, React.js, MongoDB, MySQL, and more. As a
                full-stack developer, I possess comprehensive skills across the
                entire software development process, enabling me to design and
                develop robust and scalable applications.
              </ListGroup.Item>
              {/* Add more stats or information here */}
            </ListGroup>
          </Card.Body>
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default AboutMeCard;
