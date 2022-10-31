import { StartButton } from "../components/buttons/StartButton";
import { Cursor } from "../components/cursors/StartCursor";
import CursorContextProvider from "../components/cursors/ContextProvider";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Content = styled.main`
  cursor: none !important;
  height: 100vh;
  width: 100vw;
`;
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
export const GeneratingPage = () => <div></div>;
