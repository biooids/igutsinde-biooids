import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { store, persistor } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import ThemeProvider from "./components/mainComp/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </PersistGate>
);
