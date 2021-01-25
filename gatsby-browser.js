import React from "react";

import "./src/styles/global.css";
import ThemeProvider from "./src/providers/theme";

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;