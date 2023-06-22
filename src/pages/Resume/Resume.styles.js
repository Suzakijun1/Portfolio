import styled from "styled-components";

export const ResumeSec = styled.div`
  color: white;
  @media screen and (max-width: 768px) {
    .resume-image {
      max-width: 90%;
      height: auto;
    }
  }

  @media screen and (min-width: 769px) {
    .resume-image {
      max-width: 50%;
      height: auto;
    }
  }
`;
