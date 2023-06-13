import styled from "styled-components";

export const AboutSec = styled.div`
  color: white;
  padding: 0 15px; /* Adjust the padding as needed */

  @media (min-width: 768px) {
    padding: 0 50px;
  }

  @media (min-width: 992px) {
    padding: 0 100px;
  }

  @media (min-width: 1200px) {
    padding: 0 150px;
  }
  h1 {
    display: flex;
    justify-content: center;
    font-size: 50px;
  }
  .underline {
    text-decoration: underline;
  }
  li {
    font-size: 30px;
    text-align: center;
    color: #ff6600;
  }
  .blue-item {
    color: #ffa300;
  }
  .test {
    color: #ffa300;
  }
  .about-img {
    /* height: 300px; */
    /* margin-top: 110px; */
    /* width: 1500px; */
  }
  .skills-img {
    height: 150px;
    width: 150px;
    text-align: center;
    margin: 10px;
  }
`;
