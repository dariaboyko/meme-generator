import { StartButton } from "../components/buttons/StartButton";
import styled from "styled-components";
const Content = styled.main``;
const Title = styled.h1`
  font-family: "Press Start 2P";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  text-transform: uppercase;
  text-align: center;
`;
const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 100%;
`;
export const StartPage = () => (
  <Content>
    <TitleWrapper>
      <Title>цей сайт генерує інтернет пріколи</Title>
    </TitleWrapper>
    <StartButton />
  </Content>
);
