import styled from "styled-components";

export const HomeSec = styled.div`
  color: white;

  .home-content {
    font-size: 60px;
    font-weight: 600;
    line-height: 1.5;
  }

  .custom-img {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    border: 5px solid black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    max-width: 100%;
    height: auto;
    max-height: 300px;
    width: auto;
  }
  .home-btn {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 40px;
  }
  .stacked-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .stacked-text span {
    font-size: 60px;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    opacity: 0;
    font-family: "Arial", sans-serif;
    font-weight: bold;
  }

  .stacked-text span:nth-child(1) {
    animation: slideIn 2.5s ease-in-out 0s forwards;
    align-self: flex-start;
  }

  .stacked-text span:nth-child(2) {
    animation: slideIn 2.5s ease-in-out 2s forwards;
  }

  .stacked-text span:nth-child(3) {
    animation: slideIn 2.5s ease-in-out 4s forwards;
    align-self: flex-end;
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
  .cta-section {
    /* background-color: #f1f1f1; */
    padding: 40px;
    text-align: center;
  }

  .cta-section h2 {
    font-size: 60px;
    margin-bottom: 10px;
  }

  .cta-section p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .cta-button {
    display: inline-block;
    background-color: #ff6600;
    color: #ffffff;
    padding: 12px 24px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  .cta-button:hover {
    background-color: #ff5500;
  }
`;
