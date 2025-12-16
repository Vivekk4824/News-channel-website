import Header from "../components/Header";
import Footer from "../components/Footer";
import FeedbackPopup from "../components/FeedbackPopup";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet /> {/* 👈 Homepage renders here */}
      <Footer />
      <FeedbackPopup />
    </div>
  );
};

export default MainLayout;
