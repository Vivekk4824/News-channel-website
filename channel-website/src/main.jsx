import { StrictMode } from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LangProvider } from "./context/LanguageContext";
import { store, persistor } from "./redux/store";   // 🔥 import persistor
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LangProvider>
          <App />
        </LangProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
