import styled from "styled-components";

export const WorkSec = styled.div`
  @media (max-width: 767px) {
    .col-md-4 {
      margin-bottom: 20px;
    }
  }
  color: white;

  .card {
    background-color: black;
    box-shadow: 0 0px 5px 6px rgba(119, 53, 136, 0.459);
  }

  .card-img-top {
    justify-content: center;
  }

  .btn {
    background-color: #772e8b;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-title {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
