import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

type ThemeProviderProps = React.PropsWithChildren<{}>;

function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <div className={`min-h-screen ${theme === "dark" ? "dark" : "light"}`}>
      {children}
    </div>
  );
}

export default ThemeProvider;
