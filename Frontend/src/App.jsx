import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Admin/Login";
import AdminHome from "./Admin/AdminHome";
import AppointmentDetails from "./Admin/AppointmentDetails";
import ThankYou from "./Common/ThankYou";
import ThanksFeed from "./Common/ThanksFeed";
import FeedbackSlider from "./Components/FeedbackSlider";
import ViewFeedbacks from "./Admin/ViewFeedbacks";
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/adminhome" element={<AdminHome />}/>
      <Route path="/fulldetail/:id" element={<AppointmentDetails />}/>
      <Route path="/thankyou" element={<ThankYou />}/>
      <Route path="/thankyoufeed" element={<ThanksFeed />}/>
      <Route path="/allfeeds" element={<FeedbackSlider />}/>
      <Route path="/feedbacks" element={<ViewFeedbacks />}/>
      </Routes>
    </div>
  );
}

export default App;
