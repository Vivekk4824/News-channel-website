import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import FeedbackPopup from "./components/FeedbackPopup";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Homepage />
      <Footer />
      <FeedbackPopup />
    </div>
  );
};

export default App;
