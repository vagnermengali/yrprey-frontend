import styled from "styled-components";
import background_error from "@/assets/image/backgrounds/background-about.svg";

export const StyledWhoWeAreSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${background_error});
  background-repeat: no-repeat;
  background-size: cover;
`;