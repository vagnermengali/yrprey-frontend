import styled from "styled-components";
import background_home from "../../../assets/image/backgrounds/background-home.svg";

export const StyledInitialSection = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_home});
  background-repeat: no-repeat;
  background-size: cover;
`;
