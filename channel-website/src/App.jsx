import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import Homepage from "./pages/Homepage";
import India from "./pages/India";
import World from "./pages/World";
import Sports from "./pages/Sports";
import Signinform from "./auth/forms/Signinform";
import SignUpform from "./auth/forms/SignUpform";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./auth/AuthLayout";

const App = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/india" element={<India />} />
            <Route path="/world" element={<World />} />
            <Route path="/sports" element={<Sports />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<Signinform />} />
            <Route path="/sign-up" element={<SignUpform />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
