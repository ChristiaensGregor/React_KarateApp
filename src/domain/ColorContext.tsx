import { createContext } from "react";

export interface ColorContextProps {
  toggleMode: () => void;
}

export const Colorcontext = createContext<ColorContextProps>({} as ColorContextProps);
