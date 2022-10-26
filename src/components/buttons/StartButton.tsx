import styled from "styled-components";
import { useState } from "react";
interface Props {
  left: string;
  top: string;
  transform: boolean;
}
const Button = styled.button<Props>`
  font-family: "Press Start 2P";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 25px;
  text-transform: uppercase;
  border: 0;
  position: absolute;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  &:active {
    transform: scale(0.98);
  }
  left: ${(props) => (props.left ? props.left : 0)};
  top: ${(props) => (props.top ? props.top : 0)};
  transform: ${(props) =>
    props.transform ? "translate(-50%, 0)" : "translate(0, 0)"};
`;
export const StartButton = () => {
  const [left, setLeft] = useState("50%");
  const [top, setTop] = useState("60%");
  const [transform, setTransform] = useState(true);
  return (
    <Button
      id="go"
      onMouseEnter={() => {
        setLeft(
          String(Math.floor(Math.random() * (window.innerWidth - 200))) + "px"
        );
        setTop(
          String(Math.floor(Math.random() * (window.innerHeight - 200))) + "px"
        );
        setTransform(false);
      }}
      left={left}
      top={top}
      transform={transform}
    >
      почати-{">"}
    </Button>
  );
};
