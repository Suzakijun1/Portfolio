import styled from "styled-components";

export const StyledCard = styled.div`
  border: 1px solid #ccc;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  /* background-color: #fff; */
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const LogoContainer = styled.div`
  /* float: left; */
  /* display: flex;
  justify-content: center;
  margin-bottom: 20px; */
`;

export const LogoImage = styled.img`
  width: 100px; // Adjust the width as needed
  height: 100px; // Adjust the height as needed
  @media (max-width: 768px) {
    width: 80px; // Adjust the width for smaller screens
    height: 80px; // Adjust the height for smaller screens
  }

  @media (max-width: 480px) {
    width: 60px; // Adjust the width for even smaller screens
    height: 60px; // Adjust the height for even smaller screens
  }
`;
export const YearText = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const EducationInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
