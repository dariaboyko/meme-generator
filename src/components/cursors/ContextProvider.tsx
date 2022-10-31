import { createContext, useState } from "react";
interface ICursorContext {
  cursor: ICursor;
  setCursor: Function;
}
interface ICursor {
  active: boolean;
}
export const CursorContext = createContext<ICursorContext>({
  cursor: { active: false },
  setCursor: () => {},
});
type Props = {
  children: JSX.Element;
};
const CursorContextProvider = ({ children }: Props) => {
  const [cursor, setCursor] = useState({ active: false });

  return (
    <CursorContext.Provider value={{ cursor, setCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
