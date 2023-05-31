import styled from "styled-components";

export const HomeSec = styled.div`
  color: white;

  .home-content {
    font-size: 60px;
    font-weight: 600;
    line-height: 1.5;
    /* margin-left: 25px; */
  }

  .custom-img {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    border: 5px solid black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    /* height: 300px;
    width: 400px; */
    max-width: 100%;
    height: auto;
    max-height: 300px;
    width: auto;

    /* height: 300px;
    width: 400px; */
  }
  .home-btn {
    margin-top: 20px;
    /* color: white; */
  }
  .stacked-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* opacity: 0; */
    /* animation: fadeIn 2s ease-in-out; */
  }
  .stacked-text span {
    font-size: 60px;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    opacity: 0;
    font-family: "Arial", sans-serif;
    font-weight: bold;
    /* animation: slideIn 1s ease-in-out; */
  }

  .stacked-text span:nth-child(1) {
    animation: slideIn 2.5s ease-in-out 0s forwards;
  }

  .stacked-text span:nth-child(2) {
    animation: slideIn 2.5s ease-in-out 2s forwards;
  }

  .stacked-text span:nth-child(3) {
    animation: slideIn 2.5s ease-in-out 4s forwards;
  }
  .stacked-text:hover span {
    color: #ff6600;
    transform: scale(1.1);
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
