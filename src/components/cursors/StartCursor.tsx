import useMousePosition from "../../hooks/useMousePosition";
import { useContext } from "react";
import { CursorContext } from "./ContextProvider";
import CatSVG from "../../assets/cursors/CatSVG";
export const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const cursor = useContext(CursorContext).cursor;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <CatSVG
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};
