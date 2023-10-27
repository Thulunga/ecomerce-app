import React from "react";
import { Provider } from "react-native-paper";
import { theme } from "./src/core/theme";
import Routes from "./routes/Routes";

export default function App() {
  return (
    <Provider theme={theme}>
      <Routes />
    </Provider>
  );
}
