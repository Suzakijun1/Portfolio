import styled from "styled-components";

export const NavbarContainer = styled.div`
  justify-content: space-between !important;
  font-size: larger;
  font-weight: bold;

  ul {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .navbar-nav .nav-link:hover,
  .navbar-nav .nav-link.active {
    color: cyan;
  }
  .navbar-nav .nav-link {
    color: white;
  }
  @media (max-width: 768px) {
    /* Adjust the height for smaller screens */
    /* height: 60px; */

    ul {
      gap: 10px;
    }
  }
`;
